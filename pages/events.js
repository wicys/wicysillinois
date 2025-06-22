import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/events.module.css"; 

export default function events() {
  const events = [
    {
      title: "Technical Workshops",
      image: "/technical.jpg",
      description:
        "Hone your technical skills with hands-on coding sessions, CTFs, reverse engineering, and cybersecurity tool demos.",
    },
    {
      title: "Social Events",
      image: "/social.jpg",
      description:
        "Build lasting friendships through game nights, ice cream socials, movie screenings, and bonding activities.",
    },
    {
      title: "Corporate Events",
      image: "professional.jpg",
      description:
        "Get career-ready with resume workshops, mock interviews, and networking nights hosted by top companies in cybersecurity.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>WiCyS Illinois | Events</title>
        <link
          rel="icon"
          href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png"
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Our Events</h1>

        <div className={styles.eventRow}>
          {events.map((event, index) => (
            <div key={index} className={styles.card}>
              <img
                src={event.image}
                alt={event.title}
                className={styles.image}
              />
              <h2 className={styles.cardTitle}>{event.title}</h2>
              <p className={styles.cardDescription}>{event.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
