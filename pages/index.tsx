import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Servicing from './Servicing/Servicing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
      <Head>
        <title>myTVS Proto</title>
        <meta name="description" content="Demo app for myTVS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      
        

        <Servicing />
        
       
        
      </main>
    </>
  )
}
