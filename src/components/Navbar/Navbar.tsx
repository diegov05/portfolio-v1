import React from 'react';

export type INavbarProps = {

}

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <>
            <div className='flex flex-row justify-between items-start w-full'>
                <div className='flex flex-col gap-4 lg:gap-2 xl:gap-2'>
                    <h1 className='text-white font-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl'>Diego Vargas</h1>
                    <h6 className='text-white font-base text-[8px] leading-5 md:text-xs md:leading-6 lg:text-xs lg:leading-5 xl:text-xs xl:leading-5 w-3/4'>Hello! I'm a Full-Stack  web developer in the MERN stack specialized in 3D designing!</h6>
                </div>
                <div className='flex flex-row gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8'>
                    <a href="">
                        <p className='text-white font-black transition-all hover:font-black text-[8px] leading-5 sm:text-xs md:text-xs md:leading-6 lg:text-sm lg:leading-5 xl:text-sm xl:leading-5'>Work</p>
                    </a><a href="">
                        <p className='text-white font-base transition-all hover:font-black text-[8px] leading-5 sm:text-xs md:text-xs md:leading-6 lg:text-sm lg:leading-5 xl:text-sm xl:leading-5'>Resume</p>
                    </a><a href="">
                        <p className='text-white font-base transition-all hover:font-black text-[8px] leading-5 sm:text-xs md:text-xs md:leading-6 lg:text-sm lg:leading-5 xl:text-sm xl:leading-5'>Contact</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export { Navbar };