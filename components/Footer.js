import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
  return (
    <Component onClick={onClick} className="button" {...rest}>
      {children}
    </Component>
  );
};

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="column">
          <img
            src="./wicys_logo.svg"
            alt="wicys-logo-transparent"
            className={styles.logo}
          />
        </div>
        <div className="column">
          <p>Connect with us!</p>
          <div className="social">
            {/* way to make target = _blank default? */}
            <Button
              as="a"
              href="https://www.instagram.com/wicys.illinois/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.social} />
            </Button>
            <Button
              as="a"
              href="https://www.youtube.com/@wicysuiuc54/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDiscord} className={styles.social} />
            </Button>
            <Button as="a" href="https://github.com/wicys" target="_blank">
              <FontAwesomeIcon icon={faGithub} className={styles.social} />
            </Button>
            <Button
              as="a"
              href="https://www.facebook.com/WiCyS.illinois/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} className={styles.social} />
            </Button>
            <Button
              as="a"
              href="https://www.youtube.com/@wicysuiuc54/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} className={styles.social} />
            </Button>
          </div>
        </div>

        <div className="column">
          {" "}
          {/* wondering if we could implement enter email & automatically enroll to subscribe? */}
          <p>
            Subscribe to our{" "}
            <a
              as="a"
              href="https://docs.google.com/forms/d/1ClG2gPpIB8_Qk8a60ubF2hy2m64aOAccZHXT3iFKoOs/edit?usp=drive_web"
              target="_blank"
            >
              newsletter
            </a>
          </p>
          <p>
            Have a question? <br />
            <a href="mailto:wicys.illinois@gmail.com">
              wicys.illinois@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
