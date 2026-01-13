import Header from '@/app/Component/Shared/header';
import React from 'react';

const Fruits = () => {
    const title:string="Welcome to Fruits page"
    const img:string="https://i.ibb.co.com/gMs1dz56/Fruits.jpg"
    return (
        <div className='pt-20'>
            <Header 
            title={title}
            imageSrc={img}
            ></Header>
        </div>
    );
};

export default Fruits;