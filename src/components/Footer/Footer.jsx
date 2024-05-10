import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.company}>
          <h3 className={`${styles.h3} ${styles.mainElement}`}>Company</h3>
          <a className={`${styles.a} ${styles.mainElement}`} href="./about/">
            About Us
          </a>
          <br className={styles.mainElement} />
          <a className={`${styles.a} ${styles.mainElement}`} href="./about/">
            Contact Us
          </a>
        </div>
        <div className={styles.legal}>
          <h3 className={`${styles.h3} ${styles.mainElement}`}>Legal</h3>
          <a
            className={`${styles.a} ${styles.mainElement}`}
            href="https://github.com/technative-academy/animal-chaos/blob/master/credits.md"
          >
            Credits and Attributions
          </a>
          <br className={styles.mainElement} />
          <a
            className={`${styles.a} ${styles.mainElement}}`}
            href="./legal/cookies/"
          >
            Cookies Policy
          </a>
          <br className={styles.mainElement} />
          <a
            className={`${styles.a} ${styles.mainElement}`}
            href="./legal/privacy/"
          >
            Privacy Policy
          </a>
          <br className={styles.mainElement} />
          <a
            className={`${styles.a} ${styles.mainElement}`}
            href="./legal/tos/"
          >
            Terms of Service
          </a>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.copyrightSocials}>
        <span className={`${styles.span} ${styles.copyright}`}>
          &copy; 2024 - Licensed under{" "}
          <a
            className={`${styles.a} ${styles.copyrightLink}`}
            href="https://github.com/technative-academy/animal-chaos/blob/master/LICENSE.md"
            target="_blank"
          >
            MIT
          </a>
        </span>
        <div className={styles.socials}>
          <a
            className={`${styles.a} ${styles.socialLink}`}
            target="_blank"
            href="https://www.instagram.com/"
          >
            <img
              className={styles.socialIcon}
              width="18"
              height="18"
              src="images/socials/instagram.svg"
              alt="Our Instagram"
            />
          </a>
          <a
            className={`${styles.a} ${styles.socialLink}`}
            target="_blank"
            href="https://dribbble.com/"
          >
            <img
              className={styles.socialIcon}
              width="18"
              height="18"
              src="images/socials/dribble.svg"
              alt="Our Dribble profile"
            />
          </a>
          <a
            className={`${styles.a} ${styles.socialLink}`}
            target="_blank"
            href="https://twitter.com/"
          >
            <img
              className={styles.socialIcon}
              width="16"
              height="13"
              src="images/socials/twitter.svg"
              alt="Our Twitter"
            />
          </a>
          <a
            className={`${styles.a} ${styles.socialLink}`}
            target="_blank"
            href="https://www.youtube.com/"
          >
            <img
              className={styles.socialIcon}
              width="18"
              height="13"
              src="images/socials/youtube.svg"
              alt="Our YouTube"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
