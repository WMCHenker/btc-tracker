// 1. Added import of the NODE Library
const CoinGecko = require('coingecko-api');

const ApiFetch = async () => {

    // https://www.coingecko.com/en/api/documentation
    // https://github.com/miscavage/CoinGecko-API

    // 2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();

    // 3. Fetching the API Data and returning it from the function
    let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
    return data.data;

}

export default ApiFetch;