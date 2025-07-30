import Image from 'next/image';
import React from 'react';

const OfferSection = () => {
    return (
        <div className='mt-20'>
            <div className='relative'>
                <div className='h-[650px] w-full relative '>
                    <Image src={"https://i.ibb.co/JwsSwdLS/offer-banner.jpg"} alt='Offer Banner image' fill className='object-cover'></Image>
                </div>
                <div className='h-[650px] w-full absolute top-0 flex items-center'>
                    <div className='h-full w-1/2'></div>
                    <div className='h-full w-1/2 pt-8 text-white'>
                    <h3 className='text-[18px] text-[#82ae46] uppercase'>Best Price for you</h3>
                    <h1 className='text-5xl font-semibold py-5'>Deal of the day</h1>
                    <p className='text-slate-300 text-[15px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <h1 className='text-black text-3xl font-semibold py-5'>Tomato</h1>
                    <h4 className='text-2xl'><span className='font-semibold'>Regular Price: $12</span> <span className='text-[#82ae46] font-bold'>But Now: $7</span></h4>
                    <button className='px-6 py-2 bg-[#82ae46]  border-2 border-[#82ae46] text-white text-[16px] font-semibold hover:bg-transparent hover:text-[#82ae46] mt-3 cursor-pointer'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;