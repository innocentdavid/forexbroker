
import React from 'react'
import {useState} from 'react'
import { FaChevronRight ,FaAlignJustify ,FaTimes } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./langprov";
import i18next from 'i18next';
export default function Header () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const { language } = useLanguage();

    const { t } = useTranslation();
    // console.log("t function:", t);

    return (

        <div className='relative'>
            <div className='flex lg:gap-6 gap-3  relative justify-between  w-full bg-[#133d54] p-2 md:p-3'>

                {/* <img src={'./images/forexbrokers.svg.........'} className='w-[50%] md:w-[20%] mx-3' alt='mmmee' /> */}
                <img src={'./logo.png'} className='w-[50%] md:w-[20%] mx-3' alt='mmmee' />
                

                <div className='md:hidden overflow-hidden  w-[70%] '>
                    
                    <div className='w-full overflow-hidden  '>
                        
                        <FaAlignJustify onClick={toggleMenu} className='text-white text-[30px] float-right m-2' />
                        {isOpen && (
                            <div className='absolute top-0 left-0 bg-white w-[100%] h-[100vh] '>
                                <FaTimes onClick={toggleMenu} className='text-black absolute right-0  text-[30px]  m-2' />
                                    <div className=' mt-8 px-4 '>
                                        <LanguageSelector />
                                    </div>
                                <ul classNam='bg-slate-500 border border-black mt-[200px] py-7 w-[100%] h-[100%] border '>
                                    <li className='text-[16px] mt-[60px] p-4 '><a href='/'>{i18next.t("Guides")}</a></li>
                                    <li className='text-[16px] p-4 '><a href='/'>{i18next.t("Reviews")}</a></li>
                                    <li className='text-[16px] p-4 '><a href='/'>{i18next.t("Compare")}</a></li>
                                    <li className='text-[16px] p-4 '><a href='/'>{i18next.t("Countries")}</a></li>
                                    <li className='text-[16px] p-4 '><a href='/'>{i18next.t("Resources")}</a></li>
                                </ul>
                                
                            </div>
                        )}
                    </div>

                </div>

                <div className='hidden md:flex'>
                    
                    <div className='max-w-[600px] flex gap-2 items-center justify-center mx-auto '>
                        <LanguageSelector />
                        <ul className='flex  gap-7  text-white mr-[20px] text-[18px] items-center p-3 my-auto max-w-[600px] '>
                            <li><a href='/'>{i18next.t("Guides")}</a></li>
                            <li><a href='/'> {i18next.t("Reviews")}</a></li>
                            <li><a href='/'>{i18next.t("Compare")}</a></li>
                            <li><a href='/'>{i18next.t("Countries")}</a></li>
                            <li><a href='/'>{i18next.t("Resources")}</a></li>
                        </ul>
                    </div>
                </div>



            </div>
            <h2 className='md:mx-[150px] mx-2 md:text-[14px] text-[12px] md:p-3 p-2' >{t("iliveForex.com is committed to making independent forex broker reviews, which are carried out to the highest standards.")}</h2>

            <div className='max-w-[500px] md:gap-1  md:mx-[20px] xl:mx-[160px] md:py-1 py-1 flex'>
                <div className='flex flex-row '>
                    <a href='/' className='  text-blue-400 text-md p-2 md:text-[20px] font-bold '>{i18next.t("Home")}<FaChevronRight className='float-right flex  mt-1 md:mt-2 mx-2' /> </a>
                </div>
                <a href='/' className=' text-blue-400 text-md py-2 md:text-[20px] font-bold '>{i18next.t("Forex Guides Directory")}  </a>

            </div>

        </div>
    )
}