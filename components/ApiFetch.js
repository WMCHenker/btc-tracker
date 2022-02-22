const CoinGecko = require('coingecko-api');

function ApiFetch() {

    //https://www.coingecko.com/en/api/documentation
    //https://github.com/miscavage/CoinGecko-API

    //2. Initiate the CoinGecko API Client
    const CoinGeckoClient = new CoinGecko();

    //3. Make calls
    let fetchApi = async () => {
        let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
        console.log(data);
    };

    fetchApi();
}

export default ApiFetch;
