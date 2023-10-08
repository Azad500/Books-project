import { Browse } from "./Browse/browse";
import { BrowseInDownTools } from "./Browse/browseInDownTools";
import { Hamburgers } from "./Hamburgers/hamburgers";
import { LogIn } from "./LogIn/logIn";
import { MyBooks } from "./MyBooks/myBooks";
import { MyBooksInDownTools } from "./MyBooks/myBooksInDownTools";
import { Search } from "./Search/search";
import { SignUp } from "./SignUp/signUp";
import styles from "./tools.module.scss";

export function AllTools() {
  return (
    <div className={styles.toolsContainer}>
      <div className={styles.upTools}>
        <div className={styles.openLibrary}>
          <img src="./open_856090.png" alt="openIcon" />
          <p>LIBRARY</p>
        </div>
        <MyBooks />
        <Browse />
        <Search />
        <LogIn />
        <SignUp />
        <Hamburgers />
      </div>
      <div className={styles.downTools}>
        <MyBooksInDownTools />
        <BrowseInDownTools />
      </div>
    </div>
  );
}
