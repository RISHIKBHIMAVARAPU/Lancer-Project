import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import SlideShow from "./components/SlideShow/SlideShow";
import { motion } from "framer-motion";
function HomeWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      exit={{ x: -2000, transition: { ease: "easeInOut", duration: 0.8 } }}
    >
      <Navbar />
      <SlideShow />
      <Search />
    </motion.div>
  );
}

export default HomeWrapper;
