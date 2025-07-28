'use client'


import { Poppins,Playwrite_AR } from 'next/font/google'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const poppins_thin = Poppins({
   subsets:["latin"],
  weight: ['200']

})
const playWrite=Playwrite_AR({
 
  weight: ['400']
})
const Navbar = () => {

const items = <>
    <li className='nav-link'><Link href={'/'}>Home</Link></li>
    <li className="relative group  nav-link">
   <h1 className='flex items-center'> Shop
    <ArrowDropDownIcon className="text-slate-500" /></h1>
  {/* Dropdown menu */}
  <div className="absolute left-0 hover:ease-in-out duration-75 hidden group-hover:flex flex-col w-40 bg-white rounded-md shadow-lg ">
    <Link  href="/shop/item1" className="hover:bg-gray-100 px-4 py-2 nav-link">
      Item 1
    </Link>
    <Link href="/shop/item2" className="hover:bg-gray-100 px-4 py-2 nav-link">
      Item 2
    </Link>
    <Link href="/shop/item3" className="hover:bg-gray-100 px-4 py-2 nav-link">
      Item 3
    </Link>
  </div>
</li>
    <li className='nav-link'><Link href={"/blog"}>Blog</Link></li>
    <li className='nav-link'><Link href={"/contact"}>Contact</Link></li>
    <li className='nav-link'><Link href={"/card"} className='flex items-center'><ShoppingCartIcon fontSize='small'></ShoppingCartIcon> [0]</Link></li>
</>
return (
    <div className=' navBottomShadow fixed w-full  z-10 bg-white '>
        <div className='py-3 flex items-center justify-between mx-5'>
            <div className='flex items-center gap-6'> <div><Link className={`uppercase ${playWrite.className} text-[15px] text-[#82ae46]`} href="/">Vege&Food-Hub</Link></div> <div className='border border-black rounded-md flex bg-white'><input className='outline-0 ps-2 py-1 overflow-hidden text-[12px] md:w-[200px]' type="text" name="" id="" /><button className='cursor-pointer '>< SearchIcon fontSize='small'></SearchIcon> </button></div> </div>
            <div className='flex items-center gap-8'>
                <ul className={`${poppins_thin.className} text-[14px] flex items-center gap-12 uppercase`}>
                    {items}
                </ul>
                <button className='text-semibold border-b-2 border-[#82ae46] cursor-pointer'>LogIn</button>
            </div>
        </div>
    </div>
);
};

export default Navbar;