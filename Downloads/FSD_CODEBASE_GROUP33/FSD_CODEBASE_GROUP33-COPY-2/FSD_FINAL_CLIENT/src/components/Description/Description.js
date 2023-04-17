import styles from "./Description.module.css";
import img1 from "./t1.jpg";
import { useContext, useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import PIm2 from "./assets/PIm2.png";
import PIm3 from "./assets/PIm3.png";
import PIm4 from "./assets/PIm4.png";
import PIm5 from "./assets/PIm5.png";
import sellerImg from "./assets/seller1.png";
import loginContext from "../../index";
import Cookies from "universal-cookie";

function Description() {
  const loginStatusObj = useContext(loginContext);
  const cookies = new Cookies();

  const params = useParams();
  const id = params.pid;
  const uid = params.uid;
  const history = useHistory();
  const [userData, setuserdata] = useState([]);
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/service/" + id)
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    func();
  }, []);

  async function func() {
    const res = await axios.get("http://localhost:5000/user/" + uid, {
      headers: { authorization: cookies.get("jwtToken") },
    });
    // console.log("lalith");
    if (res.data == "auth failed") {
      loginStatusObj.isLogin = false;
    } else setuserdata(res.data);
  }

  async function handleAddToWishlist(sid) {
    let data = {
      uid: uid,
      sid: sid,
    };
    console.log(data);
    // * json server add to wishlist
    await axios
      .post("http://localhost:5000/wishlist/add", data)
      .then((res) => {
        // console.log(res.data);
        history.push("/wishlist/" + uid);
      })
      .catch((err) => {
        console.log(err);
      });
    // history.push("/wishlist/" + uid);

    // * mongo add to wishlist
    // await axios.post("http://localhost:5000/wishlist/add",{})
  }

  async function handleChatClick(userId, sellerId) {
    let data = {
      user1: userId,
      user2: sellerId,
    };
    console.log(data);
    if (userId === sellerId) {
      alert("Oops You are the Seller?");
    } else {
      await axios
        .post("http://localhost:5000/chat/conversation/add", data)
        .then((result) => {
          console.log(result.data);
          history.push("/chat/" + userId);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {}, []);

  //* image gallery
  // let mainImage = PIm3;
  const [mainImage, setMainImage] = useState(PIm3);
  function selectImage(image) {
    setMainImage(image);
  }
  return loginStatusObj.isLogin
    ? serviceData && (
        <div className={styles.mainDiv}>
          <div className={styles.gallery}>
            <img
              className={`${styles.mainImg}`}
              src={
                serviceData?.productImages.length > 0
                  ? serviceData?.productImages[1]
                  : mainImage
              }
              alt=""
              srcset=""
            />
            <div className={styles.subImgs}>
              <img className={styles.subImg} src={PIm3} alt="" srcset="" />
              <img className={styles.subImg} src={PIm2} alt="" srcset="" />
              <img className={styles.subImg} src={PIm4} alt="" srcset="" />
            </div>
          </div>
          <div className={styles.desc}>
            <div className={styles.title}>{serviceData.title}</div>
            <div
              className={styles.seller}
              onClick={() => {
                history.push(`/profile/${uid}/${serviceData.seller._id}`);
              }}
            >
              <img src={sellerImg} alt="" className={styles.sellerImage} />
              <div className={styles.sellerName}>
                {serviceData.seller.fullname}
              </div>
            </div>
            <div className={styles.price}>
              {" "}
              <span style={{ color: "grey" }}>Starting from</span>{" "}
              {serviceData.price}/-
            </div>
            <div className={styles.productDescription}>
              {serviceData.description}
            </div>
            <div className={styles.buttons}>
              <div
                onClick={() => {
                  handleAddToWishlist(serviceData._id);
                }}
                className={styles.addToWishlist}
              >
                Add to Wishlist
              </div>
              <div
                onClick={() => {
                  handleChatClick(uid, serviceData.seller._id);
                }}
                className={styles.contact}
              >
                Chat
              </div>
            </div>
          </div>
        </div>
      )
    : "please Login";
}

export default Description;
