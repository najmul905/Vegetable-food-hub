'use client';

import useInView from '@/Hooks/useInView';
import Image from 'next/image';
import React from 'react';
import './homeStyle.css';

interface AnimatedViewProps {
  duration?: string; // Tailwind duration class, e.g. "duration-700"
}

const Category = ({ duration = 'duration-1000' }: AnimatedViewProps) => {
  const item1 = useInView();
  const item2 = useInView();
  const item3 = useInView();
  const item4 = useInView();
  const title=useInView();
  const button=useInView();
  const image=useInView()

  return (
    <div className='mt-32 overflow-hidden'>
      <div className='grid grid-cols-3 mx-20 gap-5'>
        {/* 1st column */}
        <section className='grid grid-rows-2 gap-5 h-[620px]'>
          <div
            ref={item1.ref}
            id='category_1st_section'
            className={`transition-all ease-out ${duration} ${
              item1.isInView
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-[100px] scale-50'
            }`}
          >
            <Image
              src='https://i.ibb.co/b5CrN87W/Green-Vegetables-Names-in-English-for-Kids.jpg'
              fill
              alt='Vegetable'
            />
            <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46] hover:bg-transparent text-white font-bold text-[15px] transition duration-500 absolute bottom-0 left-0 cursor-pointer'>
              Vegetable
            </button>
          </div>

          <div
            ref={item2.ref}
            className={`transition-all ease-out  ${duration} ${
              item2.isInView
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-[100px] scale-50'
            }`}
          >
            <Image
              src='https://i.ibb.co/j9r0j9Lp/fs542-main-1.jpg'
              fill
              alt='Juices'
            />
            <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46] hover:bg-transparent text-white font-bold text-[15px] transition duration-500 absolute bottom-0 left-0 cursor-pointer'>
              Juices
            </button>
          </div>
        </section>

        {/* Middle section */}
        <section className='text-center relative h-[620px]'>
          <h1 ref={title.ref} className={`italic text-[22px] transition-all duration-500 ease-out font-semibold ${title.isInView?"translate-y-0 opacity-100 scale-100":" -translate-y-5 opacity-0 scale-50"}`}>Vegetable</h1>
          <p  className='text-[14px] text-slate-500 uppercase my-5'>
            Protect the health of every home
          </p>
          <button  className='px-5 py-2 hover:text-[#82ae46] font-semibold text-[14px] transition duration-500 mb-4 bg-[#82ae46] border border-[#82ae46] hover:bg-transparent text-white rounded-full cursor-pointer' >
            Shop Now
          </button>
          <div ref={image.ref} className={`absolute transition-all duration-500 bottom-0 w-full h-[400px] ${image.isInView ?" translate-y-0 scale-100 opacity-100":"translate-y-40 scale-50 opacity-0"}`}>
            <Image
              src='https://i.ibb.co/S9mntDn/istockphoto-1409236261-612x612.jpg'
              fill
              alt='Vegetable'
              className='object-cover'
            />
          </div>
        </section>

        {/* 3rd column */}
        <section className='grid grid-rows-2 gap-5 h-[620px]'>
          <div
            ref={item3.ref}
            className={`transition-all ease-out ${duration} ${
              item3.isInView
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-[100px] scale-50'
            }`}
          >
            <Image
              src='https://i.ibb.co/9HbzXjWx/Heart-Fruit-Smaller-1024x1024.jpg'
              fill
              alt='Fruits'
            />
            <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46] hover:bg-transparent text-white font-bold text-[15px] transition duration-500 absolute bottom-0 left-0 cursor-pointer'>
              Fruits
            </button>
          </div>

          <div
            ref={item4.ref}
            className={`transition-all ease-out  ${duration} ${
              item4.isInView
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-[100px] scale-50'
            }`}
          >
            <Image
              src='https://i.ibb.co/v4mnDY26/istockphoto-1218693828-612x612.jpg'
              fill
              alt='Dried Fruits'
            />
            <button className='w-32 p-4 bg-[#82ae46] border border-[#82ae46] hover:bg-transparent text-white font-bold text-[15px] transition duration-300 absolute bottom-0 left-0 cursor-pointer'>
              Dried Fruits
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Category;
