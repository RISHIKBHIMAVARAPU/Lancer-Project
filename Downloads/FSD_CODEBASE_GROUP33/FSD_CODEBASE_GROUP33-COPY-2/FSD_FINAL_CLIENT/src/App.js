import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Search from "./components/Search/Search";
import Description from "./components/Description/Description";
import Space from "./components/Space/Space";
import { useState, useContext } from "react";
import { fontSize } from "@mui/system";
import { AdminHome } from "./components/Admin/admin";
import Postform from "./components/PostPage/Postform/Postform";
import axios from "axios";
import Wishlist from "./components/Wishlist/Wishlist";
import LoginPage from "./components/Signin/LoginPage";
import SignUp from "./components/Signup/SignUp";
import Navbar1 from "./components/Landinpage/Navbar";
import Hero from "./components/Landinpage/Hero";
import Analytics from "./components/Landinpage/Analytics";
import Newsletter from "./components/Landinpage/Newsletter";
import Cards from "./components/Landinpage/Cards";
import Footer from "./components/Landinpage/Footer";
import { Admin } from "./components/Admin";
import Forms from "./components/Landinpage/Forms";
import ProfilePage from "./components/Profile";
import SlideShow from "./components/SlideShow/SlideShow";
import Messenger from "./components/Chat/messenger/Messenger";
import Home from "./components/Myadmin/Home/Home";
import loginContext from "./index";
import Otp from "./components/Signup/otp";
// import OldLanding from "./components/Landinpage/OldLanding";
import { motion } from "framer-motion";
import HomeWrapper from "./HomeWrapper";
import ChatWrapper from "./ChatWrapper";
import { AnimatePresence } from "framer-motion";
import WishlistWrapper from "./WishlistWrapper";
import DescriptionWrapper from "./DescriptionWrapper";
import ProfileWrapper from "./ProfileWrapper";
import Forgot from "./components/Signin/forgot";
import MiddlePage from "./components/Signin/logmidforgot";
import Onetime from "./components/Signup/onetime";
import FOneTime from "./components/Signin/fotp";
import LoginPagee from "./components/Signin/LoginPagee";
import SignUpe from "./components/Signup/SignUpe";
import ResetPass from "./components/Signin/resetpassword";

function App() {
  const location = useLocation();
  const [color, setColor] = useState(true);
  const [elem, setElem] = useState(document.body);
  const loginStatus = useContext(loginContext);
  const [image, setImage] = useState("");
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          {/* Routes that do not require authorization */}
          <Route exact path="/">
            <Navbar1 />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
            {/* <OldLanding /> */}
          </Route>

          <Route exact path="/fonetime">
            <FOneTime />
          </Route>
          <Route exact path="/onetime">
            <Onetime />
          </Route>
          <Route exact path="/logmidforgot">
            <MiddlePage />
          </Route>
          <Route exact path="/forgot">
            <Forgot />
          </Route>
          <Route exact path="/resetpassword">
            <ResetPass />
          </Route>

          <Route exact path="/signin">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/Forms">
            <Forms />
          </Route>

          <Route exact path="/logine">
              <LoginPagee />
          </Route>
          <Route exact path="/signupe">
              <SignUpe />
          </Route>
          
          {/* Routes that require authorization */}
          <Route exact path="/profile/:uid/:profilerId">
            <div className="HomeWrapper">
              {/* <Navbar />
              <ProfilePage /> */}
              <ProfileWrapper />
            </div>
          </Route>
          <Route exact path="/post/:uid">
            <div className="HomeWrapper">
                <Navbar />
                <Postform />
            </div>
          </Route>
          <Route exact path="/navbar/:uid">
            {/* <Postform /> */}
            <Navbar />
          </Route>
          <Route exact path="/wishlist/:uid">
            <div className="HomeWrapper">
              <WishlistWrapper />
            </div>
          </Route>
          <Route exact path="/home/:uid">
            <div className="HomeWrapper">
              <HomeWrapper />
            </div>
          </Route>
          <Route exact path="/service/:uid/:pid">
            <div className="DescWrapper">
              {/* <Navbar />
              <Description /> */}
              <DescriptionWrapper />
            </div>
          </Route>
          <Route exact path="/chat/:uid/">
            <div className="HomeWrapper">
              {/* <Navbar />
              <Messenger /> */}
              <ChatWrapper />
            </div>
          </Route>
          {/* <Route exact path="/filters"></Route> */}
          <Route path="/:any"></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
