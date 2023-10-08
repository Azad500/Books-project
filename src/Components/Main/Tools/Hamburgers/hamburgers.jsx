import { useState } from "react";
import styles from "./hamburgers.module.scss";

export function Hamburgers() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  function closeDropdown() {
    setDropdownVisible(false);
  }

  return (
    <div
      className={`${styles.hamburgersContainer} ${
        dropdownVisible ? styles.active : ""
      }`}
    >
      <i
        onClick={toggleDropdown}
        className={`${styles.hamburgersIcon} fa-solid fa-bars`}
      ></i>
      {/* --------------dropdown----------- */}
      <div className={styles.dropdown}>
        <img
          className={styles.arrowImg}
          src="right-arrow.png"
          alt="right-arrow"
          onClick={closeDropdown}
        />
        <h3>My Open Library</h3>
        <div className={styles.buttonsContainer}>
          <button className={styles.logInButton}>Log In</button>
          <button className={styles.signInButton}>Sign Up</button>
        </div>
        <h3>Browse</h3>
        <div className={styles.informationsContainer}>
          <a href="">Subjects</a>
          <a href="">Trending</a>
          <a href="">Library Explorer</a>
          <a href="">Lists</a>
          <a href="">Collections</a>
          <a href="">K-12 Student Library</a>
          <a href="">Book Talks</a>
          <a href="">Random Book</a>
          <a href="">Advanced Search</a>
        </div>
        <h3>Contribute</h3>
        <div className={styles.informationsContainer}>
          <a href="">Add a Book</a>
          <a href="">Recent Community Edits</a>
        </div>
        <h3>Resources</h3>
        <div className={styles.informationsContainer}>
          <a href="">Help & Support</a>
          <a href="">Developer Center</a>
          <a className={styles.librariansPortal} href="">
            Librarians Portal
          </a>
        </div>
      </div>
    </div>
  );
}
