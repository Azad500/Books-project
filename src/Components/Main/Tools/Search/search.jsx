import React, { useState } from "react";
import styles from "./search.module.scss";

export function Search() {
  const [selectedValue, setSelectedValue] = useState("allOfBooks");

  function handleSelectChange(event) {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    if (newValue === "authorOfBooks" || newValue === "subjectOfBooks") {
      document.querySelector(`.${styles.typesOfBooks}`).style.width = "70px";
    } else if (newValue === "advancedOfBooks") {
      document.querySelector(`.${styles.typesOfBooks}`).style.width = "90px";
    } else {
      document.querySelector(`.${styles.typesOfBooks}`).style.width = "50px";
    }
  }

  return (
    <div className={styles.searchContainer}>
      <i className={`${styles.searchIcon} fa-solid fa-magnifying-glass`}></i>
      <form className={styles.searchInput}>
        <select
          className={styles.typesOfBooks}
          name="types"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="allOfBooks">All</option>
          <option value="titleOfBooks">Title</option>
          <option value="authorOfBooks">Author</option>
          <option value="textOfBooks">Text</option>
          <option value="subjectOfBooks">Subject</option>
          <option value="listsOfBooks">Lists</option>
          <option value="advancedOfBooks">Advanced</option>
        </select>
        <div className={styles.inputAndSearchTags}>
          <input type="text" name="searchInput" placeholder="Search" />
          <i
            className={`${styles.searchIconInInput} fa-solid fa-magnifying-glass`}
          ></i>
        </div>
        <div className={styles.barcodeContainer}>
          <img src="./icons8-barcode-98.png" alt="barcode" />
        </div>
      </form>
    </div>
  );
}
