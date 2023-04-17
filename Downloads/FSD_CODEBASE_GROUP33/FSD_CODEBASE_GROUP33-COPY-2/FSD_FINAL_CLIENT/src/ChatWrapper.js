import Messenger from "./components/Chat/messenger/Messenger";
import Navbar from "./components/Navbar/Navbar";
import { motion } from "framer-motion";

function ChatWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      exit={{ x: -2000, transition: { ease: "easeInOut", duration: 0.8 } }}
    >
      <Navbar />
      <Messenger />
    </motion.div>
  );
}

export default ChatWrapper;
