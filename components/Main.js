import { useEffect, useState } from "react";
import ApiFetch from "../hooks/ApiFetch";
import Navbar from "../components/Navbar"

const Main = ({ data }) => {
    // State with API Data
    const [fetched, setFetched] = useState({});

    // On load fetch the Api and save it in the State
    useEffect(() => {
        ApiFetch().then(value => {
            setFetched(value);
        });
    }, [])

    // Just a Debug | When the data of fetched changes, you'll se it in the log
    useEffect(() => {
        console.log(fetched);
    }, [fetched]);

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen flex items-center justify-center bg-slate-500">   
                <div className="mx-auto my-auto max-w-lg bg-slate-400 rounded-lg p-3">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold underline">
                        {/* Bitcoin, becouse of the API output !!! WORKING */}
                        {fetched.name}
                    </h1>

                    <img src={fetched?.image?.small}></img>
                </div>
                <h2 className="text-2xl font-bold">
                    {/* ? Because when the JSX gets loaded the value of fetched is undefined/null. */}
                    {/* So the ? says the we don't know if it has any value */}
                    Currently {data[data.length - 1].current_value} €
                </h2>
                <h2 className="text-2xl font-bold">
                    {/* ? Because when the JSX gets loaded the value of fetched is undefined/null. */}
                    {/* So the ? says the we don't know if it has any value */}
                    Currently {data[data.length - 1].current_value_usd} $
                </h2>

                </div>
            </div>
        </>
    )
}

export default Main