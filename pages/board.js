import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/board.module.css'
export default function Board() {
  return (
    <div >
      <Head>
        <title>WiCyS Illinois | Board</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header title="Executive Board Members" />
      <h1>Meet the 2026-2027 Board!</h1>
      <main>
        <div className={styles.boardimages}>
        <p className={styles.description}> 
          wicys@illinois:~$ cd ..
          <br/>wicys@illinois:~$ cat Board.txt
        </p>
        <br></br>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/michaela-briones.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su President<br/>President@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Michaela Briones<br/>President<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <div/>
        <img src = "/madison-lee.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su VicePresident<br/>VicePresident@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Madison Lee<br/>Vice President<br/>Senior in Information Sciences<br/> + Data Science</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/ally-stedman.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su Treasurer<br/>Treasurer@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Ally Stedman<br/>Treasurer<br/>Junior in Computer Science<br/>w/ Linguistics Minor</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/nikitha-srinivasan.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su CorporateChair<br/>CorporateChair@illinois:~$ whoami</p>  
        <p class={styles.boardnames}>Nikitha Srinivasan<br/>Corporate Chair<br/>Senior in Information Sciences<br/> + Data Science w/ CS Minor</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/elina-lee.jpg"></img>
        <p class={styles.description}>wicys@illinois:~$ su PRChair<br/>PRChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Elina Lee<br/>Public Relations Chair<br/>Junior in Information Sciences</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/aashna-anand.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su InfraChair<br/>InfraChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Aashna Anand<br/>Infrastructure Chair<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/ria-sinha.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su EOHChair<br/>EOHChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Ria Sinha<br/>Engineering Open House Chair<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/prajna-kurella.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechLead1<br/>TechLead1@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Prajna Kurella<br/>Technical Lead<br/>Junior in Information Sciences<br/> w/ CS Minor</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/emily-karbowniczek.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechLead2<br/>TechLead2@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Emily Karbowniczek<br/>Technical Lead<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/harini-sridhar.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechLead3<br/>TechLead3@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Harini Sridhar<br/>Technical Lead<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <p class={styles.boardname}>-------------------------------------------------------------------------</p>
        <img src = "/sanvi-singh.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechLead4<br/>TechLead4@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Sanvi Singh<br/>Technical Lead<br/>Junior in Information Sciences<br/> + Data Science w/ CS Minor</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
