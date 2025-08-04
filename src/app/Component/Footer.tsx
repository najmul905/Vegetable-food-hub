import Image from 'next/image';
import React from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MailIcon from '@mui/icons-material/Mail';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <div>
            <div className='relative'>
                <div className='h-[300px] relative '> <Image src={"https://i.ibb.co/hRwXjcvg/footer-image-1.jpg"} fill alt='Footer image' className='object-cover'></Image> </div>
                <div className='absolute top-0 h-[300px] transparent-layer w-full footer_gradient opacity-70 flex items-center justify-center'>
                <div className='flex items-center justify-center text-white'>
                    <div className='w-1/2 h-full ps-12 '>
                    <h1 className='text-[14px]'><LocationPinIcon fontSize='small'></LocationPinIcon> Sunderganj, Gaibandha,Dhaka,Bangladesh</h1>
                    <h1 className='text-[14px]'><MailIcon fontSize='small'></MailIcon> <span className='text-green-900 font-bold'>muhammadnajmulislam19@gmail.com</span></h1>
                    <h1 className='text-[14px]'><PhoneEnabledIcon fontSize='small'></PhoneEnabledIcon> +8801723165412</h1>
                    </div>
                    <div className='w-1/2 h-full'>
                    <h1 className='text-center text-2xl font-semibold'>About the company</h1>
                    <p className='pe-12'>This website is for sell fresh organic vegetables and fruits. We are Always try to provide our best products to our customer for there healthy health . We are always try to do our best and you all customer keep use in your prayer</p>
                    <div><FacebookIcon></FacebookIcon> <TwitterIcon></TwitterIcon> <InstagramIcon></InstagramIcon> <LinkedInIcon></LinkedInIcon> </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;