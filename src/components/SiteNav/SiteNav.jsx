import styles from "./SiteNav.module.css";
import { Link } from "react-router-dom";

export default function SiteNav() {
  return (
    <section className={styles.header}>
     
      <nav>
        <ul className={styles.navmenu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
