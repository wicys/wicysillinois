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
          <span className='wicys-green'>wicys@illinois</span>:~$ cd ..
          <br/><span className='wicys-green'>wicys@illinois</span>:~$ cd Board
          <br/><span className='wicys-green'>wicys@illinois</span>:~$ cat Board.txt
        </p>
        <br></br>
        <h1>Meet the 2023-2023 Board!</h1>
        <p><span className='wicys-green'>wicys@illinois</span>:~$ su President<br/><span className='wicys-green'>President@illinois</span>:~$ whoami</p>
        <p class='name'>Sophia Liu<br/>President<br/>Sophomore in Computer Science</p>
        <img src = "/prez.jpg"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su ExternalVicePresident<br/><span className='wicys-green'>ExternalVicePresident@illinois</span>:~$ whoami</p>
        <p class='name'>Priya Dutta<br/>External Vice President<br/>Junior in Computer Engineering</p>
        <img src = "/extvp.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su InternalVicePresident<br/><span className='wicys-green'>InternalVicePresident@illinois</span>:~$ whoami</p>
        <p class='name'>Abigail Obradovic<br/>Internal Vice President<br/>Sophomore in Computer Science</p>
        <img src = "/intvp.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su TechnicalLead<br/><span className='wicys-green'>TechnicalLead@illinois</span>:~$ whoami</p>  
        <p class='name'>Nicole Gromski<br/>Technical Lead<br/>Junior in Information Science</p>
        <img src = "/nicoletechlead.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su TechnicalLead<br/><span className='wicys-green'>TechnicalLead@illinois</span>:~$ whoami</p>
        <p class='name'>Athena Fung<br/>Technical Lead<br/>Junior in Computer Science</p>
        <img src = "/athenatechlead.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su TechnicalLead<br/><span className='wicys-green'>TechnicalLead@illinois</span>:~$ whoami</p>
        <p class='name'>Japjeev Kaur<br/>Technical Lead<br/>Freshman in Computer Science and Economics</p>
        <img src = "/japjeevtechlead.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su TechnicalLead<br/><span className='wicys-green'>TechnicalLead@illinois</span>:~$ whoami</p>
        <p class='name'>Kushi<br/>Technical Lead<br/>Sophomore in Computer Engineering</p>
        <img src = "/kushitechlead.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su Treasurer<br/><span className='wicys-green'>Treasurer@illinois</span>:~$ whoami</p>
        <p class='name'>Sena Tiryaki<br/>Treasurer<br/>Freshman in Computer Engineering</p>
        <img src = "/treasurer.png"></img>

        <p><span className='wicys-green'>wicys@illinois</span>:~$ su PublicRelationsChair<br/><span className='wicys-green'>PublicRelationsChair@illinois</span>:~$ whoami</p>
        <p class='name'>Alejandra Arias<br/>Public Relations Chair<br/>Sophomore in Information Science + Computer Science Minor</p>
        <img src = "/pubrelations.png"></img>
        </div>
      </main>
      <Footer />
    </div>
  )
}
