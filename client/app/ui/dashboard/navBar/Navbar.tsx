"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styled from "styled-components";

const Navbar = () => {
  const pathname = usePathname();

  const StyledIcon = styled(MdSearch)`
    color: red;
    font-size: 40px;
    margin: 15px;
  `;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 2.66666C17.751 2.66666 19.4848 3.01153 21.1025 3.6816C22.7201 4.35166 24.19 5.33379 25.4281 6.5719C26.6662 7.81002 27.6484 9.27987 28.3184 10.8975C28.9885 12.5152 29.3334 14.249 29.3334 16M16 2.66666V16M16 2.66666C8.63622 2.66666 2.66669 8.63619 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16M16 2.66666C23.3638 2.66666 29.3334 8.6362 29.3334 16M29.3334 16L16 16M29.3334 16C29.3334 18.1041 28.8354 20.1784 27.8801 22.0532C26.9248 23.928 25.5394 25.5501 23.8372 26.7869L16 16"
            stroke="#B8A6FF"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {pathname.split("/").pop()}
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." className={styles.input} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
              stroke="#B8A6FF"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.icons}>
          <div className={styles.notfication}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.4722 28C13.4124 28.8298 14.6474 29.3333 16 29.3333C17.3526 29.3333 18.5876 28.8298 19.5278 28M24 10.6667C24 8.54492 23.1572 6.51009 21.6569 5.0098C20.1566 3.50951 18.1217 2.66666 16 2.66666C13.8783 2.66666 11.8434 3.50951 10.3432 5.0098C8.84286 6.51009 8 8.54492 8 10.6667C8 14.7869 6.96063 17.6079 5.79956 19.4739C4.82017 21.0478 4.33048 21.8348 4.34844 22.0543C4.36832 22.2974 4.41982 22.3901 4.61571 22.5354C4.79262 22.6667 5.59013 22.6667 7.18514 22.6667H24.8149C26.4099 22.6667 27.2074 22.6667 27.3843 22.5354C27.5802 22.3901 27.6317 22.2974 27.6516 22.0543C27.6695 21.8348 27.1798 21.0478 26.2005 19.4739C25.0394 17.6079 24 14.7869 24 10.6667Z"
                stroke="#B8A6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.profile}>
            <div className={styles.picture}></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M8 12L16 20L24 12"
                stroke="#B8A6FF"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
