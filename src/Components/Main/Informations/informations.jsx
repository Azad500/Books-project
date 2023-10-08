import { useState, useEffect } from "react";
import styles from "./informations.module.scss";

export function Informations() {
  // -----------pagination-----------
  const [informationsCards, setInformationsCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const responseBody = await response.json();
        setInformationsCards(responseBody);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 660) {
        setCardsPerPage(1);
      } else if (windowWidth < 960) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = informationsCards.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.informationsContainer}>
      <div className={styles.textInInformations}>
        <h4>Welcome to Open Library</h4>
      </div>
      <div className={styles.imagesInInformations}>
        <button
          className={`${styles.left_arrow} ${styles.arrow} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentCards.map((card) => (
            <div key={card.id} className={styles.imagesAndTexts}>
              <img src={card.img} alt={card.firstText} />
              <div className={styles.texts}>
                <h5>{card.firstText}</h5>
                <h5>{card.secondText}</h5>
                <p>{card.about}</p>
              </div>
            </div>
          ))
        )}
        <button
          className={`${styles.right_arrow} ${styles.arrow} ${
            indexOfLastCard >= informationsCards.length ? styles.disabled : ""
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastCard >= informationsCards.length}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
