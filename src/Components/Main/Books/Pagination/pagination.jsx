import React from "react";
import styles from "./pagination.module.scss";

export function Pagination(props) {
  const { currentPage, allBooks, setCurrentPage, booksPerPage } = props;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(allBooks / booksPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.arrowsContainer}>
      <button
        className={`${styles.leftArrow} ${styles.arrow} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button
        className={`${styles.rightArrow} ${styles.arrow} ${
          currentPage >= Math.ceil(allBooks / 6) ? styles.disabled : ""
        }`}
        onClick={goToNextPage}
        disabled={currentPage >= Math.ceil(allBooks / 6)}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
