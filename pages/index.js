import Head from 'next/head'
import Main from '../components/Main';
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  const [dbData, setDbData] = useState();

  useEffect(() => {
    // Props working !
    // MySQL log !!!!
    console.log(data);
    setDbData(data);
  }, [])

  useEffect(() => {
    // Props working !
    // MySQL log !!!!
    setTimeout(() => {
      const fetchApiAgain = async () => {
        const res = await fetch(`http://localhost:3000/api/Prisma`)
        const fetchedData = await res.json()
        setDbData(fetchedData);
      };
      fetchApiAgain();
    }, 30000);
  })

  if (dbData) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Bitcoin Tracking App</title>
          <meta name="description" content="A realtime Bitcoin Tracking App - made by a duo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main data={dbData} />
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
  
}

// Server sided rendering (SSR)
export async function getServerSideProps() {
  // Fetch data from our own database API
  const res = await fetch(`http://localhost:3000/api/Prisma`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}