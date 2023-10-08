import { useEffect, useState } from "react";
import styles from "./dialog.module.scss";

export function Dialog({
  createDialogRef,
  titleTrending,
  titleClassic,
  titleBooksWeLove,
}) {
  // ----------dialogRef-------------------
  const [imageOfBook, setImageOfBook] = useState("");
  const [nameOfBook, setNameOfBook] = useState("");
  const [publishedIn, setPublishedIn] = useState("");
  const [series, setSeries] = useState("");
  const [format, setFormat] = useState("");
  const [paginationInBook, setPaginationInBook] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [openLibrary, setOpenLibrary] = useState("");
  const [internetArchive, setInternetArchive] = useState("");
  const [ISBN10, setISBN10] = useState("");
  const [ISBN13, setISBN13] = useState("");
  const [worldCat, setWorldCat] = useState("");
  const [editionNotes, setEditionsNotes] = useState("");
  const [trendingBook, setTrendingBook] = useState("");
  const [classic, setClassic] = useState("");
  const [booksWeLove, setBooksWeLove] = useState("");
  const [recentlyReturned, setRecentlyReturned] = useState("");
  const [romance, setRomance] = useState("");
  const [kids, setKids] = useState("");
  const [thrillers, setThrillers] = useState("");
  const [textbooks, setTextbooks] = useState("");
  const [authorsAlliance, setAuthorsAlliance] = useState("");

  function clearInputValues() {
    setImageOfBook("");
    setNameOfBook("");
    setPublishedIn("");
    setSeries("");
    setFormat("");
    setPaginationInBook("");
    setNumberOfPages("");
    setDimensions("");
    setOpenLibrary("");
    setInternetArchive("");
    setISBN10("");
    setISBN13("");
    setWorldCat("");
    setEditionsNotes("");
  }

  function deleteInformations() {
    clearInputValues();
  }

  useEffect(() => {
    if (titleTrending === "Add New Trending Books") {
      setTrendingBook("trendingBooks");
    } else if (titleClassic === "Add New Classic Books") {
      setClassic("classicBooks");
    } else if (titleBooksWeLove === "Add New Books We Love") {
      setBooksWeLove("booksWeLove");
    }
  }, [titleTrending, titleClassic, titleBooksWeLove]);

  const requestBody = {
    Image: imageOfBook,
    Name: nameOfBook,
    PublishedIn: publishedIn,
    Series: series,
    Format: format,
    Pagination: paginationInBook,
    NumberOfPages: numberOfPages,
    Dimensions: dimensions,
    OpenLibrary: openLibrary,
    InternetArchive: internetArchive,
    ISBN10: ISBN10,
    ISBN13: ISBN13,
    WorldCat: worldCat,
    EditionNotes: editionNotes,
  };

  async function CreateBooks() {
    try {
      if (trendingBook !== "") {
        const updatedTrendingRequestBody = {
          ...requestBody,
          TrendingBooks: trendingBook,
        };
        const response = await fetch("http://localhost:3000/TrendingBooks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTrendingRequestBody),
        });
        if (response.ok) {
          setImageOfBook("");
          setNameOfBook("");
          setPublishedIn("");
          setSeries("");
          setFormat("");
          setPaginationInBook("");
          setNumberOfPages("");
          setDimensions("");
          setOpenLibrary("");
          setInternetArchive("");
          setISBN10("");
          setISBN13("");
          setWorldCat("");
          setEditionsNotes("");
          setTrendingBook("");

          cancelDialog();
          window.location.reload(); //refresh
        } else {
          console.log(error);
        }
      } else if (classic !== "") {
        const updatedClassicRequestBody = {
          ...requestBody,
          ClassicBooks: classic,
        };
        const response = await fetch("http://localhost:3000/ClassicBooks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedClassicRequestBody),
        });
        if (response.ok) {
          setImageOfBook("");
          setNameOfBook("");
          setPublishedIn("");
          setSeries("");
          setFormat("");
          setPaginationInBook("");
          setNumberOfPages("");
          setDimensions("");
          setOpenLibrary("");
          setInternetArchive("");
          setISBN10("");
          setISBN13("");
          setWorldCat("");
          setEditionsNotes("");
          setClassic("");

          cancelDialog();
          window.location.reload(); //refresh
        } else {
          console.log(error);
        }
      } else if (booksWeLove !== "") {
        const updatedBooksWeLoveRequestBody = {
          ...requestBody,
          BooksWeLove: booksWeLove,
        };
        const response = await fetch("http://localhost:3000/BooksWeLove", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBooksWeLoveRequestBody),
        });
        if (response.ok) {
          setImageOfBook("");
          setNameOfBook("");
          setPublishedIn("");
          setSeries("");
          setFormat("");
          setPaginationInBook("");
          setNumberOfPages("");
          setDimensions("");
          setOpenLibrary("");
          setInternetArchive("");
          setISBN10("");
          setISBN13("");
          setWorldCat("");
          setEditionsNotes("");
          setBooksWeLove("");

          cancelDialog();
          window.location.reload(); //refresh
        } else {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function cancelDialog(e) {
    if (e) {
      e.preventDefault();
    }
    if (createDialogRef.current.style.display === "block") {
      createDialogRef.current.style.display = "none";
    }
  }

  const isCreateDisabeledButton =
    !imageOfBook ||
    !nameOfBook ||
    !publishedIn ||
    !series ||
    !format ||
    !paginationInBook ||
    !numberOfPages ||
    !dimensions ||
    !openLibrary ||
    !internetArchive ||
    !ISBN10 ||
    !ISBN13 ||
    !worldCat ||
    !editionNotes;

  return (
    <div ref={createDialogRef} className={styles.dialogContainer}>
      <h2>
        {titleTrending} {titleClassic} {titleBooksWeLove}
      </h2>
      <form className={`${styles.dialogElement} ${styles.hidden}`}>
        <input
          type="text"
          placeholder="Image Of Book"
          value={imageOfBook}
          onChange={(e) => setImageOfBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name of Book"
          value={nameOfBook}
          onChange={(e) => setNameOfBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Published in"
          value={publishedIn}
          onChange={(e) => setPublishedIn(e.target.value)}
        />
        <input
          type="text"
          name="series"
          placeholder="Series"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
        />
        <input
          type="text"
          name="format"
          placeholder="Format"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        />
        <input
          type="text"
          name="pagination"
          placeholder="Pagination"
          value={paginationInBook}
          onChange={(e) => setPaginationInBook(e.target.value)}
        />
        <input
          type="text"
          name="numberOfPages"
          placeholder="Number of Pages"
          value={numberOfPages}
          onChange={(e) => setNumberOfPages(e.target.value)}
        />
        <input
          type="text"
          name="dimensions"
          placeholder="Dimensions"
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
        />
        <input
          type="text"
          name="openLibrary"
          placeholder="Open Library"
          value={openLibrary}
          onChange={(e) => setOpenLibrary(e.target.value)}
        />
        <input
          type="text"
          name="internetArchive"
          placeholder="Internet Archive"
          value={internetArchive}
          onChange={(e) => setInternetArchive(e.target.value)}
        />
        <input
          type="text"
          name="ISBN10"
          placeholder="ISBN10"
          value={ISBN10}
          onChange={(e) => setISBN10(e.target.value)}
        />
        <input
          type="text"
          name="ISBN13"
          placeholder="ISBN13"
          value={ISBN13}
          onChange={(e) => setISBN13(e.target.value)}
        />
        <input
          type="text"
          name="OCLC/WorldCat"
          placeholder="OCLC/WorldCat"
          value={worldCat}
          onChange={(e) => setWorldCat(e.target.value)}
        />
        <textarea
          name="editionNotes"
          placeholder="Edition Notes"
          cols="30"
          rows="10"
          value={editionNotes}
          onChange={(e) => setEditionsNotes(e.target.value)}
        ></textarea>
      </form>
      <div className={styles.buttonsElement}>
        <button className={styles.cancelButton} onClick={cancelDialog}>
          Cancel
        </button>
        <button className={styles.deleteButton} onClick={deleteInformations}>
          Delete
        </button>
        <button
          className={styles.createButton}
          onClick={CreateBooks}
          disabled={isCreateDisabeledButton}
        >
          Create
        </button>
      </div>
    </div>
  );
}
