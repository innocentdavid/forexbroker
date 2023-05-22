


import React, { useState } from 'react';
// import Big from '../images/City Index Logo_2022.png'
// import disc from '../images/xtb.png'
import star from '../images/5.svg'
import IKR from '../images/forex.com logo.jpg'
// import IKR from '../images/etoro.png'



export default function Card3() {
    const [activesTab, setActivesTab] = useState('summary');

    const handleTabClick = (tab) => {
        setActivesTab(tab);
    };
    const [nativeTab, setnativeTab] = useState('summary');

    const handleTabClicks = (tab) => {
        setnativeTab(tab);
    };

    const [nativedTab, setnativedTab] = useState('summary');

    const handleTabClicked = (tab) => {
        setnativedTab(tab);
    };

    return (


        <div className='flex gap-7 mt-7 flex-col md:flex-row justify-between md:px-3'>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex  justify-between mt-4 mx-2 gap-3'>
                    <img src={IKR} className='md:w-[200px] w-[150px] p-2' alt='nextimg' />
                    <div className='mt-2'>
                        <img src={star} className='w-[100px] mx-5 my-2' alt='netimg' />
                        <h4 className='text-center'>5.0 overall</h4>
                    </div>

                </div>

                <div>
                    <div className=" flex justify-between mx-3 border-b my-3 ">

                        <div
                            className={`tab ${activesTab === 'summary' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClick('summary')}
                        >
                            Summary
                        </div>

                        <div
                            className={`tab ${activesTab === 'review' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClick('review')}
                        >
                            Review
                        </div>

                        <div
                            className={`tab ${activesTab === 'overlook' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClick('overlook')}
                        >
                            Pros/Cons
                        </div>

                    </div>
                    <div className="tab-content">
                        {activesTab === 'summary' &&
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Award-winning performance analytics tools</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$100.00</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>	FCA, IIROC, ASIC, CFTC, CySEC, JFSA, MAS, CIMA</span>
                                </div>

                            </div>
                        }

                        {activesTab === 'review' && 

                            <div>

                            <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'>Forex.com was founded in 1999, the company onboards customers in over 180 countries. <a href='/' className='text-blue-500'>Read full review</a></p>
                            

                            </div>
                        }


                        {activesTab === 'overlook' &&

                            <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc text-[14px]  mx-[20px] py-2'>
                                        <li>Heavily regulated</li>
                                        <li>Recognised globally</li>
                                        <li>competitive trading conditions</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                        <li>No 24/7 customer support</li>
                                        <li>No multi currency accounts</li>

                                    </ul>
                                </div>

                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src={`/images/broker_logos/oanda-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <div className='mt-2'>
                        <img src={star} className='w-[100px] mx-5 my-2' alt='netimg' />
                        <h4 className='text-center'>5.0 overall</h4>
                    </div>

                </div>

                <div>
                    <div className=" flex justify-between mx-3 border-b my-3 ">

                        <div
                            className={`tab ${nativeTab === 'summary' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClicks('summary')}
                        >
                            Summary
                        </div>

                        <div
                            className={`tab ${nativeTab === 'review' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClicks('review')}
                        >
                            Review
                        </div>

                        <div
                            className={`tab ${nativeTab === 'overlook' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClicks('overlook')}
                        >
                            Pros/Cons
                        </div>

                    </div>

                    <div className="tab-content">

                        {nativeTab === 'summary' &&
                            <div className='px-4 py-2 mb-[150px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Trusted brand, strong reputation</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$0</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>95</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>	FSC, FCA, BVI, ASIC, IIROC</span>
                                </div>
                                

                            </div>
                        }
                        {nativeTab === 'review' && <div className='py-2 px-5 mb-[200px] text-[12px] md:text-[18px] h-[200px]'>
                            <p>Oanda is a US forex broker with a user-friendly and quick account opening process. It offers high-quality, easy-to-use trading platforms and powerful research tools, including technical indicators and a great API.  <a href='/' className='text-blue-500'>Read full review</a></p>
                            <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                            <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>no minimum deposit(64% of retail CFD accounts lose money)</p>

                        </div>}
                        {nativeTab === 'overlook' &&

                            <div className='md:mb-[150px] mb-[220px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc  text-[14px] mx-[20px] py-2'>
                                        <li>Founded 1996</li>
                                        <li>Spreads from 1.0 Pips</li>
                                        <li>No inactivity fee</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc  text-[14px] mx-[20px] py-2' >
                                        <li>No social trading tools</li>
                                    </ul>
                                </div>

                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px]  shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src={`/images/broker_logos/fbs.svg`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <div className='mt-2'>
                        <img src={star} className='w-[100px] mx-5 my-2' alt='netimg' />
                        <h4 className='text-center'>5.0 overall</h4>
                    </div>
                </div>

                <div>

                    <div className=" flex justify-between mx-3 border-b my-3 ">

                        <div
                            className={`tab ${nativedTab === 'summary' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClicked('summary')}
                        >
                            Summary
                        </div>

                        <div
                            className={`tab ${nativedTab === 'review' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClicked('review')}
                        >
                            Review
                        </div>

                        <div
                            className={`tab ${nativedTab === 'overlook' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                            onClick={() => handleTabClicked('overlook')}
                        >
                            Prons/Cons
                        </div>

                    </div>

                    <div className="tab-content">

                        {nativedTab === 'summary' &&
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Best for fast account opening</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$10</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>93</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>CySEC, IFSC</span>
                                </div>
                            </div>
                        }

                        {nativedTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'> The brand FBS has established itself in global markets and conditions with inclusive education giving traders of all levels around the world access to the markets. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {nativedTab === 'overlook' &&

                            <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                        <li>Low Fees</li>
                                        <li>No inactivity fee</li>
                                        <li>Excellent customer service</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                        <li>Limited product portfolio</li>
                                        <li>No investor protection for non-EU clients</li>

                                    </ul>
                                </div>

                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}