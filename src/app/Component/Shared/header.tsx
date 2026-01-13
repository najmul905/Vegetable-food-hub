import Image from 'next/image';
import React from 'react';

interface Data{
    title:string,
    imageSrc:string
}

const Header = ({title,imageSrc} : Data) => {
    return (
        <div className='relative '>
 <div style={{ backgroundImage: `url(${imageSrc})` }} className={`h-96 w-3/4 mx-auto rounded-2xl  bg-cover bg-bottom bg-fixed bg-no-repeat `}>
            <div className='h-full w-full flex items-center justify-center'>
                <h1 className=' text-[30px] text-white font-semibold z-10'>{title}</h1>
            </div>     
        </div>
        <div className='h-96 w-3/4 mx-auto rounded-2xl bg-slate-700 absolute inset-0 opacity-35 '>

        </div>
        </div>
       
    );
};

export default Header;