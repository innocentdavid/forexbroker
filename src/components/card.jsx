

import React from 'react';
import Card1 from '../components/cardpie'
import Card2 from '../components/cardpies'
import Card3 from '../components/cardiess'




export default function Card() {

    return (

        <div className='w-full bg-[#f5fafc] md:p-7 p-2'>

            <div className='  max-w-[1200px] mx-auto'>

                <Card1 />
                <Card2 />
                <Card3 />


            </div>
        </div>
    )
}