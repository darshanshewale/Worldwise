import { Component } from "react";
import styles from "../Components/Button.module.css";

// button Component help to apply classaccording to type
export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
