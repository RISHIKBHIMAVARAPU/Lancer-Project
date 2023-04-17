import Navbar from "./components/Navbar/Navbar";
import Space from "./components/Space/Space";
import Wishlist from "./components/Wishlist/Wishlist";
import { motion } from "framer-motion";

function WishlistWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      exit={{ x: -2000, transition: { ease: "easeInOut", duration: 0.8 } }}
    >
      <Navbar />
      <Space />
      <Wishlist />
    </motion.div>
  );
}

export default WishlistWrapper;
