

import React from 'react'
import man from '../images/man2.JPG'
import pics from '../images/fxtm_large.jfif'

export default function First() {

    return (
        <div className='lg:max-w-[1000px] md:w-full md:mx-[12px] lg:mx-[160px]'>
            <h1 className='md:text-[45px] text-[33px] md:px-0 px-3 leading-[40px] font-semi-bold'>Best Forex Brokers for 2023</h1>

            <div className='flex flex-col md:flex-row gap-4'>

                <div className='flex flex-col md:flex-row mt-5 md:mt-0 justify-between gap-7  w-full' >

                    <div className='flex justify-between md:gap-3 md:my-3 gap-1'>
                        <img className='w-[70px] h-[70px] rounded-[50%] m-3' src={man} alt='man' />
                        <div className='my-3'>
                            <h3 className='md:text-[14px] text-[13px] '>Written by <a href='/' className='text-blue'>Norman West, Ryan Cole</a> </h3>
                            <h3 className='md:text-[14px] text-[13px]'> <a href='/' className='text-blue '>Edited by Peter Crawford</a></h3>
                            <h3 className='md:text-[14px] text-[13px]'> <a href='/' className='text-blue'>Fact-checked by Teo Romero</a></h3>
                        </div>
                    </div>

                    <div className=' md:float-right md:mx-5 mx-3 flex md:justify-center items-center'>
                        <h3 className='flex justify-end'>May 18, 2023</h3>
                    </div>
                </div>

            </div>

            <div className='flex justify-between flex-col md:flex-row gap-1'>

                <div>
                    <div className='p-3'>
                        <p className='bg-[#f5fafc] shadow-lg md:p-5 p-3 border border-slate-600 md:text-[20px] text-[16px] max-w-[550px] m-5 rounded-lg'>iliveForex.com has been reviewing online forex brokers for a number of years, and our reviews are the <a href='/' className='text-decoration-underline'>most referenced </a> in the industry. Each month, we collate multiple points of data to identify who we think are the best forex brokers in the industry. <a href='/' className='text-decoration-underline'> </a></p>
                    </div>
                    <p className=' md:text-[18px] text-[15px] max-w-[580px] mx-7 '>Are you looking to speculate that the British pound (GBP) currency will go up in value against the U.S. Dollar (USD)? To do so, you would trade (or place a spread bet on) the GBP/USD currency pair, which is a forex trade. The forex market is the largest and most liquid market in the world, representing the major and exotic global currency pairs with trading conducted 24 hours a day, five days a week.</p>

                </div>

                <div>
                    <div className='md:p-3'>
                        <a href="https://ad.doubleclick.net/ddm/clk/529691043;337617746;s">
                            <img src={pics} alt='fast' className='p-1 my-3' />
                        </a>
                    </div>
                    <p className=' text-[10px] px-2 md:px-4  max-w-[300px] md:mx-7 mx-3 '>Trading CFDs is a high risk activity and you may lose more than your initial deposit. You should never invest money that you cannot afford to lose. iliveForex.com will not accept any liability for loss or damage as a result of reliance on the information contained within this website.</p>

                </div>

            </div>

            <p className=' md:text-[20px] text=[16px]  md:px-4 px-3 max-w-[7000px] py-2 mx-2'>To trade forex, you need a reputable online broker. Trading with a trusted forex broker is a crucial factor for success in international currency markets. As a contract for difference (CFD) trader or forex investor, you may have specific needs related to which platform, trading tools, or research requirements you have. Understanding more about your investment style needs can help determine which forex broker will be best for you.</p>

            <p className=' md:text-[20px] text=[16px]  md:px-4 px-3 max-w-[7000px] py-2 mx-2'>Each year, at iliveForex.com we test the major global brokers and the largest names in the industry to create a helpful guide to the best forex brokers for forex and CFDs trading. Here are our findings for 2023.</p>

            <p className=' text-[14px] px-2 md:px-4  max-w-[7000px] text-italics py-2 mx-2'>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Between 65% and 82% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>

            <h1 className='md:text-[40px] text-[30px] md:mx-5 mx-2 md:px-0 px-3 py-4 font-semi-bold'>Best Forex Brokers for 2023</h1>

            <div className=' md:p-6 p-3'>
                <ul className='md:text-[22px] text-[17px] list-disc px-7'>
                    <li><a target="_blank" href='https://ad.doubleclick.net/ddm/clk/520672600;328393005;w' className='' rel="noreferrer">FXTM</a> - Best overall experience</li>
                    <li><a href="https://clicks.pipaffiliates.com/c?c=632795&1=en&p=1" className="">XM</a> - Most trusted, great for beginners</li>
                    <li>OctaFX - Best platform technology</li>
                    <li>Exness - Best for customer support</li>
                    <li>HF Markets - Best for automation</li>
                    <li>FXCM - Great for tradingview integration</li>
                    <li>FOREX.com - Award-winning performance analytics tools</li>
                    <li>eToro - Best for copy and crypto trading</li>
                </ul>
            </div>

        </div>
    )
}