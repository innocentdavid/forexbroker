
import React, { useState } from 'react';
import Big from '../images/ig-group.jpg'
import star from '../images/5.svg'
import disc from '../images/Logo Forex Brokers_204x70.png'
import IKR from '../images/IBKR Logo.png'



export default function Card1(){
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

      
        <div className='flex gap-7 flex-col md:flex-row justify-between md:px-3'>

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
                                <h3 className='mx-5 text-[15px]'>Best overall broker, most trusted</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>£250.00</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>19537</span>
                                </div>

                            </div>
                        }
                        {activesTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'>IG offers the ultimate comprehensive trading package, featuring excellent trading and research tools, industry-leading education, and an extensive range of tradeable markets. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {activesTab === 'overlook' && 

                        <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc mx-[20px] py-2'>
                                    <li>Outstanding platforms and tools</li>
                                    <li>Over 19,000 tradeable instruments</li>
                                    <li>Competitive pricing</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc mx-[20px] py-2' >
                                    <li>No predefined layouts on the flagship web platform</li>
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
                                <h3 className='mx-5 text-[15px]'>Best web-based trading platform</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>£2,000</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>	60000</span>
                                </div>
                                <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                                <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>182 forex pairs from just 0.4 pips(64% of retail CFD accounts lose money)</p>

                            </div>
                        }
                        {nativeTab=== 'review' && <div className='p-4 mb-[150px] text-[16px] md:text-[18px] h-[200px]'>    
                            <p>Saxo Bank is an exclusive multi-asset broker with brilliant research and a superb trading platform experience – as well as a stunning selection of over 40,000 securities <a href='/' className='text-blue-500'>Read full review</a></p>
                            <button className='text-[20px] p-2 mt-[40px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                            <p className='max-w-[250px] mx-[20px] p-3 text-[10px]'>182 forex pairs from just 0.4 pips(64% of retail CFD accounts lose money)</p>

                        </div>}
                        {nativeTab === 'overlook' && 

                        <div className='mb-[150px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc mx-[20px] py-2'>
                                    <li>Flagship platform is top of the line</li>
                                    <li>Over 40,000 tradeable instruments</li>
                                    <li>Excellent customer service</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc mx-[20px] py-2' >
                                    <li>High minimum deposit</li>
                                </ul>
                            </div>
                            <button className='text-[20px] p-2 mt-[20px] w-[80%] mx-8 rounded-lg bg-gray-300'>Visit Site </button>
                            <p className='max-w-[250px] mx-[20px] md:p-3 md:mb-[30px] py-[10px] text-[10px]'>182 forex pairs from just 0.4 pips(64% of retail CFD accounts lose money)</p>

                        </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

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
                                <h3 className='mx-5 text-[15px]'>Great overall, best for professionals</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$0</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>8500</span>
                                </div>

                            </div>
                        }
                        {nativedTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'> Minimum Deposit	$0 Trust Score	99 Tradeable Symbols (Total)	8500
                                Interactive Brokers is a highly trusted multi-asset broker with an extensive offering of tradeable global markets. It delivers competitive fees and high-quality research and education, as well as a modern, institutional-grade trading platform suite. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {nativedTab === 'overlook' && 

                        <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc mx-[20px] py-2'>
                                    <li>Robust platform for professional traders</li>
                                    <li>Wide range of global markets</li>
                                    <li>Thorough research offering</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc mx-[20px] py-2' >
                                    <li>Trader Workstation platform is likely too complicated for inexperienced traders</li>
                                    
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