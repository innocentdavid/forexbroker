

import React from 'react'
import TableWithScroll from '../components/table'
import Big from '../images/cmc-markets.png'
import star from '../images/5.svg'
import disc from '../images/td-ameritrade.png'
import IKR from '../images/forex.com logo.jpg'



export default function Table() {
    return (
        <div className='mt-[60px] md:max-w-[1000px]  w-full  md:mx-auto '>
            <h1 className='md:text-[35px] mt-[50px] text-[25px] md:px-4 px-3 font-semi-bold'>iLiveforex.com 2023 Overall Ranking</h1>

            <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'>Now that you've seen our picks for the best forex brokers, check out the iLiveforex.com Overall Rankings. We've evaluated over 60 forex brokers, using a testing methodology that's based on 100+ data-driven variables and thousands of data points. Check out our full-length, in-depth <a href='/' className='text-blue-700'>forex broker reviews.</a></p>

            <div className='mt-[45px] max-w-[900px] '>

                <div className='gap-7 mt-[80px]'>

                    <TableWithScroll />


                </div>

            </div>

        </div>

    )

}
