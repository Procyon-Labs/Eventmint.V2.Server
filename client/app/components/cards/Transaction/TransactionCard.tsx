"use client";
import React, { useState } from "react";
import styles from "./transaction.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const TransactionCard = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState("Day");

  // Handler to set the active button
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <main className={styles.transactionbody}>
      <section className="py-4 px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className={styles.transactionhistory}>Transaction History</p>
          </div>
          <div className="flex ">
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
        </div>
      </section>

      <section className="flex py-4 px-4 items-center justify-between border-b border-[#323A46]">
        <div className="flex gap-2">
          <div className={styles.svgbody}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M18 6H10M18 6V14"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className={styles.transactionhistory}>Ticket Creation Fee</p>
            <p className={styles.completedstatus}>Completed</p>
          </div>
        </div>

        <div className="flex flex-col ml-10">
          <p className={styles.transactionsol}>$10.637</p>
          <p className={styles.priceinssol}> ≈0.0010 SOL</p>
        </div>
      </section>
      <section className="flex py-4 px-4 items-center justify-between border-b border-[#323A46]">
        <div className="flex gap-2">
          <div className={styles.svgbody2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 18H14M6 18V10"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className={styles.transactionhistory}>Fundraising Program</p>
            <p className={styles.pendingstatus}>Pending</p>
          </div>
        </div>

        <div className="flex flex-col ml-10">
          <p className={styles.transactionsol}>$210.077</p>
          <p className={styles.priceinssol}>≈0.0250 SOL</p>
        </div>
      </section>
      <section className="flex py-4 px-4 items-center justify-between border-b border-[#323A46]">
        <div className="flex gap-2">
          <div className={styles.svgbody2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 18H14M6 18V10"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className={styles.transactionhistory}>Solana Masterclass</p>
            <p className={styles.completedstatus}>Completed</p>
          </div>
        </div>

        <div className="flex flex-col ml-10">
          <p className={styles.transactionsol}>$123.481</p>
          <p className={styles.priceinssol}>≈0.0300 SOL</p>
        </div>
      </section>
      <section className="flex py-4 px-4 items-center justify-between ">
        <div className="flex gap-2">
          <div className={styles.svgbody}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M18 6H10M18 6V14"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className={styles.transactionhistory}>Network Charges</p>
            <p className={styles.completedstatus}>Completed</p>
          </div>
        </div>

        <div className="flex flex-col ml-10">
          <p className={styles.transactionsol}>$06.078</p>
          <p className={styles.priceinssol}>≈0.0004 SOL</p>
        </div>
      </section>
      <div className="flex items-center justify-center mb-2">
        <button className="flex items-center ">
          <p className={styles.viewalltransaction}>View all transactions</p>
          <ChevronRightOutlinedIcon className="text-[#b8a6ff]" />
        </button>
      </div>
    </main>
  );
};

export default TransactionCard;
