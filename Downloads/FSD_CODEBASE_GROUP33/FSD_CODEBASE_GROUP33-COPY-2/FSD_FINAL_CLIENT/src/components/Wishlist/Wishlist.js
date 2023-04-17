// import styles from "../Services/Services.module.css";
import styles from "./Wishlist.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import profpic1 from "./p1.png";
import pic0 from "./s0.png";
import pic1 from "./s1.png";
import pic2 from "./s2.png";
import pic3 from "./s3.png";
import pic4 from "./s4.png";
import pic5 from "./s5.png";
import loginContext from "../../index";
import Cookies from "universal-cookie";

function Wishlist() {
  const loginStatusObj = useContext(loginContext);
  const cookies = new Cookies();

  const mod = 6;
  const arr = [pic0, pic1, pic2, pic3, pic4, pic5];
  let itr = -1;
  const [data, setData] = useState([]);
  const [price,setPrice]=useState(0);
  const history = useHistory();
  const [render, setRender] = useState(true);
  const params = useParams();
  const uid = params.uid;
  // console.log("in ");
  function handleDeleteFromWishlist(sid) {
    let data = { sid, uid };
    axios
      .post("http://localhost:5000/wishlist/delete", data)
      .then((result) => {
        setRender(!render);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .delete("http://localhost:4000/wishlist/" + id)
    //   .then((res) => {
    //     setRender(!render);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  useEffect(() => {
    const id = 1;
    axios
      .get("http://localhost:5000/wishlist/" + uid)
      .then((result) => {
         console.log(result);
        setData((prev) => result.data.wishlist);


      //  setPrice(result.data.totalAttributeSum);
          
      const sum = result.data.wishlist.reduce(
        (total, item) => total + item.price,
        0
      );
      setPrice(sum);
      

      })
      .catch((err) => {
        console.log(err);
      });
         


  }, [render]);



  const handleOpenRazorpay =(data) =>{

    const options ={
       key : 'rzp_test_BnefbrdGHpkF0K',
       amount : Number(data.amount) *100,
       currency : data.currency ,
       name : 'Lancer',
       order_id : data.id,

       handler :function (response){
        console.log(response)
        axios.post('http://localhost:5000/verify',{response : response})
        .then(res =>{
          console.log(res)
          alert('payment successful')
        })
        .catch(err=>{
          alert('payment  failed')
          console.log(err)
        })
       }

    }

    const rzp = new window.Razorpay(options);

    rzp.open()
  }

  const handlePayment =(amount)=>{
    
    const _data= {amount :amount}
    axios.post("http://localhost:5000/orders"  , _data)
    .then(res =>{
      console.log(res.data)
      handleOpenRazorpay(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })

    }
  

  return loginStatusObj.isLogin ? (
    <div className={styles.wishlistWrapper}>
      {/* <h2>WishList</h2> */}
      <div className={styles.serviceDiv}>
        {data &&
          data.map((data) => (
            
            
            
            <div className={styles.card}>
              
              <img
                src={
                  data.productImages.length > 0
                    ? data.productImages[0]
                    : arr[++itr % mod]
                }
                alt="John"
                className={styles.image}
              />
              <h3 className={styles.title}>{data.title}</h3>
              {/* <p className={styles.title}>CEO & Founder, Example</p> */}
              <p className={styles.price}>₹{data.price}</p>
              <div className={styles.userData}>
                <Link to={`profile/${data.seller._id}`}>
                  <img className={styles.userImg} src={profpic1} alt="" />
                </Link>
                <p className={styles.userName}>{data.seller.fullname}</p>
              </div>
              <p>
                <button className={styles.goToServiceButton}>
                  <Link
                    to={`/service/${uid}/${data._id}`}
                    style={{
                      textDecoration: "none",
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    {" "}
                    <i class="fa fa-search" aria-hidden="true"></i>{" "}
                  </Link>
                </button>
                <button
                  className={styles.wishlistButton}
                  onClick={() => {
                    handleDeleteFromWishlist(data._id);
                  }}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </p>
            </div>
          ))
          
          // <div>
          // 
         
          }


      </div>
      
      {data.length!==0 && <button className={styles.buttonstyle} onClick={()=>handlePayment(price)}> Paynow Rs.{price} </button> }
    </div>
  ) : (
    "please Login"
  );
}

export default Wishlist;
