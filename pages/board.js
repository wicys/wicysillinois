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
      <h1>Meet the 2023-2023 Board!</h1>
      <main>
        <div className={styles.boardimages}>
        <p className={styles.description}> 
          wicys@illinois:~$ cd ..
          <br/>wicys@illinois:~$ cat Board.txt
        </p>
        <br></br>
        <hr></hr>
        <img src = "/prez.jpg"></img>
        <p class={styles.description}>wicys@illinois:~$ su President<br/>President@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Sophia Liu<br/>President<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <div/>
        <img src = "/extvp.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su ExternalVicePresident<br/>ExternalVicePresident@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Priya Dutta<br/>External Vice President<br/>Junior in Computer Engineering</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/intvp.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su InternalVicePresident<br/>InternalVicePresident@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Abigail Obradovic<br/>Internal Vice President<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/nicoletechlead.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>  
        <p class={styles.boardnames}>Nicole Gromski<br/>Technical Lead<br/>Junior in Information Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/athenatechlead.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Athena Fung<br/>Technical Lead<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/japjeevtechlead.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Japjeev Kaur<br/>Technical Lead<br/>Freshman in Computer Science and Economics</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/kushitechlead.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Kushi Kalra<br/>Technical Lead<br/>Sophomore in Computer Engineering</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/treasurer.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su Treasurer<br/>Treasurer@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Sena Tiryaki<br/>Treasurer<br/>Freshman in Computer Engineering</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/pubrelations.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su PublicRelationsChair<br/>PublicRelationsChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Alejandra Arias<br/>Public Relations Chair<br/>Sophomore in Information Science + Computer Science Minor</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
