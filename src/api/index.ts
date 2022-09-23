import { ICoinResult, ICoinDetailResult } from '../Interface/CoinResultApi';
const baseUrl = "https://api.coinranking.com/v2";
const coinRank = `${baseUrl}/coins`;
const coinDetail = `${baseUrl}/coin`
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = 'coinranking5479dfa4f0667fe04716fde4770c780b5d3658cc520a6f74'

const getCoinRanking = async () => {
    try {
        const response = await fetch(`${proxyUrl}${coinRank}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-My-Custom-Header': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
        });
        const result: ICoinResult = await response.json();
        return result.data;
    } catch (error) {
        console.error(error);
    }   
}

const getCoinDetail = async (uuid: string) => {
    try {
        const response = await fetch(`${proxyUrl}${coinDetail}/${uuid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-My-Custom-Header': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
        });
        const result: ICoinDetailResult = await response.json();
        console.log("🚀 ~ file: index.ts ~ line 36 ~ getCoinDetail ~ result", result)
        return result.data
    } catch (error) {
        console.error(error);
    }  
}

export { getCoinRanking, getCoinDetail };