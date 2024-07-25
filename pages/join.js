import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Join() {
  return (
    <div className="container">
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <main>
        <Header title="Welcome to my app!" />
        <h1>Ready to Join Women in Cybersecurity?</h1>
        <p className="description">
          A learning community for those interested in cybersecurity! Connect with board members, peers, and company partners
          on our discord.
        </p>
        <p>
          <a href="https://discord.gg/8y7r5Xr">Join our Discord!</a>
        </p>
        <p><i>before joining, be sure to check out our rules!</i></p>
        <h2>How to get involved</h2>
      </main>

      <Footer />
    </div>
  )
}
