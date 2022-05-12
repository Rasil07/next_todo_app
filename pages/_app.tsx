import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
  <title>Todo App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
  <Header/>
  <main  className={styles.main}>
  <Component {...pageProps} />
  </main>
  <Footer/>
  </>
  )
}

export default MyApp
