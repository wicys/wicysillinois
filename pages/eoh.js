import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function EOH() {
  return (
    <div className="conCtainer">
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header/>
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        
      </main>

      <Footer />
    </div>
  )
}
