import { CreateButtonDialog } from "../Create/create";
import { Pagination } from "../Pagination/pagination";
import styles from "./booksWeLove.module.scss";
import React, { useState, useEffect } from "react";

export function BooksWeLove() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allBooks, setAllBooks] = useState(0);
  const titleBooksWeLove = "Add New Books We Love";
  const booksPerPage = 6;

  useEffect(() => {
    GetBooksFetch();
  }, [currentPage]);

  async function GetBooksFetch() {
    try {
      const response = await fetch(
        `http://localhost:3000/BooksWeLove?_page=${currentPage}&_limit=${booksPerPage}`
      );

      const responseBody = await response.json();
      setBooks(responseBody);
      setAllBooks(response.headers.get("X-Total-Count"));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={styles.allBooksContainer}>
      <div className={styles.booksWeLoveElement}>
        <u>Books We Love</u>
        {/* ---------------create------------- */}
        <CreateButtonDialog titleBooksWeLove={titleBooksWeLove} />
      </div>
      <div className={styles.onlyBooksElement}>
        {books.map((book) =>
          book.BooksWeLove !== "" ? (
            <div key={book.id} className={styles.booksCards}>
              <img src={book.Image} alt={book.BooksWeLove} />
              <button className={styles.blueButton}>Borrow</button>
            </div>
          ) : null
        )}
      </div>
      {/* ---------------pagination----------- */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        allBooks={allBooks}
        booksPerPage={booksPerPage}
      />
    </div>
  );
}
