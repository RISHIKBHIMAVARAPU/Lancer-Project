import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
// import "./messenger.css";
import styles from "./messenger.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import loginContext from "../../../index";
import Cookies from "universal-cookie";

export default function Messenger() {
  // * my code
  const loginStatusObj = useContext(loginContext);
  const cookies = new Cookies();

  const currentUserId = useParams().uid;
  // console.log(currentUserId);

  // * to scroll to bottom of div
  const bottomRef = useRef(null);

  const [conversations, setConversations] = useState(false);
  const [messages, setMessages] = useState([]);
  let messagesRef = useRef([]);
  const [currentConversationId, setCurrentConversationId] = useState(false);
  // let currentConversationUser;
  // const [currentConversationUser, setCurrentConversationUser] = useState(false);
  let currentConversationUser = useRef(false);
  let currentConversationUserExtra;
  const [newMessage, setNewMessage] = useState("");

  //* socketio code

  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/chat/conversation/${currentUserId}`)
      .then((result) => {
        if (result.data.length > 0) {
          setConversations(result.data);
          let firstConversation = result.data[0];
          setCurrentConversationId((prev) => result.data[0]._id);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/chat/message/${currentConversationId}`
      )
      .then((result) => {
        if (result.data.length > 0) {
          let users = result.data[0].users;
          let otherUser = users[0] !== currentUserId ? users[0] : users[1];
          // console.log("otherUser: " + otherUser);
          // setCurrentConversationUser(otherUser);
          // setMessages(result.data[0].messages);
          set(otherUser, result.data[0].messages);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [currentConversationId]);

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(
        `You initiated connection and your socket id is ${socket.id}`
      );

      // * sending userId to to server
      socket.emit("addUser", currentUserId);

      // * can write event here as connectection is established
      socket.on("welcome", (msg) => {
        console.log(msg);
      });

      socket.on("receiveMessage", (fromUserId, toUserId, Message) => {
        if (fromUserId === currentConversationUser.current) {
          messagesRef.current = [...messagesRef.current, Message];
          setMessages((prevMes) => {
            console.log(prevMes);
            return [...prevMes, Message];
          });
          setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      });

      setTimeout(() => {
        socket.emit(
          "sendMessage",
          (currentUserId, currentConversationUser, "my message")
        );
      }, 1000);
    });
  }, [socket]);

  function set(othUser, msgs) {
    currentConversationUser.current = othUser;
    // setCurrentConversationId(othUser);
    setMessages(msgs);
    messagesRef.current = msgs;
  }

  async function handleConversationClick(cid) {
    // console.log(cid);
    // * useEffect runs for the change in conversation id
    setCurrentConversationId(cid);

    // await axios
    //   .get(`http://localhost:5000/chat/message/${cid}`)
    //   .then((result) => {
    //     let users = result.data[0].users;
    //     let otherUser = users[0] !== currentUserId ? users[0] : users[1];
    //     // console.log("otherUser: " + otherUser);
    //     // setCurrentConversationUser(otherUser);
    //     // setMessages(result.data[0].messages);
    //     // console.log(messages);
    //     set(otherUser, result.data[0].messages);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // setTimeout(() => {
    //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, 1000);
  }

  async function handleNewMessageSubmit() {
    let data = {
      from: currentUserId,
      to: currentConversationUser.current,
      message: newMessage,
    };
    // console.log(data, currentConversationUser.current);

    // * handling message for live users

    await axios
      .post("http://localhost:5000/chat/message/add", data)
      .then((result) => {
        // console.log(result);
        setMessages([...messages, result.data]);
        messagesRef.current = [...messagesRef.current, result.data];

        // * sending message for the live user
        socket.emit(
          "sendMessage",
          currentUserId,
          currentConversationUser.current,
          result.data
        );
        // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });

    setNewMessage("");
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  return loginStatusObj.isLogin ? (
    <>
      {/* <Topbar /> */}
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatTitle}>Chat</div>
          <div className={styles.chatMenuWrapper}>
            {/* <input
              placeholder="start a new conversation"
              className="chatMenuInput"
            /> */}
            {conversations &&
              currentConversationId &&
              conversations.map((c) => (
                <div
                  onClick={() => {
                    handleConversationClick(c._id);
                  }}
                >
                  <Conversation
                    conversation={c}
                    currentUserId={currentUserId}
                    selected={c._id === currentConversationId}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            {true ? (
              <>
                <div className={styles.chatBoxTop}>
                  {messages?.length > 0 ? (
                    messages.map((m) => (
                      <div>
                        <Message
                          message={m.message}
                          own={m.from === currentUserId}
                          time={format(m.createdAt)}
                        />
                      </div>
                    ))
                  ) : (
                    <div className={styles.noConversationText}>
                      {"Start Conversation :)"}
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
                <div className={styles.chatBoxBottom}>
                  <input
                    className={styles.chatMessageInput}
                    placeholder="write something..."
                    onChange={(e) => {
                      setNewMessage(e.target.value);
                    }}
                    value={newMessage}
                  ></input>
                  {currentConversationUser && (
                    <button
                      className={styles.chatSubmitButton}
                      onClick={
                        newMessage.length > 0
                          ? handleNewMessageSubmit
                          : () => {}
                      }
                    >
                      Send
                    </button>
                  )}
                  {/* <button className="chatSubmitButton">Send</button> */}
                </div>
              </>
            ) : (
              <div className={styles.noConversationText}>
                Open a conversation to start a chat.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    "please login"
  );
}
