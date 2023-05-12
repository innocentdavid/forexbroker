


import React, { useState } from 'react';
import Big from '../images/City Index Logo_2022.png'
import star from '../images/5.svg'
import disc from '../images/xtb.png'
import IKR from '../images/etoro.png'



export default function Card3(){
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

    return(

      
        <div className='flex gap-7 mt-7 flex-col md:flex-row justify-between md:px-3'>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex  justify-between mt-4 mx-2 gap-3'>
                    <img src ={Big} className='md:w-[200px] w-[150px] p-2' alt='nextimg'/>
                    <div className='mt-2'>
                    <img src ={star} className='w-[100px] mx-5 my-2' alt='netimg'/>
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
                                <h3 className='mx-5 text-[15px]'>Excellent all-round offering</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>£100.00</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>	13500</span>
                                </div>

                            </div>
                        }
                        {activesTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'>Backed by StoneX Group, City Index is a trusted brand known for its versatile trading platforms, excellent mobile app, diverse market research, and extensive range of tradeable markets. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {activesTab === 'overlook' && 

                        <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc text-[14px]  mx-[20px] py-2'>
                                    <li>Excellent platforms and mobile app</li>
                                    <li>Extensive range of markets</li>
                                    <li>High-quality market research</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                    <li>Pricing is average for the industry</li>
                                    <li>Limited product range on MT4</li>
                                    
                                </ul>
                            </div>

                        </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src ={disc} className='md:w-[200px] w-[150px] p-2' alt='nextimg'/>
                    <div className='mt-2'>
                    <img src ={star} className='w-[100px] mx-5 my-2' alt='netimg'/>
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
                                <h3 className='mx-5 text-[15px]'>Great research and education</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$0</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>95</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>	12000</span>
                                </div>
                                <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                                <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>182 forex pairs from just 0.4 pips(64% of retail CFD accounts lose money)</p>

                            </div>
                        }
                        {nativeTab=== 'review' && <div className='py-2 px-5 mb-[200px] text-[12px] md:text-[18px] h-[200px]'>    
                            <p>As a trusted multi-asset broker, XTB offers outstanding customer service, a wide variety of forex and CFDs, and an excellent overall trading experience. Its xStation 5 trading platform is well-designed and packed with innovative features, and XTB’s offers comprehensive educational content and market research <a href='/' className='text-blue-500'>Read full review</a></p>
                            <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                            <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>182 forex pairs from just 0.4 pips(64% of retail CFD accounts lose money)</p>

                        </div>}
                        {nativeTab === 'overlook' && 

                        <div className='md:mb-[150px] mb-[220px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc  text-[14px] mx-[20px] py-2'>
                                    <li>xStation 5 platform is an industry standout</li>
                                    <li>Robust selection of trading tools</li>
                                    <li>Excellent customer service</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc  text-[14px] mx-[20px] py-2' >
                                    <li>Pricing is just average</li>
                                </ul>
                            </div>
                            <button className='text-[20px] p-2 mt-[20px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                            <p className='max-w-[250px] mx-[20px] md:p-3 md:mb-[30px] py-[10px] text-[10px]'>182 forex pairs from just 0.4 pips(64% of retail CFD accounts lose money)</p>

                        </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px]  shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src ={IKR} className='md:w-[200px] w-[150px] p-2' alt='nextimg'/>
                    <div className='mt-2'>
                        <img src ={star} className='w-[100px] mx-5 my-2' alt='netimg'/>
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
                                <h3 className='mx-5 text-[15px]'>Best for copy and crypto trading</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$10-$10,000</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>93</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>3458</span>
                                </div>

                            </div>
                        }
                        {nativedTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'> eToro is a winner for its easy-to-use copy-trading platform, where traders can copy the trades of experienced investors – or receive exclusive perks for sharing their own trading strategies. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {nativedTab === 'overlook' && 

                        <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                    <li>Large number of investors to copy</li>
                                    <li>Extensive range of markets to trade</li>
                                    <li>User-friendly platforms and app</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                    <li>No automated trading strategies</li>
                                    <li>Stops, limits mandatory on trades</li>
                                    <li>Research trails competitors</li>
                                    
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