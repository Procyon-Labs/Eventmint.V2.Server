import React from "react";
import styles from "./customer.module.css";

const Customers = () => {
  return (
    <section className={styles.customebody}>
      <div className={styles.customericon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M29.3333 28V25.3333C29.3333 22.8482 27.6336 20.7601 25.3333 20.168M20.6667 4.38768C22.6212 5.17886 24 7.09508 24 9.33333C24 11.5716 22.6212 13.4878 20.6667 14.279M22.6667 28C22.6667 25.515 22.6667 24.2725 22.2607 23.2924C21.7194 21.9855 20.6811 20.9473 19.3743 20.406C18.3942 20 17.1517 20 14.6667 20H10.6667C8.18163 20 6.93912 20 5.95901 20.406C4.6522 20.9473 3.61393 21.9855 3.07263 23.2924C2.66666 24.2725 2.66666 25.515 2.66666 28M18 9.33333C18 12.2789 15.6122 14.6667 12.6667 14.6667C9.72114 14.6667 7.33332 12.2789 7.33332 9.33333C7.33332 6.38781 9.72114 4 12.6667 4C15.6122 4 18 6.38781 18 9.33333Z"
            stroke="#A7FFA7"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.customeritems}>
        <div>
          <p className={styles.customertext}>Customers</p>
        </div>
        <div>
          <h2 className={styles.customersnumber}>1,295</h2>
        </div>
      </div>
    </section>
  );
};

export default Customers;
