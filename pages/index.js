import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="homepage">
      <h1>WELCOME TO WOMEN IN CYBERSECURITY</h1>
      <p> wicys@illinois: ~$ cd WiCyS/About_us </p>
      <p> wicys@illinois: ~$ cat about.txt </p>
      
      
      <p>
        Women in Cybersecurity Illinois is the UIUC student chapter of the national organization dedicated to bringing together women in cybersecurity from academia, research, and industry to share knowledge, experience, mentoring, and networking.
      </p>
      <p>
        Our community is for those interested in learning more about the growing field of cybersecurity through tech talks, workshops, netowrking opportunities, research, conferences, and leadership opportunities. 
      </p>
      <p>
        We have general meetings on [Day of the Week] at [Time CST] every 2 weeks. Can’t make it? We have a bi-weekly newsletter!
      </p>
      
      <p> wicys@illinois: ~$ cd ..  </p>
      <p> wicys@illinois: ~$ cd Home  </p>
      <p> wicys@illinois: ~$ cat homepage.txt  </p>
      
    </div>
  )
}
