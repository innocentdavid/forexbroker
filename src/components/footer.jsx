

import React from 'react'
import fast from '../images/forexbrokers.svg'
import insta from '../images/instagram-.png'
import facebook from '../images/facebook-.png'
import linkedin from '../images/linkedin-.png'
import reddit from '../images/reddit-.png'
import twitter from '../images/twitter-.png'
import tiktok from '../images/tik-tok-.png'
import youtube from '../images/youtube-.png'
import logo1 from '../images/certified_b_corporation.png'
import logo2 from '../images/Logo-BBB.png'


export default function Footer (){

    return (
        <div>



            <div className='w-full bg-[#231f20] md:p-5 md:overflow-auto overflow-hidden mt-3'>

                <div className='md:max-w-[1200px] w-full mx-4 md:mx-auto mt-3'>

                  <div className='flex md:flex-row flex-col justify-between w-full'>

                    <div className='p-4'>
                            <img src={'./images/forexbrokers.svg'} className='md:w-[90%] w-[50%]' alt='mmmee' ></img>
                    </div>

                    <div className='w-full'>
                        <ul className='text-white text-[17px] flex-col md:flex-row justify-center my-5 flex gap-7'>
                            <li>ABOUT</li>
                            <li>WHY TRUST US</li>
                            <li>HOW WE TEST</li>
                            <li>CONTACT</li>
                        </ul>

                    </div>

                  </div>
                  
                  <div className='flex gap-3 md:gap-6 my-3 px-3 py-8 border-t border-slate-500 w-[80%] md:max-w-[25%]'>
                    <img src={linkedin}  className='w-[30px]' alt='insta'></img>
                    <img src={twitter} className='w-[30px]'  alt='insta'></img>
                    <img src={facebook} className='w-[30px]'  alt='facebook'></img>
                    <img src={insta}  className='w-[30px]' alt='insta'></img>
                    <img src={reddit}  className='w-[30px]' alt='insta'></img>
                    <img src={youtube} className='w-[30px]'  alt='insta'></img>
                    <img src={tiktok} className='w-[30px]'  alt='insta'></img>

                  </div>

                  <p className='md:text-[15px] text-white text-[12px] md:px-5  md:my-4 my-2'>© 2023 Reink Media Group LLC. All rights reserved. Terms of Use | Disclaimers | Privacy Policy</p>

                  <p className='md:text-[15px] text-white text-[12px] md:px-5 md:my-4 my-2'>Advertiser Disclosure: ForexBrokers.com helps investors across the globe by spending over 1,000 hours each year testing and researching online brokers. How do we make money? Our partners compensate us through paid advertising. While partners may pay to provide offers or be featured, e.g. exclusive offers, they cannot pay to alter our recommendations, advice, ratings, or any other content throughout the site. Furthermore, our content and research teams do not participate in any advertising planning nor are they permitted access to advertising campaign data. Here's how we make money:.</p>

                  <p className='md:text-[15px]  text-white text-[12px] md:px-5 md:my-4 my-2'>Disclaimer: It is our organization's primary mission to provide reviews, commentary, and analysis that are unbiased and objective. While ForexBrokers.com has some data verified by industry participants, it can vary from time to time. Operating as an online business, this site may be compensated through third party advertisers. Our receipt of such compensation shall not be construed as an endorsement or recommendation by ForexBrokers.com, nor shall it bias our reviews, analysis, and opinions. Please see our General Disclaimers for more information.</p>

                  <div className='flex gap-6 px-3 md:my-[50px] my-[30px]'>
                        <img src={logo1} className='md:w-[60px] w-[50px]' alt='meeww' ></img>
                        <img src={logo2} className='md:w-[60px] w-[50px]' alt='meeww' ></img>
                  </div>

                  <p className='md:text-[15px] text-white text-[12px] md:px-5  md:my-4 my-2'>© 2023 Reink Media Group LLC. All Rights Reserved.</p>



                </div>
            </div>
        </div>
    )
}
