import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/profile";
import { motion } from "framer-motion";

function ProfileWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      exit={{ x: -2000, transition: { ease: "easeInOut", duration: 0.8 } }}
    >
      <Navbar />
      <Profile />
    </motion.div>
  );
}

export default ProfileWrapper;
