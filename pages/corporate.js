import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Corporate() {
  return (
    <div>
      <Head>
        <title>WiCyS Illinois | Corporate</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>

      <Header />

      {}
      <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
        <iframe
          src= "/pdfs/WiCyS_Corporate_Packet.pdf" 
          width="800"
          height="600"
          style={{ border: 'none' }}
        >
        </iframe>
      </div>

      <Footer />
    </div>
  )
}
