// components/input/Input.tsx
import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./input.module.css";

interface InputProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.FormEvent | React.KeyboardEvent) => void;
}

const Input: React.FC<InputProps> = ({ message, setMessage, sendMessage }) => (
  <form className={styles.form} onSubmit={sendMessage}>
    <input
      type="text"
      className={styles.input}
      value={message}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setMessage(event.target.value)
      }
      onKeyPress={(event: KeyboardEvent) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button type="button" className={styles.sendButton} onClick={sendMessage}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-send"
        viewBox="0 0 24 24"
      >
        <path d="M22 2L11 13"></path>
        <path d="M22 2L15 22 11 13 2 9z"></path>
      </svg>
    </button>
  </form>
);

export default Input;
