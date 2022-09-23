import { useState, useEffect } from 'react';
import { getCoinDetail } from '../api';
import { useParams, Link } from 'react-router-dom';
import { ICoinDetail } from '../Interface/CoinDetail';

const Detail: React.FC = () => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState<ICoinDetail>({
        '24hVolume': '',
        btcPrice: '',
        change: '',
        coinrankingUrl: '',
        color: '',
        iconUrl: '',
        listedAt: 0,
        lowVolume: true,
        marketCap: '',
        name: '',
        price: '',
        rank: 0,
        sparkline: [],
        symbol: '',
        tier: 0,
        uuid: '',
        allTimeHigh: {},
        description: '',
        fullyDilutedMarketCap: '',
        links: [],
        numberOfExchanges: 0,
        numberOfMarkets: 0,
        priceAt: 0,
        supply: {},
        websiteUrl: '',
    });

    const fetchCoinDetail = async () => {
        try {
            if (coinId) {
                const response = await getCoinDetail(coinId);
                
                if (response) {
                    setCoin(response.coin);
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        fetchCoinDetail();
    }, [])

    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <h1 className="text-xl font-semibold">Front - End Exam  = ❤</h1>
            <div className="mt-6">
                <div className="font-sans">
                    <p className="text-base md:text-sm text-gray-400 font-bold">&lt; <Link to={'/'} className="text-base md:text-sm text-gray-400 font-bold no-underline hover:underline">BACK TO LIST</Link></p>
                    <h1 className="text-center font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Coin Detail: <span style={{color: coin.color}}>{coin.name}</span></h1>
                    <img className='my-3 w-20 mx-auto' src={coin.iconUrl}/>
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-serif'>Rank: </span>
                        <p className=''>{coin.rank}</p>
                    </section> 
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-mono' >Symbol: </span>
                        <p style={{color: coin.color}}>{coin.symbol}</p>
                    </section> 
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-mono' >Price: </span>
                        <p>{coin.price}</p>
                    </section> 
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-mono'>Website: </span>
                        <p>{coin.websiteUrl}</p>
                    </section> 
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-mono'>Number of Market: </span>
                        <p>{coin.numberOfMarkets}</p>
                    </section> 
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-mono'>Market Cap: </span>
                        <p>{coin.marketCap}</p>
                    </section>
                    <section className='flex justify-between mt-5 md:justify-center'>
                        <span className='mr-2 font-mono'>24h Volume: </span>
                        <p>{coin.marketCap}</p>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Detail;