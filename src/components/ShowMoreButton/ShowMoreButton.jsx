import styles from "./ShowMoreButton.module.css";

export default function ShowMoreButton({ increasePageSize }) {
  return (
    <>
      <button onClick={increasePageSize} className={styles.showmore}>
        Show more
      </button>
    </>
  );
}
