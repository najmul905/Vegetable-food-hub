

import { Poppins } from 'next/font/google';
import React from 'react';
import ProductsCard from './ProductsCard';
import path from 'path';
import { promises as fs } from 'fs';

const poppins_thin = Poppins({
   subsets:["latin"],
  weight: ['200']

})
interface Data{
    _id:number,
    Name:string,
    Image:string,
    Price:number,
    Offer:number|null
}
const OurProducts =async () => {
     const filePath = path.join(process.cwd(), 'public', 'HomeProductsData.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data: Data[] = JSON.parse(fileContent);
      console.log(data)
    return (
        <div className='mt-32'>
          <div className=' text-center'>
    <h3 className={`text-[18px] text-[#82ae46] ${poppins_thin.className}`}>Featured Products</h3>
        <h1 className='text-[35px] font-extrabold py-6'>Our Products</h1>
        <p className='text-[12px] text-slate-500'>We are always try to provide best Vegetable and fruits for our all customer.</p>
          </div>
          <div className='mt-14'>
        <ProductsCard data={data}></ProductsCard>
          </div>
        </div>
    );
};

export default OurProducts;