

import React from 'react'
// import ReactPlayer from 'react-player';

export default function Method() {

    return (
        <div className='md:max-w-[1000px] w-full md:mx-auto mt-3'>

            <div className='mt-[40px] bg-[#f5fafc] shadow-lg md:p-[40px] p-3 border border-slate-600 md:text-[20px] text-[16px] max-w-[1000px] m-5 text-center rounded-[25px]'>
                <p className=''>Was this page helpful?</p>
                <p className='my-1 '><span><a href='/' className='text-blue-600'>Yes</a></span> or <span>
                    <a href='/' className='text-blue-600'>No</a></span></p>
            </div>
            <h1 className='md:text-[35px] mt-9  text-[25px] md:px-4 px-3 font-semi-bold'>Popular Forex Guides</h1>

            <ul className='list-disc text-[20px] md:mx-[60px] mx-[10px] md:px-4 px-2 my-4'>
                <li><a href='/' className='text-blue-800'>Best Forex Brokers</a></li>
                <li><a href='/' className='text-blue-800'>Best Forex Brokers for Beginners</a></li>
                <li><a href='/' className='text-blue-800'>Best Forex Brokers for Copy Trading</a></li>
                <li><a href='/' className='text-blue-800'>Best MetaTrader Brokers</a></li>
                <li><a href='/' className='text-blue-800'>Best Forex Trading Apps</a></li>
                <li><a href='/' className='text-blue-800'>Best Zero Spread Forex Brokers</a></li>
                <li><a href='/' className='text-blue-800'>Compare Forex Brokers</a></li>
            </ul>

            <h1 className='md:text-[35px] text-[25px] md:px-4 px-3 font-semi-bold'>Methodology</h1>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>At iLiveforex.com, our evaluations of online brokers and their products and services are based on our collected quantitative data as well as the qualitative observations and qualified opinions of our expert researchers. Each year we evaluate dozens of international regulator agencies <a href='/' className='text-blue-800' >(click here to learn about how we calculate Trust Score).</a> </p>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>Our research team, led by <a href='/' className='text-blue-800' >Norman West,</a> conducts thorough testing on a range of features, including each broker’s individual products, services, and tools. We test all available trading platforms for each broker – whether they are proprietary or come from third-party providers – and evaluate them based on a host of data-driven variables.</p>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>We also take an in-depth look at each broker’s commissions and fees, such as bid/ask spreads – including the average spread data for some of the most popular forex currency pairs. We research other trading costs, such as inactivity or custody fees, minimum deposit requirements, VIP rebates and/or discounts, and an exhaustive list of other important fee-based data points.</p>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>Some of the other important research categories that are factored into our testing include mobile trading accessibility and capability, availability of market research and educational content, and each broker’s overall  <a href='/' className='text-blue-800' >Trust Score.</a></p>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>All websites and web-based platforms are tested using the latest version of the Google Chrome browser. Our Desktop PCs run Windows 11, and we use MacBook Pro laptops running macOS 12.5 to test trading on the go.</p>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>We also test on mobile devices; for Apple, we test using the iPhone XS running iOS 15, and for Android we use the Samsung Galaxy S9+ and Samsung Galaxy S20 Ultra devices running Android OS 12.</p>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>Ultimately, our rigorous data validation process yields an error rate of less than .1% each year, providing site visitors with quality data they can trust. For a full explanation and accounting of our research and testing process, please <a href='/' className='text-blue-800' >click here to learn more about how we test.</a></p>

            {/* <div className='md:max-w-[1000px] border w-full relative md:mx-auto mt-3'>
                <ReactPlayer

                    url="https://youtu.be/IctdzK7OyXE'"
                    volume={0.8}
                    controls={true}
                    playing={true}
                    width="100%"

                />

            </div> */}

        </div>
    )
}