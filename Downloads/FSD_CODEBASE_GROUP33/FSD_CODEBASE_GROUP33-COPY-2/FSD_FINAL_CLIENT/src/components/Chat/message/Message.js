// import "./message.css";
// import { format } from "timeago.js";
import styles from "./message.module.css";

export default function Message({ message, own, time }) {
  return (
    <div
      className={own ? `${styles.message} ${styles.own}` : `${styles.message}`}
    >
      <div className={`${styles.messageTop}`}>
        <p className={`${styles.messageText}`}>{message}</p>
      </div>
      <div className={`${styles.messageBottom}`}>{time}</div>
    </div>
  );
}
