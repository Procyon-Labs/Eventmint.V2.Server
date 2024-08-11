"use client";
import React, { useState } from "react";
import styles from "./chart.module.css";
import ApexChart from "./ApexChart";

const Chart = () => {
  const [activeButton, setActiveButton] = useState("Day");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <section className={styles.bodychart}>
      <div className="px-4 py-4">
        <div className={styles.charthead}>
          <div>
            <p className={styles.overviewtext}>Overview</p>
          </div>
          <div className="flex">
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
      </div>
      <div>
        <ApexChart />
      </div>
    </section>
  );
};

export default Chart;
