import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Events() {
  return (
    <div className="container">
      <Head>
        <title>WiCyS Illinois</title>
        <link rel="icon" href="https://www.wicys.org/wp-content/uploads/2020/10/favicon-wicys.png" />
      </Head>
      <Header />

      <main>
        <h1> EVENTS </h1>
        <p>Overview of meetings and when they occur</p>
        <div id="FA2023">
          <h4>Fall 2023</h4>
          <ul style="list-style-type: none;">
            <li>Meeting 1</li>
            <li>Meeting 2</li>
            <li>Meeting 3</li>
            <li>Meeting 4</li>
            <li>Meeting 5</li>
          </ul>
        </div>

        <div id="SPR23">
          <h4>Spring 2023</h4>
          <ul style="list-style-type: none;">
            <li>Meeting 1</li>
            <li>Meeting 2</li>
            <li>Meeting 3</li>
            <li>Meeting 4</li>
            <li>Meeting 5</li>
            <li>Meeting 6</li>
            <li>Meeting 7</li>
            <li>Meeting 8</li>
          </ul>
        </div>

        <div id="FA22">
          <h4>Fall 2022</h4>
          <ul style="list-style-type: none;">
            <li>Meeting 1</li>
            <li>Meeting 2</li>
            <li>Meeting 3</li>
            <li>Meeting 4</li>
            <li>Meeting 5</li>
            <li>Meeting 6</li>
            <li>Meeting 7</li>
            <li>Meeting 8</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
