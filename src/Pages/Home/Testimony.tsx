import path from 'path';
import React from 'react';
import { promises as fs } from 'fs';
import Image from 'next/image';


interface Data {
    _id: number,
    Name: string,
    Image: string,
    Comment: string
}
const Testimony = async () => {
    const filePath = path.join(process.cwd(), 'public', 'testimony.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data: Data[] = JSON.parse(fileContent);
    return (
        <div>
            <div>
                <h1 className='text-[35px] font-semibold text-center py-6'>My Testimony</h1>
            </div>
            <div className="relative overflow-hidden  bg-white py-16  hover:pause-animation">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-full w-30 bg-gradient-to-r from-slate-300 to-transparent pointer-events-none"></div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-full w-30 bg-gradient-to-l from-slate-300 to-transparent pointer-events-none"></div>

                <div className="flex w-max animate-marquee hover:pause-animation ">
                    {[...data, ...data]?.map((item, index) => (
                        <div
                            key={index}
                            className="w-[320px] relative flex-shrink-0 text-center border-l px-5"
                        >
                            <div className='h-16 w-1 bg-green-600 absolute top-[40%] left-[-3px]'></div>
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <Image
                                    src={item.Image}
                                    alt={item.Name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <h3 className="text-lg font-semibold">{item.Name}</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">
                                {item.Comment}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Testimony;