import { BooksWeLove } from "./Books/BooksWeLove/booksWeLove";
import { ClassicBooks } from "./Books/ClassicBooks/classicBooks";
import { TrendingBooks } from "./Books/TrendingBooks/trendingBooks";
import { Informations } from "./Informations/informations";
import { AllTools } from "./Tools/tools";
import styles from "./main.module.scss";

export function Main() {
  return (
    <section className={styles.mainContainer}>
      <AllTools />
      <Informations />
      <TrendingBooks />
      <ClassicBooks />
      <BooksWeLove />
    </section>
  );
}
