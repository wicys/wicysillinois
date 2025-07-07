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
      <h1>Meet the 2025-2026 Board!</h1>
      <main>
        <div className={styles.boardimages}>
        <p className={styles.description}> 
          wicys@illinois:~$ cd ..
          <br/>wicys@illinois:~$ cat Board.txt
        </p>
        <br></br>
        <hr></hr>
        <img src = "/japjeevkaur.jpg"></img>
        <p class={styles.description}>wicys@illinois:~$ su President<br/>President@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Japjeev Kaur<br/>President<br/> Junior in Computer Science + Economics</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <div/>
        <img src = "/alejandraarias.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su VicePresident<br/>VicePresident@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Alejandra Arias<br/>Vice President<br/>Senior in Information Sciences + CS Minor</p>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/abbyobradovic.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su CorporateChair<br/>CorporateChair@illinois:~$ whoami</p>  
        <p class={styles.boardnames}>Abby Obradovic<br/>Corporate Chair<br/>Senior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/elinalee.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su PublicRelationsChair<br/>PublicRelationsChair@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Elina Lee<br/>Public Relations Chair<br/>Sophomore in Information Sciences</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/allystedman.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Ally Stedman<br/>Technical Lead<br/>Sophomore in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/alyssaflores.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Alyssa Flores<br/>Technical Lead<br/>Senior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/kashvipanjolia.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>Treasurer@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Kashvi Panjolia<br/>Technical Lead<br/>Junior in Computer Science</p>
        <br/>
        <br/>
        <br/>
        <hr></hr>
        <img src = "/madisonlee.png"></img>
        <p class={styles.description}>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class={styles.boardnames}>Madison Lee<br/>Technical Lead<br/>Sophomore in Information Sciences</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
