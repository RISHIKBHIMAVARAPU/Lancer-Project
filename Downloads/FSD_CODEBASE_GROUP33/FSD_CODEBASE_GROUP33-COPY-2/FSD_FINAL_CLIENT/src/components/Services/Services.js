import styles from "./Services.module.css";
import pic0 from "./s0.png";
import pic1 from "./s1.png";
import pic2 from "./s2.png";
import pic3 from "./s3.png";
import pic4 from "./s4.png";
import pic5 from "./s5.png";
import profpic1 from "./p1.png";
import { motion } from "framer-motion";

import { Link, useHistory, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { setRef } from "@mui/material";

function Services({ data }) {
  const mod = 6;
  const arr = [pic0, pic1, pic2, pic3, pic4, pic5];
  let itr = -1;
  const history = useHistory();
  const userId = useParams().uid;

  async function handleAddToWishlist(sid) {
    let data = {
      uid: userId,
      sid: sid,
    };
    console.log(data);
    // * json server add to wishlist
    await axios
      .post("http://localhost:5000/wishlist/add", data)
      .then((res) => {
        // console.log(res.data);
        history.push("/wishlist/" + userId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.serviceBox}>
      <motion.div
        className={styles.serviceDiv}
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.0 }}
      >
        {data.map((data) => (
          <motion.div
            className={styles.card}
            whileHover={{
              scale: 0.9,
            }}
          >
            <img
              src={
                data?.productImages.length > 0
                  ? data?.productImages[0]
                  : arr[++itr % mod]
              }
              alt="John"
              className={styles.image}
            />

            <h3 className={styles.title}>{data.title}</h3>
            {/* <p className={styles.title}>CEO & Founder, Example</p> */}
            <p className={styles.price}>₹{data.price}</p>
            <div className={styles.userData}>
              <Link to={`/profile/${userId}/${data.seller._id}`}>
                <img className={styles.userImg} src={profpic1} alt="" />
              </Link>
              <p className={styles.userName}>{data.seller.fullname}</p>
            </div>

            <p>
              <button
                className={styles.goToServiceButton}
                onClick={() => {
                  history.push(`/service/${userId}/${data._id}`);
                }}
              >
                <Link
                  to={`/service/${userId}/${data._id}`}
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  {" "}
                  <i class="fa fa-search" aria-hidden="true"></i>{" "}
                </Link>
              </button>
              <button
                className={styles.wishlistButton}
                onClick={() => {
                  handleAddToWishlist(data._id);
                }}
              >
                <i class="fa fa-heart" aria-hidden="true"></i>
              </button>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
