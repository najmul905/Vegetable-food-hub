import Header from '@/app/Component/Shared/header';
import React from 'react';

const Dried = () => {
    const title:string="Welcome to Dried page"
    const img:string="https://i.ibb.co.com/1tqm79md/Dried.jpg"
    return (
        <div className='pt-20'>
            <Header
            title={title}
            imageSrc={img}
            ></Header>
        </div>
    );
};

export default Dried;