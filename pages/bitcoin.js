import Navbar from "../components/Navbar";
import { BitcoinChart } from "../components/BitcoinChart";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";

export default function Bitcoin({ data }) {
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
      <>
          <Navbar></Navbar>
          <div className="pt-56 mx-auto max-w-6xl text-center">
              <h1 className="font-bold text-2xl">Bitcoin</h1>
              <h2 className="text-xl">{dbData[data?.length - 1].current_value} €</h2>
              <BitcoinChart apiData={dbData}/>
          </div>
      </>
    )
  } else {
    return <LoadingPage />
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