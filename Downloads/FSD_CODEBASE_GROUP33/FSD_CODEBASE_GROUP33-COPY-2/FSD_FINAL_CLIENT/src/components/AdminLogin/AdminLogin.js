import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar1 from "../Landinpage/Navbar";
import { useDispatch } from "react-redux";
import "./ad.css";

const AdminLogin = () => {
  const history = useHistory();
  const [usnam, setusnam] = useState("");
  const [eml, seteml] = useState("");
  const dispatch = useDispatch();
  const [data, setdata] = useState("admin");
  const addaduser = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/admin/signin", {
        usnam: usnam,
        eml: eml,
      })
      .then((res) => {
        console.log(res);
        history.push("/admin/" + res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar1 />
      <div className="bargav">
        <div id="login-form-wrap">
          <h2 className="h2ead">Login</h2>
          <form id="login-form" onSubmit={addaduser}>
            <p className="parad">
              <input
                className="inptag"
                type="email"
                id="username"
                name="username"
                value={usnam}
                onChange={(e) => {
                  setusnam(e.target.value);
                }}
                placeholder="Email"
                required
              />
              {/* <i className="validation"><span></span><span></span></i> */}
            </p>
            <p className="parad">
              <input
                className="inptag"
                type="password"
                id="email"
                name="email"
                value={eml}
                onChange={(e) => {
                  seteml(e.target.value);
                }}
                placeholder="Password"
                required
              />
              {/* <i className="validation"><span></span><span></span></i> */}
            </p>
            <p className="parad">
              <input
                className="inptag"
                type="submit"
                id="login"
                value="Login"
              />
            </p>
          </form>
          <div id="create-account-wrap">
            <p className="parad"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
