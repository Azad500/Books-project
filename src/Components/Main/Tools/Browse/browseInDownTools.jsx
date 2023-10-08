import styles from "./browseInDownTools.module.scss";
import { useState } from "react";

export function BrowseInDownTools() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <div
      className={`${styles.browseContainer} ${
        dropdownVisible ? styles.active : ""
      }`}
    >
      <div onClick={toggleDropdown} className={styles.textAndImg}>
        <p>Browse</p>
        <img src="down-filled-triangular-arrow.png" alt="down-arrow" />
      </div>
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
    </div>
  );
}
