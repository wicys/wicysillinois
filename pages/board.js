import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
export default function Board() {
  return (
    <div >
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>

      <main>
        <Header title="Executive Board Members" />
        <div className='boardimages'>
        <p className="description"> 
          wicys@illinois:~$ cd ..
          <br/>wicys@illinois:~$ 
          <br/>cat Board.txt
        </p>
        <br></br>
        <h1>Meet the 2023-2023 Board!</h1>
        <p>wicys@illinois:~$ su President<br/>President@illinois:~$ whoami</p>
        <p class='name'>Sophia Liu<br/>President<br/>Sophomore in Computer Science</p>
        <img src = "/prez.jpg"></img>

        <p>wicys@illinois:~$ su ExternalVicePresident<br/>ExternalVicePresident@illinois:~$ whoami</p>
        <p class='name'>Priya Dutta<br/>External Vice President<br/>Junior in Computer Engineering</p>
        <img src = "/extvp.png"></img>

        <p>wicys@illinois:~$ su InternalVicePresident<br/>InternalVicePresident@illinois:~$ whoami</p>
        <p class='name'>Abigail Obradovic<br/>Internal Vice President<br/>Sophomore in Computer Science</p>
        <img src = "/intvp.png"></img>

        <p>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>  
        <p class='name'>Nicole Gromski<br/>Technical Lead<br/>Junior in Information Science</p>
        <img src = "/nicoletechlead.png"></img>

        <p>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class='name'>Athena Fung<br/>Technical Lead<br/>Junior in Computer Science</p>
        <img src = "/athenatechlead.png"></img>

        <p>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class='name'>Japjeev Kaur<br/>Technical Lead<br/>Freshman in Computer Science and Economics</p>
        <img src = "/japjeevtechlead.png"></img>

        <p>wicys@illinois:~$ su TechnicalLead<br/>TechnicalLead@illinois:~$ whoami</p>
        <p class='name'>Kushi<br/>Technical Lead<br/>Sophomore in Computer Engineering</p>
        <img src = "/kushitechlead.png"></img>

        <p>wicys@illinois:~$ su Treasurer<br/>Treasurer@illinois:~$ whoami</p>
        <p class='name'>Sena Tiryaki<br/>Treasurer<br/>Freshman in Computer Engineering</p>
        <img src = "/treasurer.png"></img>

        <p>wicys@illinois:~$ su PublicRelationsChair<br/>PublicRelationsChair@illinois:~$ whoami</p>
        <p class='name'>Alejandra Arias<br/>Public Relations Chair<br/>Sophomore in Information Science + Computer Science Minor</p>
        <img src = "/pubrelations.png"></img>
        </div>
      </main>
      <Footer />
    </div>
  )
}
