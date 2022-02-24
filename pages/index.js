import Head from 'next/head'
import Main from '../components/Main';
import styles from '../styles/Home.module.scss'
import { useEffect } from 'react';

export default function Home({ data }) {

  useEffect(() => {
    // Props working !
    // MySQL log !!!!
    console.log(data);
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin Tracking App</title>
        <meta name="description" content="A realtime Bitcoin Tracking App - made by a duo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}


// Server sided rendering (SSR)
export async function getServerSideProps() {
  // Fetch data from our own database API
  const res = await fetch(`http://localhost:3000/api/Prisma`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}