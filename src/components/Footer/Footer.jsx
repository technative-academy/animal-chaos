import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div class="footer-main">
        <div class="footer-company">
          <h3>Company</h3>
          <a href="./about/">About Us</a> <br />
          <a href="./about/">Contact Us</a>
        </div>
        <div class="footer-legal">
          <h3>Legal</h3>
          <a href="https://github.com/technative-academy/animal-chaos/blob/master/credits.md">
            Credits and Attributions
          </a>
          <br />
          <a href="./legal/cookies/">Cookies Policy</a>
          <br />
          <a href="./legal/privacy/">Privacy Policy</a>
          <br />
          <a href="./legal/tos/">Terms of Service</a>
        </div>
      </div>
      <hr />
      <div class="footer-copyright-socials">
        <span class="footer-copyright">
          &copy; 2024 - Licensed under
          <a
            href="https://github.com/technative-academy/animal-chaos/blob/master/LICENSE.md"
            target="_blank"
          >
            MIT
          </a>
        </span>
        <div class="footer-socials">
          <a
            class="social-icon"
            target="_blank"
            href="https://www.instagram.com/"
          >
            <img
              width="18"
              height="18"
              src="images/socials/instagram.svg"
              alt="Our Instagram"
            />
          </a>
          <a class="social-icon" target="_blank" href="https://dribbble.com/">
            <img
              width="18"
              height="18"
              src="images/socials/dribble.svg"
              alt="Our Dribble profile"
            />
          </a>
          <a class="social-icon" target="_blank" href="https://twitter.com/">
            <img
              width="16"
              height="13"
              src="images/socials/twitter.svg"
              alt="Our Twitter"
            />
          </a>
          <a
            class="social-icon"
            target="_blank"
            href="https://www.youtube.com/"
          >
            <img
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
