import { ICoinDetail } from "./CoinDetail";

export interface ICoinResult {
    status: string,
    data: {
        coins: Array<ICoinDetail>,
        stats: any
    }
}

export interface ICoinDetailResult {
    status: string,
    data: {
        coin: ICoinDetail
    }
}