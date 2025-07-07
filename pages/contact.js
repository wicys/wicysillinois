import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faGithub,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us | WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>

      <Header title="Contact WiCyS Illinois" />

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Reach Out</h2>
          <p>
            Have a question about our events, how to get involved, or anything else? 
            We're happy to hear from you!
          </p>
          <p>
          Email us at: <a href="mailto:wicys.illinois@gmail.com" className={styles.emailLink}>wicys.illinois@gmail.com</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Stay Connected</h2>
          <p>Follow us on our social platforms to stay up-to-date with events and news:</p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/wicys.illinois/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://discord.gg/skb8UeTPeC" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="https://github.com/wicys" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.facebook.com/WiCyS.illinois/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.youtube.com/@wicysuiuc54/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Join Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive updates on upcoming events, workshops, and more.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
