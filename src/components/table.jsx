

import React, { useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import forex from '../images/forex.com logo.jpg'
import five from '../images/5.svg'
import four from '../images/4.svg'

export default function Showtable() {
    const data = [
        {
            id: 1,
            image: './images/broker_logos/fxtm-review.png',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: 'https://ad.doubleclick.net/ddm/clk/520672600;328393005;w',
        },
        {
            id: 2,
            image: './images/broker_logos/xm-review.png',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: 'https://clicks.pipaffiliates.com/c?c=632795&1=en&p=1',
        },
        {
            id: 3,
            image: './images/broker_logos/octafx-review.png',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
        {
            id: 4,
            image: './images/broker_logos/exness-review.png',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
        {
            id: 5,
            image: './images/broker_logos/hfm_logo.png',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
        {
            id: 6,
            image: './images/broker_logos/fxcm_logo.svg',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
        {
            id: 7,
            image: forex,
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
        {
            id: 8,
            image: './images/broker_logos/oanda-review.png',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
        {
            id: 9,
            image: './images/broker_logos/fbs.svg',
            star: {
                or: five,
                ooi: five,
                cf: four,
                pt: five,
                r: five,
                e: five,
                mt: five,
            },
            ts: 99,
            link: '',
        },
    ]


    const tableRef = useRef(null);

    const scrollTable = (scrollOffset) => {
        const table = tableRef.current;
        table.scrollLeft += scrollOffset;
    };

    return (
        <div className='md:max-w-[1000px] w-full md:mx-auto mt-3'>

            <div className="flex gap-6 justify-end my-2">
                <button onClick={() => scrollTable(-100)} className='w-[40px]  flex justify-center items-center h-[40px] border rounded-full bg-slate-700 text-white' ><FaChevronLeft /></button>

                <button onClick={() => scrollTable(100)} className='w-[40px] flex justify-center items-center  h-[40px] border rounded-full bg-slate-700 text-white' ><FaChevronRight /></button>
            </div>

            <div className='flex pb-4 border border-slate-300'>

                <div className='flex gap-[30px] mt-[120px] flex-col border-r px-4 border-slate-800 '>
                    {data.map(broker => {
                        return (
                            <a href={broker.link ?? '#'} key={`logo_${data.id}`}>
                                <img src={broker.image} alt='' className='h-[80px] w-fit mx-auto rounded-[15px]' />
                            </a>
                        )
                    })}

                </div>

                <div className='max-w-[850px] overflow-hidden' ref={tableRef} >

                    <table className='mt-[25px] border-slate-700'>
                        <div className="px-4">
                            <div className='border-b  border-slate-700'>
                                <div className='mt-[20px] flex items-center gap-4'>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Overall Rating
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Offering of Investments
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Commissions & Fees
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Platform & Tools
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Research
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Education
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Mobile trading
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Trust Score
                                    </div>
                                    <div className='w-[150px] h-[80] text-[16px] text-center font-bold'>
                                        Visit Site
                                    </div>
                                </div>
                            </div>

                            <div className='mt-[26px] flex flex-col justify-center gap-[30px]'>
                                {data.map(broker => {
                                    return (
                                        <div key={`table_${data.id}`} className='flex items-center gap-4'>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.or} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.ooi} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.cf} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.pt} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.r} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.e} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px]'>
                                                <img alt="IG logo" loading="lazy" src={broker.star.mt} title="IG logo" className='w-[100px] h-[80px] mx-auto' />

                                            </div>
                                            <div className='w-[150px] text-center'>
                                                <span className='w-[100px] h-[80px]'>
                                                    {broker.ts}
                                                </span>
                                            </div>
                                            <div className='w-[150px] text-center'>
                                                <a href={broker.link ?? ''} className='w-[100px] h-[80px]'>Vist site</a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </table>

                </div>

            </div>

        </div>
    );
}