import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.circle}>
                <div className={styles.circleContent}>
                <h1>Our Animals</h1>
                <h4>Which is your favourite?</h4>
                </div>
                </div>
            </div>
        </>
    );
}
