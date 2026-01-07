import path from 'path';
import React from 'react';
import { promises as fs } from 'fs';
import Image from 'next/image';



interface Data {
  _id: number;
  Image: string;
  Title: string;
  About: string;
}
const Model =async () => {
    const filePath = path.join(process.cwd(), 'public', 'ModelData.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data: Data[] = JSON.parse(fileContent);
      console.log(data)
    return (
        <div className=' grid grid-cols-4 gap-5 my-20 mx-32'>
           {
            data?.map(item=>(
            <div key={item._id} className='flex flex-col items-center justify-center'>
                <div className='rounded-full bg-sky-200 hover:bg-[#82ae46] transition duration-300 h-[100px] w-[100px]'><Image src={`${item.Image}`} alt='Image' height={100} width={100}></Image></div>
              
                    <h1 className='text[14px] uppercase font-bold pb-2 pt-4'>{item.Title}</h1>
                    <p className='text-[13px] font-semibold uppercase text-stone-500'>{item.About}</p>
                
            </div>
            ))
           }
        </div>
    );
};

export default Model;