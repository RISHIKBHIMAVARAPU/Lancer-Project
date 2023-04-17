import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LoginStatus = {
  isLogin: true,
};
const loginContext = createContext();
root.render(
  <loginContext.Provider value={LoginStatus}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </loginContext.Provider>
);
export default loginContext;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
