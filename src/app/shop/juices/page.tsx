import Header from '@/app/Component/Shared/header';
import React from 'react';

const Juices = () => {

    const title:string="Welcome to Juice page"
    const img:string="https://i.ibb.co.com/wh4MmQzh/Juice.jpg"
    return (
        <div className='pt-20'>
            <Header imageSrc={img} title={title}></Header>
        </div>
    );
};

export default Juices;