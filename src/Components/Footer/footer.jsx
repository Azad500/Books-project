import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.upSideInFooter}>
        <div className={styles.openLibrary}>
          <h5>Open Library</h5>
          <a href="">Vision</a>
          <a href="">Volunteer</a>
          <a href="">Partner With Us</a>
          <a href="">Careers</a>
          <a href="">Blog</a>
          <a href="">Terms of Service</a>
          <a href="">Donate</a>
        </div>
        <div className={styles.discover}>
          <h5>Discover</h5>
          <a href="">Home</a>
          <a href="">Books</a>
          <a href="">Authors</a>
          <a href="">Subjects</a>
          <a href="">Collections</a>
          <a href="">Advanced Search</a>
          <a href="">Return to Top</a>
        </div>
        <div className={styles.Develop}>
          <h5>Developer</h5>
          <a href="">Developer Center</a>
          <a href="">API Documentation</a>
          <a href="">Bulk Data Dumps</a>
          <a href="">Writing Bots</a>
          <a href="">Add a Book</a>
        </div>
        <div className={styles.help}>
          <h5>Help</h5>
          <a href="">Help Center</a>
          <a href="">Report a Problem</a>
          <a href="">Suggesting Edits</a>
          <div className={styles.twoIcons}>
            <i className={"fa - brands fa - square - twitter"}></i>
            <i className={"fa-brands fa-square-github"}></i>
          </div>
        </div>
        <div className={styles.language}>
          <h5>Change Website Language</h5>
          <a href="">Cestina (cs)</a>
          <a href="">Deutsch (de)</a>
          <a href="">Engash (en)</a>
          <a href="">Espanol (es)</a>
          <a href="">Français (fr)</a>
          <a href="">Hrvatski (hr)</a>
          <a href="">Itaaano (it)</a>
          <a href="">Portugues (pt)</a>
          <a href="">Украйнська</a>
        </div>
      </div>
      <div className={styles.downSideInFooter}>
        <div className={styles.iconAndTextContainer}>
          <i className={`${styles.fa_archway} fa-solid fa-archway`}></i>
          <p className={styles.textElement}>
            Open Library is an initiative of the{" "}
            <a href="">Internet Archive,</a> a 501(c)(3) non-profit, building a
            digital library of Internet sites and other cultural artifacts in
            digital form. Other <a href="">projects</a> include the{" "}
            <a href="">Wayback Machine,</a> <a href="">archive.org</a> and
            <a href="">archive-it.org</a>
          </p>
        </div>
        <button className={styles.versionButton}>
          version <a href="">7b61e1e</a>
        </button>
      </div>
    </footer>
  );
}
