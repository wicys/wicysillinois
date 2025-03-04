import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WiCyS Illinois</title>
        <meta httpEquiv='X-UA-Compatible' ></meta>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header/>
      <h1 className="header-block">WELCOME TO WOMEN IN CYBERSECURITY</h1>
      
          <p className="block-text"> wicys@illinois: ~$ cd WiCyS/About_us </p>
          <p className="block-text"> wicys@illinois: ~$ cat about.txt </p>
          <p className="block-text">
            <span className='wicys-green'>Women in Cybersecurity Illinois</span> is the UIUC student chapter of the national organization dedicated to bringing together women in cybersecurity from academia, research, and industry to share knowledge, experience, mentoring, and networking.
          </p>
          <p className="block-text">
            Our community is for those interested in learning more about the growing field of cybersecurity through tech talks, workshops, netowrking opportunities, research, conferences, and leadership opportunities.
          </p>
          <p className="block-text">
            We have general meetings on Mondays from 6 to 7 PM every 2 weeks. Can’t make it? Join us for weekly study hours from 6-8 PM in the Grainger Library (Room 433) to meet other members and be productive! We also have a bi-weekly <span className='wicys-green'>newsletter</span>!
          </p>

          <p className="block-text"> wicys@illinois: ~$ cd ..  </p>
          <p className="block-text">wicys@illinois: ~$ cd Home  </p>
          <p className="block-text"> wicys@illinois: ~$ cat homepage.txt  </p>

        
        
          <h1 className="header-block">Events</h1>
          <p className="block-text">
            We host general meetings every 2 weeks ranging from cryptography to command line workshops. Be sure to come network with company partners and learn with peers!
            Check out our <span className='wicys-blue'>calendar</span> to never miss our meetings!
          </p>
          <h1 className="header-block">READY TO JOIN?</h1>
          <p className="block-text">Women in Cybersecurity Illinois is free to join and open to anyone! Don’t be discouraged if you do not identify as a woman or have little to no cybersecurity knowledge. The best way to get involved is to join our Discord and follow our Instagram! There, you will find reminders for meetings and past events we host, feel free to ask any questions you may have. </p>
          <p className="block-text">We also host social events such as pumpkin painting and study sessions when you want to relax! Join our newsletter to receive bi-weekly updates so you never miss out from us. </p>
      <Footer/>
    </div>
  )
}
