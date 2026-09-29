import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/board.module.css'
export default function Board() {
  return (
    <div >
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header title="Executive Board Members" />
      <h1>Meet the 2024-2025 Board!</h1>
      <main>
        <div className={styles.boardimages}>
        <p className={styles.description}> 
          wicys@illinois:~$ cd ..
          <br/>wicys@illinois:~$ cat Board.txt
        </p>
        <br></br>
        <hr></hr>
        <img src = "/michaela-briones.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su President<br/>President@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Michaela Briones<br/>President<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <div/>
        <img src = "/madison-lee.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su VicePresident<br/>VicePresident@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Madison Lee<br/>Vice President<br/>Junior in Information Sciences + Data Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/ally-stedman.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su Treasurer<br/>Treasurer@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Ally Stedman<br/>Treasurer<br/>Junior in Computer Science w/ Linguistics Minor</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/nikitha-srinivasan.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su CorporateChair<br/>CorporateChair@illinois:~$ whoami</p>  
        <p class={styles.boardnames}>Nikitha Srinivasan<br/>Corporate Chair<br/>Senior in Information Sciences + Data Science w/ CS Minor</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/elina-lee.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su PublicRelationsChair<br/>PublicRelationsChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Elina Lee<br/>Public Relations Chair<br/>Junior in Information Sciences</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/aashna-anand.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su InfrastructureChair<br/>InfrastructureChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Aashna Anand<br/>Infrastructure Chair<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/ria-sinha.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su EngineeringOpenHouseChair<br/>EngineeringOpenHouseChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Ria Sinha<br/>Engineering Open House Chair<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/prajna-kurella.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead1<br/>TechnicalLead1@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Prajna Kurella<br/>Technical Lead<br/>Junior in Information Sciences w/ CS Minor</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/emily-karbowniczek.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead2<br/>TechnicalLead2@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Emily Karbowniczek<br/>Technical Lead<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/harini-sridhar.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead3<br/>TechnicalLead3@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Harini Sridhar<br/>Technical Lead<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/sanvi-singh.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead4<br/>TechnicalLead4@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Sanvi Singh<br/>Technical Lead<br/>Junior in Information Sciences + Data Science w/ CS Minor</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
