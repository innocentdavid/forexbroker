
import React from 'react'
import disc from '../images/ig-group.jpg'
import bank from '../images/Saxo-Bank-Logo-70.png'
import IBR from '../images/IBKR Logo.png'


export default function Award() {
    return (
        <div className='w-full p-7'>

            <div className='md:max-w-[1000px]  w-full  md:mx-auto mt-7'>
                <h1 className='md:text-[35px] text-[25px] md:px-4 p-1'>2023 Annual Award Winners - Overall</h1>

                <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>Results for the iliveForex.com Annual Awards are independent and determined by our own research; Forex Broker Awards are based on best in class for each category considered important by new and existing traders within the sector.</p>

                <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>After compiling and quantifying the data across hundreds of variables, we are proud to announce the top three forex brokers of 2023:</p>

                <div>
                    <h3 className='text-[30px] font-semi-bold md:mt-6 mt-2 px-4'>Winner: FXTM</h3>
                    {/* <img src={disc} alt='IG-group' className='p-3 w-[180px] md:my-4 my-2' /> */}
                    <img src={`/images/broker_logos/fxtm-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>Regulated and trusted across the globe, FXTM offers traders zero spreads with their Advantage accounts, commission-free stock trading across a wealth of baskets and lightning-fast execution. Free indsutry leading education and expert analysis. This fantastic all-round experience makes FXTM the best overall broker in 2023.</p>
                    <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li><b>Trust:</b> Founded in 2011, FXTM is regulated by CySEC, FCA, FSCA and IFSC making it a safe broker (low-risk) for forex and CFDs trading. All countries considered, we ranked FXTM as the most trusted forex and CFDs broker for our 2023 Annual Awards.</li>

                        <li><b>Commissions:</b> FXTM uses its size to provide traders with consistent pricing across the board — regardless of the product you trade — and shines for its active trader pricing available through its Advantage accounts.</li>

                        <li><b>Forex trading platforms:</b> FXTM offers MetaTrader MT4 and MT5 plus mobile trading via its mobile trading app.</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <h3 className='md:text-[30px] text-[25px] font-semi-bold md:mt-6 mt-2 px-4'>Runner-Up: XM</h3>
                    {/* <img src={bank} alt='IG-group' className='p-3 w-[180px] md:my-4 my-2'/> */}
                    <img src={`/images/broker_logos/xm-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>XM offers tight spreads, fair pricing, $5 minimum deposit, MT4/ MT5 and webtrader trading platforms, webinars and tutorials.</p>
                    <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li><b>Trust:</b>  Founded in 2009, XM is licensed by ASIC, CySEC, IFSC, making it a safe broker (low-risk) for trading forex and CFDs.</li>

                        <li><b>Commissions:</b>XM provides traders with excellent all-around pricing. For active traders.</li>

                        <li><b>Forex trading platforms:</b> XM provides access to Forex and CFDs via Maetatrader MT4/ MT5 and webtrader.</li>
                    </ul>
                </div>

                <div className='mt-[70px]'>
                    <h3 className='md:text-[30px] text-[25px] font-semi-bold md:mt-6 mt-2 px-4'>Podium finisher: OctaFX</h3>
                    {/* <img src={IBR} alt='IG-group' className='p-3 w-[180px] md:my-4 my-2'/> */}
                    <img src={`/images/broker_logos/octafx-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>OctaFX is a trusted broker with an extensive offering of tradeable global markets. It delivers competitive fees and research and education.</p>
                    <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li><b>Trust:</b>  Founded in 2011, OctaFX is regulated by CySEC.</li>

                        <li><b>Commissions:</b>OctaFX offers commission free pricing, the minimum OctaFX fees for Forex traders start from 0.6 pips or $6.00 per 1.0 standard lot, but the average cost for major currency pairs is closer to 1.0 pips or $10.00</li>

                        <li><b>Forex trading platforms:</b> OctaFX offers Metatrader MT4/ MT5 and a mobile trading app, which provide access to advanced trading tools and global financial markets (including forex and CFDs).</li>
                    </ul>
                </div>

                <div className='md:max-w-[1000px] w-full md:mx-auto mt-7'>

                    <h1 className='md:text-[35px] text-[20px] font-semi-bold px-4'>Best Forex Trading Platforms</h1>

                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>We have conducted thorough testing of the best trading platforms offered by the top forex brokers in the industry. Based on brokers we have evaluated, we've selected our top picks for brokers that provide the best trading platform experience and listed them below:</p>

                    <ul className='list-disc md:text-[23px] text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>FXTM - </span>Best overall experience</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>XM -  </span>Most trusted, great for beginners</li>
                        <li className='p-1'><span className='text-blue-400 text-[23px]'>OctaFX -  </span>Best platform technology</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>Exness - </span>Best for customer support</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>HF Markets - </span> Best for automation</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>FXCM - </span> Great for tradingview integration</li>
                        <li className='p-1'><span className='text-blue-400 text-[23px]'> FOREX.com - </span> Award-winning performance analytics tools</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}