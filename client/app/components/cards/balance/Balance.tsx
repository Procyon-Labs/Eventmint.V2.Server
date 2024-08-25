"use client";
import React, { useState } from "react";
import styles from "./balance.module.css";
const Balance = () => {
  const [activeButton, setActiveButton] = useState("Day");
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <section className={styles.balanceContainer}>
      <div className="flex items-center gap-20">
        <div>
          <p className={styles.balancetext}>Total Balance</p>
        </div>
        <div className={styles.svgcover}>
          <svg
            xmlns="http://www.w3.or g/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#A7FFA7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center mt-2 ">
        <div className={styles.balanceamt}>
          <p>$25,897</p>
        </div>
        <div className="flex mt-3 items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.0002 15.0001V9.00005M15.0002 9.00005H9.00019M15.0002 9.00005L9.00019 14.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#34D399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={styles.priceIndex}>1.02%</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className={`${styles.button1} ${
            activeButton === "Day" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("Day")}
        >
          Day
        </button>
        <button
          className={`${styles.button2} ${
            activeButton === "Month" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("Month")}
        >
          Month
        </button>
        <button
          className={`${styles.button1} ${
            activeButton === "Year" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("Year")}
        >
          Year
        </button>
      </div>
    </section>
  );
};

export default Balance;
