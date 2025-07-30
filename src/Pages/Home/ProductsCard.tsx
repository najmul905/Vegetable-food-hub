'use client'

import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
interface Data{
    _id:number,
    Name:string,
    Image:string,
    Price:number,
    Offer:number|null
}


const ProductsCard = ({ data }: { data: Data[] }) => {
    const [view,setView]=useState<number | null>(null)
    console.log(view) 
    
    return (
        <div>
            <div className='grid grid-cols-4 gap-5 mx-32'>
                {
                    data?.map(item=>(
                        <div key={item._id}
                        onMouseEnter={() => setView(item._id)}
                        onMouseLeave={() => setView(null)}
                        className={`border overflow-hidden h-[350px] p-12 border-slate-200 relative`}>
                            <div className='h-[200px] w-full relative overflow-visible mx-auto'>
                                <Image src={`${item.Image}`}  alt={item.Name} height={300} width={600} className='hover:scale-130 transition-transform duration-300 ease-in-out' ></Image>
                            </div>
                        <div className='text-center'>
                            <h1 className='font-semibold text-[16px]'>{item.Name}</h1>
                            <h3 className={ `text-[16px] py-3 font-bold text-slate-400 ${view===item._id&&"hidden"}`}><span className={`${item.Offer===null?"":"line-through"}`}>${item.Price}.00</span>  $<span>{item.Offer===null?"": (item.Price * (1 - item.Offer / 100)).toFixed(2)}</span> </h3>
                            <div className={`py-3 ${view === item._id ? 'block' : 'hidden'}`}>
                                <div className=' flex gap-3 text-center '>
                                <button className='cursor-pointer border border-[#82ae46] hover:bg-transparent hover:text-[#82ae46] bg-[#82ae46] p-2 rounded-full '><MenuIcon fontSize='small'></MenuIcon></button>
                                <button className=' cursor-pointer border border-[#82ae46] hover:bg-transparent hover:text-[#82ae46] bg-[#82ae46] p-2 rounded-full '><ShoppingCartIcon fontSize='small'></ShoppingCartIcon></button>
                                <button className='cursor-pointer border border-[#82ae46] hover:bg-transparent hover:text-[#82ae46] bg-[#82ae46] p-2 rounded-full '><FavoriteBorderIcon fontSize='small'></FavoriteBorderIcon></button>
                            </div>
                            </div>
                        </div>
                        <p className={`text-2x px-2 bg-[#82ae46] absolute top-0 left-0 ${item.Offer===null?"hidden":"block"} font-semibold text-[15px] text-white`}>{item.Offer}%</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsCard;