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
            <div className="h-screen w-screen flex items-center justify-center bg-slate-700">
                <div className="mx-auto my-auto max-w-lg bg-slate-600 rounded-lg p-3">
                <h1 className="text-3xl font-bold underline">
                    {/* Bitcoin, becouse of the API output !!! WORKING */}
                    {fetched.name}
                </h1>
                <h2 className="text-2xl font-bold">
                    {/* ? Because when the JSX gets loaded the value of fetched is undefined/null. */}
                    {/* So the ? says the we don't know if it has any value */}
                    Currently {fetched?.market_data?.current_price.eur} €
                </h2>
                <ul>
                    <li>Highest of the last 24 hrs: {fetched?.market_data?.high_24h?.eur} €</li>
                    <li>Lowest of the last 24 hrs: {fetched?.market_data?.low_24h?.eur} €</li>
                    <li>Price change of the last 24 hrs: {fetched?.market_data?.price_change_24h_in_currency?.eur?.toFixed(2)} €</li>
                    <li>Price change of the last hr: {fetched?.market_data?.price_change_percentage_1h_in_currency?.eur?.toFixed(2)} €</li>
                    <li>Price change of the last 14d: {fetched?.market_data?.price_change_percentage_14d_in_currency?.eur?.toFixed(2)} €</li>
                    <li>Price change of the last 30d: {fetched?.market_data?.price_change_percentage_30d_in_currency?.eur?.toFixed(2)} €</li>
                    <li>Price change of the last 60d: {fetched?.market_data?.price_change_percentage_60d_in_currency?.eur?.toFixed(2)} €</li>
                    <li>Price change of the last 200d: {fetched?.market_data?.price_change_percentage_200d_in_currency?.eur?.toFixed(2)} €</li>
                    <li>Price change of the last 1y: {fetched?.market_data?.price_change_percentage_1y_in_currency?.eur?.toFixed(2)} €</li>
                </ul>
                </div>
            </div>
        </>
    )
}

export default Main