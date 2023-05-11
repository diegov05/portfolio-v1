import React from 'react';
import { hero } from '../../assets';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export type IHeroProps = {

}

const Hero: React.FC<IHeroProps> = () => {
    return (
        <div className='w-full flex flex-col gap-8 xs:mt-8'>
            <div className='w-full flex flex-row justify-end'>
                <div className=''>
                    <p className='text-white font-extralight text-[10px] xl:text-xs w-[30ch] text-end'>
                        Designing, creating, innovating, <br /> developing & delivering <br />
                        top-edge quality.</p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <img className='w-[38rem] 3xl:w-[60rem]' src={hero} alt="movie" />
            </div>
            <div className='w-full flex flex-row justify-between items-end'>
                <h1 className='text-white font-black xs:text-base s:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Unlimited<br />
                    possibilities.<br /> You imagine it? <br className='xs:block s:hidden sm:hidden md:hidden xl:hidden 2xl:hidden 3xl:hidden' /> I'll build it.</h1>
                <div className='flex flex-row justify-start items-center transition-all hover:gap-3 gap-2 border-b border-white'>
                    <a href="" className='text-white font-black xs:text-xs s:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl'>Hire me</a>
                    <ArrowRightIcon className='w-4 h-4 text-white' />
                </div>
            </div>
        </div>
    );
}

export { Hero };