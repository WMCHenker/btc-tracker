import Navbar from "../components/Navbar";
import { BitcoinChart } from "../components/BitcoinChart";

export default function Bitcoin({ data }) {
  return (
    <>
        <Navbar></Navbar>
        <div className="pt-56 mx-auto max-w-6xl text-center">
            <h1 className="font-bold text-2xl">Bitcoin</h1>
            <h2 className="text-xl">{data[data?.length - 1].current_value} €</h2>
            <BitcoinChart apiData={data}/>
        </div>
    </>
  )
}


export async function getServerSideProps() {
    // Fetch data from our own database API
    const res = await fetch(`http://localhost:3000/api/Prisma`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  