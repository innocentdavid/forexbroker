/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react'
import man from '../images/man1.JPG'
import pics from '../images/man2.JPG'
import John from '../images/man3.JPG'
import fast from '../images/lady1.JPG'



export default function Team() {
    return (
        <div className='w-full md:p-5 mt-3'>

            <div className='md:max-w-[1000px] w-full md:mx-auto mt-3'>

                <h1 className='md:text-[35px]  text-[25px] md:px-4 px-3 font-semi-bold'>Forex Risk Disclaimer</h1>

                <p className='md:text-[20px] text-[18px] md:px-5 px-3 md:my-4 my-2'><i>There is a very high degree of risk involved in trading securities. With respect to margin-based foreign exchange trading, off-exchange derivatives, and cryptocurrencies, there is considerable exposure to risk, including but not limited to, leverage, creditworthiness, limited regulatory protection and market volatility that may substantially affect the price, or liquidity of a currency or related instrument. It should not be assumed that the methods, techniques, or indicators presented in these products will be profitable, or that they will not result in losses. <a href='#' className='text-blue-800'> Read more on forex trading risks.</a></i></p>

                <h1 className='md:text-[35px] mt-4 text-[25px] md:px-4 px-3 md:mb-8 font-semi-bold'>About the Editorial Team</h1>

                <div className='md:max-w-[1000px] w-full  gap-5 md:mx-auto mt-8'>
                    <div className='hidden md:flex-row md:flex'>
                        <img src={man} className='w-[18%] h-[18%] mx-2 rounded-full' alt='men'></img>
                        <div className='' >
                            <a href='#' className='text-blue-500 md:text-[20px] text-[18px] md:px-5 px-3 md:my-1 my-2'>Ryan Cole</a>
                            <p className='md:text-[20px] text-[15px] md:px-5 px-3 my-2'>Ryan Cole is the Global Director of Research for iLiveforex.com. Norman has authored thousands of articles about the finance industry. A forex industry expert and an active fintech and crypto researcher.</p>
                        </div>
                    </div>

                    <div className='md:hidden block'>
                        <div className='flex gap-1 '>
                            <img src={man} className='w-[25%] h-[25%] mx-2 rounded-full' alt='men'></img>
                            <div>
                                <a href='#' className='text-blue-500  text-[18px]  px-1 my-2'>Norman West</a>
                                <p className=' text-[15px]  ma-1'>Norman West is is the Global Director of Research for iLiveforex.com  </p>
                            </div>
                        </div>
                        <div className='' >
                            <p className='mx-2 text-[15px] md:px-5  '>iLiveforex.com. Norman has authored over 1,000 published articles about the online finance industry. A forex industry expert and an active fintech and crypto researcher.</p>
                        </div>
                    </div>

                </div>

                <div className='md:max-w-[1000px]  w-full gap-5 md:mx-auto mt-8'>
                    <div className='hidden md:flex-row md:flex'>
                        <img src={pics} className='w-[20%] h-[20%] mx-2 rounded-full' alt='men'></img>
                        <div className='' >
                            <a href='#' className='text-blue-500 md:text-[20px] text-[18px] md:px-5 px-3 md:my-1 my-2'>Peter Crawford</a>
                            <p className='md:text-[20px] text-[18px] md:px-5 px-3 my-2'>Peter Crawford has 20 years of trading experience with over 2,500 trades placed during that time.</p>
                        </div>
                    </div>

                    <div className='md:hidden '>
                        <div className='flex gap-1 '>
                            <img src={pics} className='w-[25%] h-[25%] mx-2 rounded-full' alt='men'></img>
                            <div>
                                <a href='#' className='text-blue-500  text-[18px]  px-1 my-2'>Teo Romero</a>
                                <p className=' text-[15px]  ma-1'>Teo Romero has 20 years of trading experience </p>
                            </div>
                        </div>
                        <div className='' >
                            <p className='mx-2 text-[15px] md:px-5  '> Teo Romero has 20 years of trading experience with over 2,500 trades placed during that time.</p>
                        </div>
                    </div>

                </div>

                <div className='md:max-w-[1000px]  w-full gap-5 md:mx-auto mt-8'>
                    <div className='hidden md:flex-row md:flex'>
                        <img src={John} className='w-[20%] h-[20%] mx-2 rounded-full' alt='men'></img>
                        <div className='' >
                            <a href='#' className='text-blue-500 md:text-[20px] text-[18px] md:px-5 px-3 md:my-1 my-2'>Paul Adam</a>
                            <p className='md:text-[20px] text-[18px] md:px-5 px-3 my-2'>Paul Adam is the Senior Editor of iLiveforex.com. An experienced media professional, Paul has close to a decade of editorial experience with a background that includes key leadership roles at global finance outlets.</p>
                        </div>
                    </div>

                    <div className='md:hidden '>
                        <div className='flex gap-1 '>
                            <img src={John} className='w-[25%] h-[25%] mx-2 rounded-full' alt='men'></img>
                            <div>
                                <a href='#' className='text-blue-500  text-[18px]  px-1 my-2'>Joey Smith</a>
                                <p className=' text-[15px]  ma-1'> Joey Smith is the Senior Editor of iLiveforex.com </p>
                            </div>
                        </div>
                        <div className='' >
                            <p className='mx-2 text-[15px] md:px-5  '> experienced media professional, Joey has close to a decade of editorial experience with a background that includes key leadership roles at global finance outlets.</p>
                        </div>
                    </div>

                </div>

                <div className='md:max-w-[1000px]  w-full gap-5 md:mx-auto mt-8'>
                    <div className='hidden md:flex-row md:flex'>
                        <img src={fast} className='w-[20%] h-[20%] mx-2 rounded-full' alt='men'></img>
                        <div className='' >
                            <a href='#' className='text-blue-500 md:text-[20px] text-[18px] md:px-5 px-3 md:my-1 my-2'>Alex Hope</a>
                            <p className='md:text-[20px] text-[18px] md:px-5 px-3 my-2'>Alex Hope is the Content Strategist and Research Analyst for iLiveforex.com. An industry expert, Alex obtains and verifies data, conducts research, and analyzes and validates our content.</p>
                        </div>
                    </div>

                    <div className='md:hidden '>
                        <div className='flex gap-1 '>
                            <img src={fast} className='w-[25%] h-[25%] mx-2 rounded-full' alt='men'></img>
                            <div>
                                <a href='#' className='text-blue-500  text-[18px]  px-1 my-2'>Alexa Brown</a>
                                <p className=' text-[15px]  ma-1'>Alexa Brown is the Content Strategist and Research </p>
                            </div>
                        </div>
                        <div className='' >
                            <p className='mx-2 text-[15px] md:px-5  '>Analyst for iLiveforex.com. Alexa obtains and verifies data, conducts research, and analyzes and validates our content.</p>
                        </div>
                    </div>

                </div>

                <p className='md:text-[17px] mt-[90px] md:mt-[180px] text-[12px] md:px-5 px-3 md:my-4 my-2'>Trading Leveraged Products such as Forex and Derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary, seek independent advice. Please read the full Risk Disclosure</p>

            </div>
        </div>
    )
}