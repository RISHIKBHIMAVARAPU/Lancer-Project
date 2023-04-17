import { SettingsBackupRestoreSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./admin.module.css";

export function AdminHome() {
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [isToggled4, setIsToggled4] = useState(false);
  const [users,setusers] = useState([]);
  const [services,setservices] = useState([]);
  const [admin,setadmin] = useState(["Admin"])

  useEffect(() => {
    func()
  },[])

  const clickHandler1 = () => {
    setIsToggled1((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  };

  const clickHandler2 = () => {
    setIsToggled2((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  };

  const clickHandler3 = () => {
    setIsToggled3((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  };

  const clickHandler4 = () => {
    setIsToggled4((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  };

  async function func()
  {
    const userss = await axios.get(`http://localhost:4000/users`)
    const servicess = await axios.get(`http://localhost:4000/services`)
    const admin = await axios.get(`http://localhost:4000/admin`)
    console.log(servicess.data)
    setservices(servicess.data)
    setusers(userss.data)
    setadmin(admin.data[0].username)
  }

  return (
    <>
      <div className={styles.he}>
        <h1>Welcome {admin}</h1>
      </div>

      <div className={styles.clow}>
        <div className="row">
          <div className={"col" + " " + styles.car + " " + styles.s1}>
            <i
              className={"fa fa-users " + styles.t}
              style={{ fontSize: 70 }}
            ></i>
            <div className={styles.ty}>Total Users</div>
            <div className={styles.heading} onClick={clickHandler1}>
              {users.length} Users
            </div>
          </div>
          <div className={"col" + " " + styles.car + " " + styles.s2}>
            <i
              className={"fa fa-newspaper-o " + styles.t}
              style={{ fontSize: 70 }}
            ></i>
            <div className={styles.ty}>Total Services</div>
            <div className={styles.heading} onClick={clickHandler2}>
              {services.length} Services
            </div>
          </div>
          <div className={"col" + " " + styles.car + " " + styles.s3}>
            <i
              className={"fa fa-drivers-license-o " + styles.t}
              style={{ fontSize: 70 }}
            ></i>
            <div className={styles.ty}>Reviews</div>
            <div className={styles.heading}>912 Reviews</div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className={"container-fluid " + styles["container-fluid"]}>
        <div className="row">
          <div className="col-6">
            <div className={styles.usercont}>
              <div className={styles.userhead}>
                <h3>Total Users</h3>

                <div className={styles["menu-icon"]} onClick={clickHandler1}>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                </div>
              </div>
              <div
                className={`${styles.userbody} ${isToggled1 && styles.active} `}
              >
                {
                  users.map((user) => {
                    return (
                      <>
                        <p>{user.fullname}</p>
                        <hr />
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={styles.usercont}>
              <div className={styles.userhead}>
                <h3>Total Services</h3>

                <div className={styles["menu-icon"]} onClick={clickHandler2}>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                </div>
              </div>
              <div
                className={`${styles.userbody} ${isToggled2 && styles.active}`}
              >
                {
                  services.map((service) => {
                    return (
                      <p className={`${styles.textbox}`}>{service.title}</p>
                    )
                  })
                }
                {/* <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"container-fluid " + styles["container-fluid"]}>
        <div className="row">
          <div className="col-6">
            <div className={styles.usercont}>
              <div className={styles.userhead}>
                <h3>User FeedBack</h3>

                <div className={styles["menu-icon"]} onClick={clickHandler3}>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                </div>
              </div>
              <div
                className={`${styles.userbody} ${isToggled3 && styles.active}`}
              >
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={styles.usercont}>
              <div className={styles.userhead}>
                <h3>Services FeedBack</h3>

                <div className={styles["menu-icon"]} onClick={clickHandler4}>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                </div>
              </div>
              <div
                className={`${styles.userbody} ${isToggled4 && styles.active}`}
              >
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
}
