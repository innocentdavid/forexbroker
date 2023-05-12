

import  React from 'react'
import man from '../images/steven headshot.jpg'
import pics from '../images/blain-cropped-170x.jpg'



export default function Team() {
    return(
        <div className='w-full md:p-5 mt-3'>

            <div className='md:max-w-[1000px] w-full md:mx-auto mt-3'>

                <h1 className='md:text-[35px]  text-[25px] md:px-4 px-3 font-semi-bold'>Forex Risk Disclaimer</h1>

                <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'><i>There is a very high degree of risk involved in trading securities. With respect to margin-based foreign exchange trading, off-exchange derivatives, and cryptocurrencies, there is considerable exposure to risk, including but not limited to, leverage, creditworthiness, limited regulatory protection and market volatility that may substantially affect the price, or liquidity of a currency or related instrument. It should not be assumed that the methods, techniques, or indicators presented in these products will be profitable, or that they will not result in losses. <a href='/' className='text-blue-800'> Read more on forex trading risks.</a></i></p>

                <h1 className='md:text-[35px] mt-4 text-[25px] md:px-4 px-3 md:mb-8 font-semi-bold'>About the Editorial Team</h1>

                <div className='md:max-w-[1000px] w-full  gap-5 md:mx-auto mt-8'>
                    <div className='hidden md:flex-row md:flex'>
                        <img src={man} className='w-[20%] h-[20%] mx-2 rounded-full' alt='men'></img>
                        <div className='' >
                            <a href='/' className='text-blue-500 md:text-[20px] text-[18px] md:px-5 px-3 md:my-1 my-2'>Steven Hatzakis</a>
                            <p className='md:text-[20px] text-[18px] md:px-5 px-3 my-2'>Steven Hatzakis is the Global Director of Research for ForexBrokers.com. Steven previously served as an Editor for Finance Magnates, where he authored over 1,000 published articles about the online finance industry. A forex industry expert and an active fintech and crypto researcher, Steven advises blockchain companies at the board level and holds a Series III license in the U.S. as a Commodity Trading Advisor (CTA).</p>
                        </div>
                    </div>

                    <div className='md:hidden block'>
                        <div className='flex gap-1 '>
                        <img src={man} className='w-[25%] h-[25%] mx-2 rounded-full' alt='men'></img>
                        <div>
                            <a href='/' className='text-blue-500  text-[18px]  px-1 my-2'>Steven Hatzakis</a>
                            <p className=' text-[18px]  ma-1'>Steven Hatzakis is the Global Director of Research </p>
                        </div>
                        </div>
                        <div className='' >
                            <p className='mx-2 text-[18px] md:px-5  '> for ForexBrokers.com. Steven previously served as an Editor for Finance Magnates, where he authored over 1,000 published articles about the online finance industry. A forex industry expert and an active fintech and crypto researcher, Steven advises blockchain companies at the board level and holds a Series III license in the U.S. as a Commodity Trading Advisor (CTA).</p>
                        </div>
                    </div>

                </div>

                <div className='md:max-w-[1000px]  w-full gap-5 md:mx-auto mt-8'>
                    <div className='hidden md:flex-row md:flex'>
                        <img src={pics} className='w-[20%] h-[20%] mx-2 rounded-full' alt='men'></img>
                        <div className='' >
                            <a href='/' className='text-blue-500 md:text-[20px] text-[18px] md:px-5 px-3 md:my-1 my-2'>Blain Reinkensmeyer</a>
                            <p className='md:text-[20px] text-[18px] md:px-5 px-3 my-2'>Blain Reinkensmeyer has 20 years of trading experience with over 2,500 trades placed during that time. He heads research for all U.S.-based brokerages on StockBrokers.com and is respected by executives as the leading expert covering the online broker industry. Blain’s insights have been featured in the New York Times, Wall Street Journal, Forbes, and the Chicago Tribune, among other media outlets.</p>
                        </div>
                    </div>

                    <div className='md:hidden '>
                        <div className='flex gap-1 '>
                        <img src={pics} className='w-[25%] h-[25%] mx-2 rounded-full' alt='men'></img>
                        <div>
                            <a href='/' className='text-blue-500  text-[18px]  px-1 my-2'>Blain Reinkensmeyer</a>
                            <p className=' text-[18px]  ma-1'>Steven Hatzakis is the Global Director of Research </p>
                        </div>
                        </div>
                        <div className='' >
                            <p className='mx-2 text-[18px] md:px-5  '> Blain Reinkensmeyer has 20 years of trading experience with over 2,500 trades placed during that time. He heads research for all U.S.-based brokerages on StockBrokers.com and is respected by executives as the leading expert covering the online broker industry. Blain’s insights have been featured in the New York Times, Wall Street Journal, Forbes, and the Chicago Tribune, among other media outlets.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}