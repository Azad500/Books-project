import React, { useState, useEffect } from "react";
import styles from "./trendingBooks.module.scss";
import { Pagination } from "../Pagination/pagination";
import { CreateButtonDialog } from "../Create/create";

export function TrendingBooks() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allBooks, setAllBooks] = useState(0);
  const titleTrending = "Add New Trending Books";
  const [booksPerPage, setBooksPerPage] = useState(6);

  useEffect(() => {
    GetBooksFetch();
  }, [currentPage]);

  async function GetBooksFetch() {
    try {
      const response = await fetch(
        `http://localhost:3000/TrendingBooks?_page=${currentPage}&_limit=${booksPerPage}`
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
      <div className={styles.trendingBooks}>
        <u>Trending Books</u>
        {/* ---------------create------------- */}
        <CreateButtonDialog titleTrending={titleTrending} />
      </div>
      <div className={styles.onlyBooksElement}>
        {books.map((book) =>
          book.TrendingBooks !== "" ? (
            <div key={book.id} className={styles.booksCards}>
              <img src={book.Image} alt={book.TrendingBooks} />
              <button className={styles.blueButton}>Preview Only</button>
            </div>
          ) : null
        )}
      </div>
      {/* ---------------pagination----------- */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setBooksPerPage={setBooksPerPage}
        allBooks={allBooks}
        booksPerPage={booksPerPage}
      />
    </div>
  );
}
