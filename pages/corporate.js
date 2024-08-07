import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Corporate() {
  return (
    <div>
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header />

      <Footer />
    </div>
  )
}
