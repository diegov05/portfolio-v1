import React from 'react';
import images from "../../assets"
export type IFooterProps = {

}

const Footer: React.FC<IFooterProps> = () => {
    return (
        <div className='relative flex flex-col items-center md:max-4xl:items-start gap-12 pb-0 py-10 px-10 sm:max-4xl:px-20'>
            <div data-aos="fade-right" className='flex flex-col gap-2 sm:max-lg:gap-3 lg:max-4xl:gap-5 text-center w-full s:max-4xl:text-start h-full'>
                <h1 className='text-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>Get in <span className='gradient-bg-text'>Touch</span></h1>
                <h2 data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement="" className='text-text text-base sm:max-lg:text-xl lg:max-4xl:text-2xl font-medium'>Open for job opportunities,<br />
                    open-source collaboration <br />
                    and freelance requests. </h2>
            </div>
            <img className='absolute -z-50 -top-24 w-96 -left-48 opacity-50' src={images.gradient} alt="" />
            <a href="mailto: diegovs_@outlook.com"><button data-aos="fade-up" className='gradient-bg font-bold text-bg px-5 py-2.5 rounded-2xl text-xs md:max-4xl:text-lg transition-all hover:shadow-lg hover:shadow-zinc-300'>Send Email</button></a>
            <div className='flex flex-col justify-center items-center w-full'>
                <img data-aos="fade-up" src={images.footerImage} className='w-[40rem]' alt="" />
            </div>
        </div>
    );
}

export { Footer };