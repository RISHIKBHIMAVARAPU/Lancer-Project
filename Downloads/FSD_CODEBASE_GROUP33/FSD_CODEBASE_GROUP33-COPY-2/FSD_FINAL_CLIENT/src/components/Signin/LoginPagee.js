import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import style2 from "./LoginPagee.module.css";
import profile from "../Profile/profileIcon.png";
import email from "./email.jpg";
import pass from "./pass.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import loginContext from "../../index";

function LoginPagee() {
  const loginStatusObj = useContext(loginContext);
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [data, setdata] = useState("user");
  const cookies = new Cookies();

  const submitHandler = async (e) => {
    e.preventDefault();
    // axios
    //   .get("http://localhost:5000/user/temp", {
    //     headers: { authorization: cookies.get("jwtToken") },
    //   })
    //   .then((result) => {
    //     console.log(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .post("http://localhost:5000/user/chandra/signin", {
        userEmail: userEmail,
        userPassword: userPassword,
      })
      .then((res) => {
        let responseData = res.data;
        console.log(responseData);
        if (responseData.errors.length > 0) {
          alert(responseData.errors[0]);
        } else {
          // console.log(cookies);
          let jwtToken = responseData.jwtToken;
          let d = new Date();
          d.setTime(d.getTime() + 180 * 60 * 1000);
          cookies.set("jwtToken", jwtToken, { expires: d });
          let userData = responseData.result;
          console.log(userData);
          // loginStatusObj.isLogin = true;
          history.push("/home/" + userData[0]._id);
        }
      })
      .catch((err) => {
        console.log("catch");
        console.log(err);
      });
  };

  return (
    <div className={style2.main}>
      <div className={style2.sub_main}>
        <div>
          <div className={style2.imgs}>
            <div className={style2.container_image}>
              <img src={profile} alt="profile" className={style2.profile} />
            </div>
          </div>
          <div>
            <br></br>
            <h1>User Login</h1>
            <br></br>

            <form onSubmit={submitHandler}>
              <div>
                <img src={email} alt="email" className={style2.email} />
                <input
                  type="text"
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  placeholder="email"
                  className={`${style2.name} ${style2.inputstyle}`}
                />
              </div>

              <div className={style2.second_input}>
                <img src={pass} alt="pass" className={style2.email} />

                <input
                  type="password"
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                  placeholder="password"
                  className={`${style2.name} ${style2.inputstyle}`}
                />
              </div>

              <div className={style2.login_button}>
                <button type="submit" className={style2.buttonstyle}>
                  Login
                </button>
              </div>

              <p className={style2.link}>
                {/* <a href="">Forgot password ?</a> Or */}
                Don't have an account?  
                {/* <br></br> */}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                 Signup
                </Link>
              </p>
            </form>

            {/* <h2>{JSON.stringify(userPassword)}</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPagee;
