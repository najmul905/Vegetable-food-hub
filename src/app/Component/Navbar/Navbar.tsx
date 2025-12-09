'use client'


import { Poppins,Playwrite_AR } from 'next/font/google'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useScrollDirection } from '@/Hooks/useScrollDirection';
import { usePathname } from 'next/navigation';
import { Co2Sharp } from '@mui/icons-material';
const poppins_thin = Poppins({
   subsets:["latin"],
  weight: ['200']

})
const playWrite=Playwrite_AR({
 
  weight: ['400']
})

type ValidPaths = "/" | "/blog" | "/shop/fruits"|"/shop/vegetable"|"/shop/juices"|"/shop/dried"|"/contact"|"/card";
const underlineMapping: Record<ValidPaths, string> = {
  "/": "home",
  "/blog": "blog",
  "/shop/vegetable": "vegetable",
  "/shop/fruits": "fruits",
  "/shop/juices":"juice",
  "/shop/dried":"dried",
  "/contact":"contact",
  "/card":"card"
};

const Navbar = () => {
  const pathName =  usePathname() as ValidPaths;
  const underline: string = underlineMapping[pathName] || "";

  console.log(underline)
  const scrollDirection =useScrollDirection();


const items = <>
    <li className={`relative px-1 group/home`}><Link className='relative' href={'/'}>Home
    <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/home:w-full
      ${underline ==="home"?"w-full":""}
    `}></span>
    </Link></li>
    <li className="relative group  group/shop">
   <h1 className='flex items-center cursor-pointer'> Shop
    <ArrowDropDownIcon className="text-slate-500" />
    <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/shop:w-full
      ${["vegetable", "juice", "fruits", "dried"].includes(underline) ? "w-full" : ""}
    `}></span>
    </h1>
  {/* Dropdown menu */}
  <div className="absolute left-0 hover:ease-in-out duration-75 hidden group-hover:flex flex-col w-40 bg-white rounded-md shadow-lg group">
      <Link  href="/shop/vegetable" className="hover:bg-gray-100 px-4 py-2 relative group/vegetable">
      Vegetable
      <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/vegetable:w-full
      ${underline ==="vegetable"?"w-full":""}
    `}></span>
    </Link>

    <Link href="/shop/fruits" className="hover:bg-gray-100 px-4 py-2 relative group/fruits">
      Fruits
      <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/fruits:w-full
      ${underline ==="fruits"?"w-full":""}
    `}></span>
    </Link>
    <Link href="/shop/juices" className="hover:bg-gray-100 px-4 py-2 relative group/juice">
      Juices
      <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/juice:w-full
      ${underline ==="juice"?"w-full":""}
    `}></span>
    </Link>
    <Link href="/shop/dried" className="hover:bg-gray-100 px-4 py-2 relative group/dried">
      Dried
      <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/dried:w-full
      ${underline ==="dried"?"w-full":""}
    `}></span>
    </Link>
  </div>
</li>
    <li className='relative px-1 group/blog'><Link className='relative' href={"/blog"}>Blog
     <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/blog:w-full
      ${underline ==="blog"?"w-full":""}
    `}></span>
    </Link></li>
    <li className='relative px-1 group/contact'><Link className='relative' href={"/contact"}>Contact
     <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/contact:w-full
      ${underline ==="contact"?"w-full":""}
    `}></span>
    </Link></li>
    <li className='relative px-1 group/card'><Link  href={"/card"} className='flex items-center relative'><ShoppingCartIcon fontSize='small'></ShoppingCartIcon> [0]</Link>
     <span className={`
      absolute left-0 -bottom-0.5 h-0.5 w-0 
      bg-[#82ae46] 
      transition-all duration-300 
      group-hover/card:w-full
      ${underline ==="card"?"w-full":""}
    `}></span>
    </li>
</>
return (
    <div className={` fixed w-full transition-transform duration-300 z-10 bg-white ${scrollDirection === "down" ? "-translate-y-full " : "translate-y-0 navBottomShadow"}`}>
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