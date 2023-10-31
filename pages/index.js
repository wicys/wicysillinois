import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <>
    <link rel='stylesheet' type='text/css' href='global.css'></link>
    <div>
    <html>
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header />
      <main>
        
          <h1> <span className='wicys-purple'>WELCOME TO WOMEN IN CYBERSECURITY</span></h1>
          <p> <span className='wicys-green'>wicys@illinois</span>: ~$ cd WiCyS/About_us </p>
          <p> <span className='wicys-green'>wicys@illinois</span>: ~$ cat about.txt </p>


          <p>
          <span className='wicys-purple'>Women</span> in <span className='wicys-green'>Cybersecurity</span> <span className='wicys-blue'>Illinois</span> is the UIUC student chapter of the national organization dedicated to bringing together women in cybersecurity from academia, research, and industry to share knowledge, experience, mentoring, and networking.
          </p>
          <p>
            Our community is for those interested in learning more about the growing field of cybersecurity through tech talks, workshops, netowrking opportunities, research, conferences, and leadership opportunities.
          </p>
          <p>
            We have general meetings on Mondays from 6 to 7 PM every 2 weeks. Can’t make it? We have a bi-weekly <span className='wicys-purple'>newsletter</span>!
          </p>

          <p> <span className='wicys-green'>wicys@illinois</span>: <span className='wicys-purple'>~</span><span className='wicys-blue'>$</span> cd ..  </p>
          <p> <span className='wicys-green'>wicys@illinois</span>: <span className='wicys-purple'>~</span><span className='wicys-blue'>$</span> cd Home  </p>
          <p> <span className='wicys-green'>wicys@illinois</span>: <span className='wicys-purple'>~</span><span className='wicys-blue'>$</span> cat homepage.txt  </p>

        

            <img src="photo1.png" alt="picture1"/>


          <h2><span className='wicys-purple'>Events</span></h2>
          <p>
            We host general meetings every 2 weeks ranging from cryptography to command line workshops. Be sure to come network with company partners and learn with peers!
            Check out our <span className='wicys-blue'>calendar</span> to never miss our meetings!
          </p>
          <h2><span className='wicys-purple'>EOH Game</span></h2>
          <p>Every year we recruit individuals who are interested in gaining programming experience and incorporating cybersecurity topics into a security themed game! Be sure to check out our past games and if interested to contribute, check out our <span className='wicys-green'>Discord</span> channel for meetings!
          </p>
          <h3><span className='wicys-purple'>READY TO JOIN?</span></h3>
          <p><span className='wicys-purple'>Women</span> in <span className='wicys-green'>Cybersecurity</span> <span className='wicys-blue'>Illinois</span> is free to join and open to anyone! Don’t be discouraged if you do not identify as a woman or have little to no cybersecurity knowledge. The best way to get involved is to join our <span className='wicys-green'>Discord</span> and follow our <span className='wicys-blue'>Instagram</span>! There, you will find reminders for meetings and past events we host, feel free to ask any questions you may have. </p>
          <p>We also host social events such as pumpkin painting and study sessions when you want to relax! Join our newsletter to receive bi-weekly updates so you never miss out from us. </p>
        
      </main>
      <Footer/>
    </html>
    </div>
    </>
  )
}
