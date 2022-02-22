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
        console.log(data);
    };

    // 4. Call the function to get the Log
    fetchApi();
}

export default ApiFetch;

// To add Later!
// Return the data from the function and get the data on the index.js to gather and show the data