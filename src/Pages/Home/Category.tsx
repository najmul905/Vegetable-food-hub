'use client'

import useInView from '@/Hooks/useInView';
import Image from 'next/image';
import React from 'react';

const Category = () => {

              const { ref, isInView } = useInView();


    return (
        <div className='mt-32 overflow-hidden'>
            <div className='grid grid-cols-3 mx-20 gap-5 '>
                {/* 1st */}
                <section className='grid grid-rows-2 gap-5 h-[620px]'>
                <div ref={ref} id='category_1st_section' className={`relative w-full h-[300px] ${isInView ? "category_1st_section" : "opacity-0 "}`}>
                        <Image src={"https://i.ibb.co/b5CrN87W/Green-Vegetables-Names-in-English-for-Kids.jpg"} fill alt='Vegetable'></Image>
                        <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46]  hover:bg-transparent text-white font-bold text-[15px] absolute bottom-0 left-0 cursor-pointer'>Vegetable</button>
                    </div>
                    <div ref={ref} id='category_1st_section' className={`relative w-full h-[300px]  ${isInView ? "category_1st_section2" : "opacity-0 "}`}>
                        <Image src={"https://i.ibb.co/j9r0j9Lp/fs542-main-1.jpg"} fill alt='Juices'></Image>
                        <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46]  hover:bg-transparent text-white font-bold text-[15px] absolute bottom-0 left-0 cursor-pointer'>Juices</button>
                    </div>
                </section>
                    {/* middle */}
 <section className=" text-center relative h-[620px]">
      <h1 className="italic text-[22px] font-semibold ">Vegetable</h1>
      <p className="text-[14px] text-slate-500 uppercase my-5">Protect the health of every home</p>
      <button className="px-5 py-2 hover:text-[#82ae46] font-semibold text-[14px] mb-4 bg-[#82ae46] border border-[#82ae46] hover:bg-transparent text-white rounded-full cursor-pointer">Shop Now</button>
      <div className="absolute bottom-0 w-full  h-[400px]">
        <Image src="https://i.ibb.co/S9mntDn/istockphoto-1409236261-612x612.jpg" fill alt="Vegetable" className="object-cover" />
      </div>
    </section>
                {/* 3rd */}
                 <section className='grid grid-rows-2 gap-5 h-[620px]'>
                    <div className='relative w-full h-[300px]'>
                        <Image src={"https://i.ibb.co/9HbzXjWx/Heart-Fruit-Smaller-1024x1024.jpg"} fill alt='Vegetable'></Image>
                        <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46]  hover:bg-transparent text-white font-bold text-[15px] absolute bottom-0 left-0 cursor-pointer'>Fruits</button>
                    </div>
                    <div className='relative w-full h-[300px]'>
                        <Image src={"https://i.ibb.co/v4mnDY26/istockphoto-1218693828-612x612.jpg"} fill alt='Dried Food'></Image>
                        <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46]  hover:bg-transparent text-white font-bold text-[15px] absolute bottom-0 left-0 cursor-pointer'>Dried Fruits</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Category;