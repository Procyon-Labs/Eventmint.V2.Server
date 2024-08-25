import React from "react";
import styles from "./revenue.module.css";

const Revenue = () => {
  return (
    <section className={styles.customebody}>
      <div className={styles.customericon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M16 23.1667C16 26.8486 18.9848 29.8333 22.6667 29.8333C26.3486 29.8333 29.3334 26.8486 29.3334 23.1667C29.3334 19.4848 26.3486 16.5 22.6667 16.5C18.9848 16.5 16 19.4848 16 23.1667ZM16 23.1667C16 21.6656 16.4961 20.2803 17.3334 19.166V7.16667M16 23.1667C16 24.2671 16.2667 25.3053 16.7389 26.2202C15.6156 27.169 13.0211 27.8333 10 27.8333C5.94993 27.8333 2.66669 26.6394 2.66669 25.1667V7.16667M17.3334 7.16667C17.3334 8.63943 14.0501 9.83333 10 9.83333C5.94993 9.83333 2.66669 8.63943 2.66669 7.16667M17.3334 7.16667C17.3334 5.69391 14.0501 4.5 10 4.5C5.94993 4.5 2.66669 5.69391 2.66669 7.16667M2.66669 19.1667C2.66669 20.6394 5.94993 21.8333 10 21.8333C12.9187 21.8333 15.4391 21.2133 16.6195 20.3157M17.3334 13.1667C17.3334 14.6394 14.0501 15.8333 10 15.8333C5.94993 15.8333 2.66669 14.6394 2.66669 13.1667"
            stroke="#A7FFA7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.customeritems}>
        <div>
          <p className={styles.customertext}>Revenue</p>
        </div>
        <div>
          <h2 className={styles.customersnumber}>$5,295</h2>
        </div>
      </div>
    </section>
  );
};

export default Revenue;
