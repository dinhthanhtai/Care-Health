export interface ICoinDetail {
    '24hVolume': string;
    btcPrice: string;
    change: string;
    coinrankingUrl: string;
    color: string;
    iconUrl: string;
    listedAt: number;
    lowVolume: boolean;
    marketCap: string;
    name: string;
    price: string;
    rank: number
    sparkline: Array<string>;
    symbol: string;
    tier: number;
    uuid: string;
};

export interface ICoinDetail {
    allTimeHigh: object;
    description: string;
    fullyDilutedMarketCap: string;
    links: Array<object>;
    numberOfExchanges: number;
    numberOfMarkets: number;
    priceAt: number;
    supply: object;
    websiteUrl: string;
}