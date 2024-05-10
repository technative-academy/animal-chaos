import styles from "./Animal.module.css";

export default function Animal({ id, title, description, image }) {
  return (
    <>
      <img className={styles.image} src={`images/${image}`} />
      <p>{title}</p>
    </>
  );
}
