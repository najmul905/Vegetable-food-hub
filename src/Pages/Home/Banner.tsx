import path from 'path';
import React from 'react';
import { promises as fs } from 'fs';
import Image from 'next/image';
import { Rock_Salt } from 'next/font/google'

interface Data {
  _id: number;
  Image: string;
  Title: string;
  About: string;
}

const rock=Rock_Salt({
    subsets:['latin'],
    weight:["400"]
})

const Banner = async () => {
  const filePath = path.join(process.cwd(), 'public', 'BannerData.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data: Data[] = JSON.parse(fileContent);

  
  return (
    <section className="slider-container h-screen relative">
      <div className="slider-track h-full">
        {data.map((item, index) => (
          <div
            key={`${item._id}-${index}`}
            className="slider-item relative w-screen h-full"
          >
            <Image
              src={item.Image}
              alt="Banner"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
              <h1 className={`text-white text-[40px] font-extrabold ${rock.className}`}>{item.Title}</h1>
              <p className='text-white text-[12px] my-5'>{item.About}</p>
              <button className='px-5 py-2 rounded text-[14px] font-semibold bg-[#82ae46] text-white cursor-pointer  hover:bg-transparent hover:border hover:border-white'>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
