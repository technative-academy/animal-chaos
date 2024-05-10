import styles from "./ShowLessButton.module.css";

export default function ShowMoreButton({ decreasePageSize }) {
  return (
    <>
      <button className={styles.showless} onClick={decreasePageSize}>
        Show less
      </button>
    </>
  );
}
