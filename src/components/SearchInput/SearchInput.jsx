import styles from "./SearchInput.module.css";

export default function SearchInput({ input, setInput }) {
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h2>Find the animal you're looking for</h2>
      <input
        type="text"
        placeholder="Search animals..."
        value={input}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}
