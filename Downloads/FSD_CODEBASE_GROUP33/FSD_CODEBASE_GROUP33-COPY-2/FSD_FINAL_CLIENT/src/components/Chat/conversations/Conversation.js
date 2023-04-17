// import axios from "axios";
import { useEffect, useState } from "react";
// import "./conversation.css";
import styles from "./conversation.module.css";
export default function Conversation({
  conversation,
  currentUserId,
  selected,
}) {
  // const [user, setUser] = useState(null);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   const friendId = conversation.members.find((m) => m !== currentUser._id);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios("/users?userId=" + friendId);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  return (
    <div
      className={
        selected
          ? `${styles.conversation} ${styles.selected}`
          : `${styles.conversation}`
      }
    >
      {/* <img className="conversationImg" src={""} alt="" /> */}
      <span className={styles.conversationName}>
        {conversation.users[0]._id != currentUserId
          ? conversation.users[0].fullname
          : conversation.users[1].fullname}
      </span>
    </div>
  );
}
