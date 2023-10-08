import { useRef } from "react";
import { Dialog } from "../Dialog/dialog";
import styles from "./create.module.scss";

export function CreateButtonDialog({
  titleTrending,
  titleClassic,
  titleBooksWeLove,
}) {
  const createDialogRef = useRef(null);
  function addDialog() {
    if (
      createDialogRef.current.style.display === "none" ||
      createDialogRef.current.style.display === ""
    ) {
      createDialogRef.current.style.display = "block";
    }
  }
  return (
    <div>
      <button onClick={addDialog} className={styles.addButton}>
        Add
      </button>
      <Dialog
        createDialogRef={createDialogRef}
        titleTrending={titleTrending}
        titleClassic={titleClassic}
        titleBooksWeLove={titleBooksWeLove}
      />
    </div>
  );
}
