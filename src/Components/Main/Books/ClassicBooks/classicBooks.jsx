import { CreateButtonDialog } from "../Create/create";
import { Pagination } from "../Pagination/pagination";
import styles from "./classicBooks.module.scss";
import React, { useState, useEffect } from "react";

export function ClassicBooks() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allBooks, setAllBooks] = useState(0);
  const titleClassic = "Add New Classic Books";
  const booksPerPage = 6;

  useEffect(() => {
    GetBooksFetch();
  }, [currentPage]);

  async function GetBooksFetch() {
    try {
      const response = await fetch(
        `http://localhost:3000/ClassicBooks?_page=${currentPage}&_limit=${booksPerPage}`
      );

      const responseBody = await response.json();
      setBooks(responseBody);
      setAllBooks(response.headers.get("X-Total-Count"));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={styles.classicBooksContainer}>
      <div className={styles.textElement}>
        <u>Classic Books</u>
        <CreateButtonDialog titleClassic={titleClassic} />
      </div>
      <div className={styles.onlyBooksElement}>
        {books.map((book) =>
          book.ClassicBooks !== "" ? (
            <div key={book.id} className={styles.booksCards}>
              <img src={book.Image} alt={book.ClassicBooks} />
              <button className={styles.blueButton}>Read</button>
            </div>
          ) : null
        )}
      </div>
      <div className={styles.paginationElement}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          allBooks={allBooks}
          booksPerPage={booksPerPage}
        />
      </div>
    </div>
  );
}
