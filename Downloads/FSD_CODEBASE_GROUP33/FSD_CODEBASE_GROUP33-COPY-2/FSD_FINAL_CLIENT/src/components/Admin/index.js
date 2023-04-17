// import Navbar from "../Navbar/Navbar";
// import Footer from "../royal code/PostPage/footer/footer";
import { AdminHome } from "./admin";
import styles from "./index.module.css";

export function Admin() {
  return (
    <div className={styles.bd}>
      {/* <Navbar /> */}
      {/* Place Navbar component here*/}
      <AdminHome />
      {/* <Footer /> */}
    </div>
  );
}
