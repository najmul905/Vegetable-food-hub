'use client'

import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import useInView from '@/Hooks/useInView';

interface Data {
    _id: number;
    Name: string;
    Image: string;
    Price: number;
    Offer: number | null;
}

const ProductsCard = ({ data }: { data: Data[] }) => {
    const [view, setView] = useState<number | null>(null);

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 mx-32">
                {data?.map((item, index) => {
                    const { ref, isInView } = useInView();

                    return (
                        <div
                            key={item._id}
                            ref={ref}
                            onMouseEnter={() => setView(item._id)}
                            onMouseLeave={() => setView(null)}
                            className={`border overflow-hidden h-[350px] p-12 border-slate-200 relative transform transition-all duration-700 ease-out delay-[${index * 150}ms] ${isInView
                                ? 'opacity-100 scale-0.5 translate-y-0'
                                : 'opacity-0 scale-1 translate-y-30'
                                }`}
                        >
                            <div className="h-[200px] w-full relative overflow-visible mx-auto">
                                <Image
                                    src={item.Image}
                                    alt={item.Name}
                                    height={300}
                                    width={600}
                                    className="hover:scale-125 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <div className="text-center relative">
                                <h1 className="font-semibold text-[16px]">{item.Name}</h1>
                                <div
                                    className={`pt-10 absolute inset-0 text-[16px] py-3 font-bold text-slate-400 transition-all duration-300
                                     ${view === item._id ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}
  `}
                                >
                                    <span className={`text-green-500 ${item.Offer === null ? '' : 'line-through text-red-500'}`}>
                                        ${item.Price}.00
                                    </span>{' '}
                                 
                                    <span className={`text-green-500 ${item.Offer === null ? 'hidden' : ''}`}>
                                        ${item.Offer === null
                                            ? ''
                                            :  (item.Price * (1 - item.Offer / 100)).toFixed(2)}
                                    </span>
                                </div>
                                <div
                                    className={`pt-10 absolute inset-0 transition-all duration-300
                                            ${view === item._id
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-2 pointer-events-none'}
  `}
                                >
                                    <div className="flex gap-3 text-center">
                                        <button className="cursor-pointer border border-[#82ae46] bg-[#82ae46] hover:bg-transparent transition duration-300 hover:text-[#82ae46] p-2 rounded-full">
                                            <MenuIcon fontSize="small" />
                                        </button>
                                        <button className="cursor-pointer border border-[#82ae46] bg-[#82ae46] hover:bg-transparent transition duration-300 hover:text-[#82ae46] p-2 rounded-full">
                                            <ShoppingCartIcon fontSize="small" />
                                        </button>
                                        <button className="cursor-pointer border border-[#82ae46] bg-[#82ae46] hover:bg-transparent transition duration-300 hover:text-[#82ae46] p-2 rounded-full">
                                            <FavoriteBorderIcon fontSize="small" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p
                                className={`text-2x px-2 bg-[#82ae46] absolute top-0 left-0 ${item.Offer === null ? 'hidden' : 'block'
                                    } font-semibold text-[15px] text-white`}
                            >
                                {item.Offer}%
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsCard;
