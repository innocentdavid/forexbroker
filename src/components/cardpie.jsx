
import React, { useState } from 'react';
import Big from '../images/ig-group.jpg'
import star from '../images/5.svg'
import disc from '../images/Logo Forex Brokers_204x70.png'
import IKR from '../images/IBKR Logo.png'



export default function Card1() {
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


        <div className='flex gap-7 flex-col md:flex-row justify-between md:px-3'>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex  justify-between mt-4 mx-2 gap-3'>
                    <a href='https://ad.doubleclick.net/ddm/clk/520672600:328393005:w' className=''>
                        <img src={`/images/broker_logos/fxtm-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    </a>
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
                            Prons/Cons
                        </div>

                    </div>
                    <div className="tab-content">
                        {activesTab === 'summary' &&
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Best overall experience</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$10.00</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>CySEC, FCA, FSCA, IFSC</span>
                                </div>

                                <a href='https://ad.doubleclick.net/ddm/clk/520672600:328393005:w' className=''>
                                    <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site</button>
                                </a>
                                <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>no minimum deposit(64% of retail CFD accounts lose money)</p>
                            </div>
                        }
                        {activesTab === 'review' &&

                            <div>
                                <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'>FXTM offers is regulated and trusted across the globe, zero spreads with their Advantage accounts, commission-free stock trading across a wealth of baskets and lightning-fast execution. Free indsutry leading education and expert analysis. <a href='/' className='text-blue-500'>Read full review</a></p>
                                <a href='https://ad.doubleclick.net/ddm/clk/520672600:328393005:w' className='text-[20px] p-2 mt-[20px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </a>
                                <p className='max-w-[250px] mx-[20px] md:p-3 md:mb-[30px] py-[10px] text-[10px]'>no minimum deposit(64% of retail CFD accounts lose money)</p>
                            </div>

                        }

                        {activesTab === 'overlook' &&

                            <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc mx-[20px] py-2'>
                                        <li>Founded 2011</li>
                                        <li>Regulation CySEC, FCA, FSCA, IFSC</li>
                                        <li>Spreads from 0.1 Pips</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc mx-[20px] py-2' >
                                        <li>Inactivity and withdrawal fees</li>
                                        <li>Average CFD fees</li>

                                    </ul>

                                    <a href='https://ad.doubleclick.net/ddm/clk/520672600:328393005:w' className='text-[20px] p-2 mt-[20px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </a>
                                    <p className='max-w-[250px] mx-[20px] md:p-3 md:mb-[30px] py-[10px] text-[10px]'>no minimum deposit(64% of retail CFD accounts lose money)</p>


                                </div>

                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <a href="https://clicks.pipaffiliates.com/c?c=632795&1=en&p=1" className="">
                        <img src={`/images/broker_logos/xm-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    </a>
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
                            Prons/Cons
                        </div>

                    </div>

                    <div className="tab-content">
                        {nativeTab === 'summary' &&
                            <div className='px-4 py-2 mb-[150px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Most trusted, great for beginners</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$5</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>	ASIC, CySEC, IFSC</span>
                                </div>


                                <a href='https://clicks.pipaffiliates.com/c?c=632795&1=en&p=1' className=''>
                                    <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site</button>
                                </a>
                                <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>Deposit bonus (74.89% of retail CFD accounts lose money)</p>

                            </div>
                        }
                        {nativeTab === 'review' &&

                            <div className='p-4 mb-[150px] text-[16px] md:text-[18px] h-[200px]'>
                                <p>XM offers tight spreads, fair pricing, $5 minimum deposit, MT4/ MT5 and webtrader trading platforms, webinars and tutorials. <a href='/' className='text-blue-500'>Read full review</a></p>
                                <a href='https://clicks.pipaffiliates.com/c?c=632795&1=en&p=1' className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </a>
                                <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>Deposit bonus (74.89% of retail CFD accounts lose money)</p>

                            </div>}

                        {nativeTab === 'overlook' &&

                            <div className='mb-[150px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc mx-[20px] py-2'>
                                        <li>Low stock CFD and withdrawal fees</li>
                                        <li>Easy and fast account opening</li>
                                        <li>Great educational tools</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc mx-[20px] py-2' >
                                        <li>Limited product portfolio</li>
                                        <li>No investor protection for non-EU clients</li>
                                    </ul>
                                </div>
                                <a href='https://clicks.pipaffiliates.com/c?c=632795&1=en&p=1' className='text-[20px] p-2 mt-[20px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </a>
                                <p className='max-w-[250px] mx-[20px] md:p-3 md:mb-[30px] py-[10px] text-[10px]'>Deposit bonus (74.89% of retail CFD accounts lose money)</p>

                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src={`/images/broker_logos/octafx-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
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
                                <h3 className='mx-5 text-[15px]'>OctaFX is a trusted broker.</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$25</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>CySEC, FSCA</span>
                                </div>

                            </div>
                        }
                        {nativedTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'> Minimum Deposit $25. OctaFX is a trusted broker with an extensive offering of tradeable global markets. It delivers competitive fees and research and education. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {nativedTab === 'overlook' &&

                            <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc mx-[20px] py-2'>
                                        <li>Easy account setup and low minimum deposit</li>
                                        <li>Scalping, hedging and EAs allowed</li>
                                        <li>No registration fees or commissions</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc mx-[20px] py-2' >
                                        <li>Not available to US customers</li>

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