import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.btl}>
        <section className={styles.footer}>
        <div className={styles.social}>
            <a href="#"><i className='fa fa-instagram'></i></a>
            <a href="#"><i className='fa fa-twitter'></i></a>
            <a href="#"><i className='fa fa-facebook'></i></a>
        </div>

        <ul className={styles.list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className={styles.copyright}>Lancer @ 2022</p>
        </section>
    </div>
  )
}

export default Footer;