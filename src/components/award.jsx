
import React from 'react'
import disc from '../images/ig-group.jpg'
import bank from '../images/Saxo-Bank-Logo-70.png'
import IBR from '../images/IBKR Logo.png'


export default function Award(){
    return(
        <div className='w-full p-7'>

            <div className='md:max-w-[1000px]  w-full  md:mx-auto mt-7'>
                <h1 className='md:text-[35px] text-[25px] md:px-4 p-1'>2023 Annual Award Winners - Overall</h1>

                <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>Results for the ForexBrokers.com Annual Awards are unbiased and determined by our own independent research; Broker Awards are bestowed based on demonstrated excellence in categories considered important to investors, traders, and consumers.</p>

                <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>After gathering and validating thousands of data points across 100+ important variables, poring over our collected quantitative data, and factoring in the qualitative observations and qualified opinions of our expert researchers, we are proud to announce the top three forex brokers of 2023:</p>

                <div>
                    <h3 className='text-[30px] font-semi-bold md:mt-6 mt-2 px-4'>Winner: IG</h3>
                    <img src={disc} alt='IG-group' className='p-3 w-[180px] md:my-4 my-2' ></img>
                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>Regulated and trusted across the globe, IG offers traders the ultimate package of excellent trading and research tools, industry-leading education, comprehensive market research, and an extensive list of tradeable products. This fantastic all-round experience makes IG the best overall broker in 2023.</p>
                    <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li><b>Trust:</b> Founded in 1974, IG is publicly traded (LON: IGG) and regulated in six tier-1 jurisdictions, making it a safe broker (low-risk) for forex and CFDs trading. All jurisdictions considered, we ranked IG as the most trusted forex and CFDs broker for our 2023 Annual Awards.</li>

                        <li><b>Commissions:</b> IG uses its size to provide traders with consistent pricing across the board — regardless of the product you trade — and shines for its active trader pricing available through its Forex Direct accounts.</li>

                        <li><b>Forex trading platforms:</b> While IG also offers MetaTrader and premium MT4 add-ons from FX Blue, only 76 tradeable instruments are available. There's no question; IG's flagship platform is the better choice between the two, and offers an extensive range of tradeable markets.</li>
                    </ul>
                </div>

                <div className='mt-4'> 
                    <h3 className='md:text-[30px] text-[25px] font-semi-bold md:mt-6 mt-2 px-4'>Runner-Up: Saxo Bank</h3>
                    <img src={bank} alt='IG-group' className='p-3 w-[180px] md:my-4 my-2'></img>
                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>For traders who can afford the steep $2,000 minimum deposit (GBP 500 for the U.K.), Saxo Bank offers fair pricing, excellent trading platforms, phenomenal research, reliable customer service, and over 60,000 instruments to trade.</p>
                    <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li><b>Trust:</b>  Founded in 1992, Saxo Bank operates multiple regulated banks and is licensed in six tier-1 jurisdictions, making it a safe broker (low-risk) for trading forex and CFDs.</li>

                        <li><b>Commissions:</b>Saxo Bank provides traders with excellent all-around pricing. For active traders (and those with large account balances), Saxo Bank offers competitive pricing in its Platinum and VIP accounts, which require a $200,000 and $1 million balance, respectively.</li>

                        <li><b>Forex trading platforms:</b> The entire Saxo Bank client experience is absolutely brilliant. Alongside access to 60,000 tradeable instruments, Saxo Bank's flagship SaxoTraderGo platform is terrific, and includes everything traders require to navigate the market. Saxo Bank also offers third-party platforms such as TradingView, the globally popular platform with advanced charting capabilities. Learn more by checking out our TradingView guide.</li>
                    </ul>
                </div>

                <div className='mt-[70px]'> 
                    <h3 className='md:text-[30px] text-[25px] font-semi-bold md:mt-6 mt-2 px-4'>Podium finisher: Interactive Brokers</h3>
                    <img src={IBR} alt='IG-group' className='p-3 w-[180px] md:my-4 my-2'></img>
                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>Interactive Brokers is a highly trusted multi-asset broker with an extensive offering of tradeable global markets. It delivers competitive fees and high-quality research and education, as well as a modern, institutional-grade trading platform suite.</p>
                    <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li><b>Trust:</b>  Founded in 1977, Interactive Brokers is publicly traded (NASDAQ: IBKR) and regulated in six Tier-1 jurisdictions. Interactive Brokers is well-capitalized with USD 373.8 billion of ending client equity and USD 10.01 billion of equity capital.</li>

                        <li><b>Commissions:</b>Interactive Brokers offers competitive pricing, aggregating prices from 17 of the world's largest interbank forex dealers. Instead of marking up spreads, Interactive Brokers charges a commission per trade, which ranges from $16 to $40 per million round turn ($8 to $20 per side).</li>

                        <li><b>Forex trading platforms:</b> Interactive Brokers stands out for its trading platforms, which include its flagship desktop software – Trader Workstation (TWS) – and mobile trading app – IBKR Mobile – both of which provide access to advanced trading tools and global financial markets (including forex and CFDs).</li>
                    </ul>
                </div>

                <div className='md:max-w-[1000px] w-full md:mx-auto mt-7'>

                    <h1 className='md:text-[35px] text-[20px] font-semi-bold px-4'>Best Forex Trading Platforms</h1>

                    <p className='md:text-[20px] text-[18px] md:px-4 px-1 md:my-4 my-2'>We've conducted thorough testing of the best trading platforms offered by dozens of the top forex brokers in the industry. Of the 60+ brokers that we've evaluated, we've selected our top picks for brokers that provide the best trading platform experience and listed them below (click on the broker's name if you want to read our full-length broker review):</p>

                    <ul className='list-disc md:text-[23px] text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>Saxo Bank - </span>Best VIP client experience</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>IG -  </span>Most trusted, great for beginners</li>
                        <li className='p-1'><span className='text-blue-400 text-[23px]'>CMC Markets -  </span>Best platform technology</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>Interactive Brokers -  </span>Best for professionals</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>TD Ameritrade FX - </span> Best desktop platform (U.S. only)</li>
                        <li className='md:p-1'><span className='text-blue-400 text-[23px]'>FXCM - </span> Great for algorithmic traders</li>
                        <li className='p-1'><span className='text-blue-400 text-[23px]'> FOREX.com - </span> Award-winning performance analytics tools</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}