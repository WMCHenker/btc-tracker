import Navbar from "../components/Navbar";
import { BitcoinChart } from "../components/BitcoinChart";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import { InlineIcon } from "@iconify/react";

export default function Bitcoin({ data }) {
  const [dbData, setDbData] = useState();

  useEffect(() => {
    // Props working !
    // MySQL log !!!!
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
              <h1 className="font-bold text-4xl">Bitcoin</h1>
              <InlineIcon  className="inline" icon="akar-icons:arrow-up" color={(dbData[data?.length - 1].current_value - dbData[data?.length - 2].current_value) > 0 ? 'green' : 'red'} vFlip={(dbData[data?.length - 1].current_value - dbData[data?.length - 2].current_value) > 0 ? 'false' : 'true'} width='25'/>
              <h2 className="text-2xl inline">{(dbData[data?.length - 1].current_value - dbData[data?.length - 2].current_value) / 100}% / {dbData[data?.length - 1].current_value} €</h2>
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