import Description from "./components/Description/Description";
import Navbar from "./components/Navbar/Navbar";
import { motion } from "framer-motion";

function DescriptionWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Navbar />
      <Description />
    </motion.div>
  );
}

export default DescriptionWrapper;
