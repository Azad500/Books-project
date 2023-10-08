import { useState } from "react";
import styles from "./navbar.module.scss";

export function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  function handleDropdownItemClick() {
    setDropdownVisible(false);
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <i className={`${styles.fa_archway} fa-solid fa-archway`}></i>
          <h5>INTERNET ARCHIVE</h5>
        </div>
        <div className={styles.languageContainer}>
          <button>
            Donate<i className={`${styles.fa_heart} fa-solid fa-heart`}></i>
          </button>
          <div
            className={`${styles.dropdownContainer} ${
              dropdownVisible ? styles.active : ""
            }`}
          >
            <i
              onClick={toggleDropdown}
              className={`${styles.fa_language} fa-solid fa-language`}
            ></i>
            {/* --------------dropdown----------- */}
            <ol className={styles.dropdown}>
              <li onClick={handleDropdownItemClick}>Cestina (cs)</li>
              <li onClick={handleDropdownItemClick}>Deutsch (de)</li>
              <li onClick={handleDropdownItemClick}>English (en)</li>
              <li onClick={handleDropdownItemClick}>Espanol (es)</li>
              <li onClick={handleDropdownItemClick}>Français (fr)</li>
              <li onClick={handleDropdownItemClick}>Hrvatski (hr)</li>
              <li onClick={handleDropdownItemClick}>Italiano (it)</li>
              <li onClick={handleDropdownItemClick}>Portugues (pt)</li>
              <li onClick={handleDropdownItemClick}>Украйнська</li>
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
}
