import { useEffect, useState } from "react";
import ApiFetch from "../hooks/ApiFetch";

const Main = () => {
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
            <h1 className="text-3xl font-bold underline">
                {/* Bitcoin, becouse of the API output !!! WORKING */}
                {fetched.name}
            </h1>
            <h2 className="text-2xl font-bold">
                {/* ? Because when the JSX gets loaded the value of fetched is undefined/null. */}
                {/* So the ? says the we don't know if it has any value */}
                {fetched?.market_data?.current_price.eur} €
            </h2>
            
        </>
    )
}

export default Main