// Added import of the NODE Library
const CoinGecko = require('coingecko-api');

function ApiFetch() {

    // https://www.coingecko.com/en/api/documentation
    // https://github.com/miscavage/CoinGecko-API

    // 2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();

    // 3. Make API call and log it to the Console
    let fetchApi = async () => {
        let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
        return data.data.name;
    };

    // 4. Call the function as return to use the value in other components
    return fetchApi();
}

export default ApiFetch;

// To add Later!
// Return the data from the function and get the data on the index.js to gather and show the data