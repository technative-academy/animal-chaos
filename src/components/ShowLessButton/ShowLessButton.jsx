import styles from "./ShowLessButton.module.css";

export default function ShowMoreButton({ decreasePageSize }) {
  return (
    <>
      <button onClick={decreasePageSize}>Show less</button>
    </>
  );
}
