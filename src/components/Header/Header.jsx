import styles from "./Header.module.css";
import SiteNav from "../SiteNav/SiteNav";
export default function Header() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.circle}>
                <div className={styles.circleContent}>
                <div className={styles.circleContentHeading}>
                <img className={styles.circleContentHeadingLeftImage} src={"./images/ducklogo.png"}/>
                <h1>Our Animals</h1>
                <img src={"./images/ducklogo.png"}/>
                </div>
                <SiteNav/>
                <h4>Which is your favourite?</h4>
                </div>
                </div>
            </div>
        </>
    );
}
