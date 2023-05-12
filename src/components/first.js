

import React from 'react'
import man from '../images/steven headshot.jpg'
import pics from '../images/download.png'

export default function First(){

    return (
        <div className='max-w-[1000px] md:mx-[160px]'>
            <h1 className='md:text-[45px] text-[33px] md:px-0 px-3 leading-[40px] font-semi-bold'>Best Forex Brokers for 2023</h1>

            <div className='flex flex-col md:flex-row gap-4'>

                <div className='flex flex-col md:flex-row mt-5 md:mt-0 justify-between gap-7  w-full' >

                    <div className='flex justify-between md:gap-3 md:my-3 gap-1'>
                        <img className='w-[70px] h-[70px] rounded-[50%] m-3' src={man} alt='pics'/>
                        <div className='my-3'>
                            <h3 className='md:text-[14px] text-[13px] '>Written by <a href='/' className='text-blue'>Steven Hatzakis, Blain Reinkensmeyer</a> </h3>
                            <h3 className='md:text-[14px] text-[13px]'> <a href='/' className='text-blue '>Edited by John Bringans</a></h3>
                            <h3 className='md:text-[14px] text-[13px]'> <a href='/' className='text-blue'>Fact-checked by Joey Shadeck</a></h3>
                        </div>
                    </div>

                    <div className=' md:float-right md:mx-5 mx-3 flex md:justify-center items-center'>
                    <h3 className='flex justify-end'>April 13, 2023</h3>
                    </div>
                </div>

            </div>

            <div className='flex justify-between flex-col md:flex-row gap-1'>

                <div>
                    <div className='p-3'>
                        <p className='bg-[#f5fafc] shadow-lg md:p-5 p-3 border border-slate-600 md:text-[20px] text-[16px] max-w-[550px] m-5 rounded-lg'>ForexBrokers.com has been reviewing online forex brokers for over six years, and our reviews are the <a href='/' className='text-decoration-underline'>most cited</a> in the industry. Each year, we collect thousands of data points and publish tens of thousands of words of research. <a href='/' className='text-decoration-underline'>Here's how we test.</a></p>
                    </div>
                    <p className=' md:text-[18px] text-[15px] max-w-[580px] mx-7 '>Are you looking to speculate that the Euro (EUR) currency will go up in value against the U.S. Dollar (USD)? To do so, you would trade (or place a spread bet on) the EUR/USD currency pair, which is a forex investment. The forex market is the largest and most liquid market in the world, representing every global currency with trading conducted 24 hours a day, five days a week.</p>

                </div>

                <div>
                    <div className='md:p-3'>
                     <img src={pics} alt='fast' className='p-1 my-3'/>
                    </div>
                    <p className=' text-[10px] px-2 md:px-4  max-w-[300px] md:mx-7 mx-3 '>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 81% of retail CFD accounts lose money. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>

                </div>

            </div>

            <p className=' md:text-[20px] text=[16px]  md:px-4 px-3 max-w-[7000px] py-2 mx-2'>To trade forex, you need a reputable online broker. Trading with a trusted forex broker is a crucial factor for success in international currency markets. As a contract for difference (CFD) trader or forex investor, you may have specific needs related to which platform, trading tools, or research requirements you have. Understanding more about your investment style needs can help determine which forex broker will be best for you.</p>

            <p className=' md:text-[20px] text=[16px]  md:px-4 px-3 max-w-[7000px] py-2 mx-2'>Each year, our team here at ForexBrokers.com tests the biggest names in foreign exchange and assembles a guide to the best forex brokers for forex and CFDs trading. Here are our findings for 2023.</p>

            <p className=' text-[14px] px-2 md:px-4  max-w-[7000px] text-italics py-2 mx-2'>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Between 65% and 82% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>

            <h1 className='md:text-[40px] text-[30px] md:mx-5 mx-2 md:px-0 px-3 py-4 font-semi-bold'>Best Forex Brokers for 2023</h1>

            <div className=' md:p-6 p-3'>
                <ul className='md:text-[22px] text-[17px] list-disc px-7'>
                    <li>IG - Best overall broker, most trusted</li>
                    <li>Saxo Bank - Best web-based trading platform</li>
                    <li>Interactive Brokers - Great overall, best for professionals</li>
                    <li>CMC Markets - Excellent overall, best platform technology</li>
                    <li>TD Ameritrade - Best desktop platform, U.S. only</li>
                    <li>FOREX.com - Excellent all-round offering</li>
                    <li>XTB - Great research and education</li>
                    <li>eToro - Best for copy and crypto trading</li>
                </ul>
            </div>

        </div>
    )
}