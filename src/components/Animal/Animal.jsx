import styles from "./Animal.module.css";

export default function Animal({ id, title, description, image }) {
  return (
    <div className={styles.animalcard}>
      <img className={styles.image} src={`images/${image}`} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
