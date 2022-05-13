import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={queryClient}>
  <Head>
  <title>Todo App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
  <Header/>
  <main  className={styles.main}>
  <Component {...pageProps} />
  </main>
  <Footer/>
  </QueryClientProvider>
  )
}

export default MyApp
