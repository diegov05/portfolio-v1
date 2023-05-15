import React from 'react';
import { Technologies } from '../../components';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { CubeTransparentIcon, BoltIcon } from '@heroicons/react/24/outline';

export type IHiringInfoProps = {

}

const HiringInfo: React.FC<IHiringInfoProps> = () => {
    return (
        <div className='w-full flex xs:max-md:gap-12 xs:flex-col sm:max-3xl:flex-row justify-between'>
            <div className='w-full flex flex-col gap-8'>
                <h1 className='text-white font-black text-xs sm:text-base md:text-lg lg:text-lg xl:text-xl'>Hire Information</h1>
                <p className='text-white leading-6 md:max-3xl:leading-6 text-justify font-extralight text-[10px] xl:max-3xl:text-xs xl:max-3xl:leading-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia voluptate incidunt el. Provident quaerat iure illo hic sed nisi minima id, blanditiis architecto nulla adipisci repudiandae suscipit velit pariatur.</p>
                <button className='bg-white outline-0 text-black font-bold w-max py-2 px-4 rounded-3xl transition-all hover:bg-transparent hover:text-white hover:border-white border-[1px] border-transparent text-[10px] xl:text-xs'>Go to resume</button>
                <div className='flex flex-row gap-12 lg:max-3xl:gap-24'>
                    <div className='flex flex-col gap-4'>
                        <div className='bg-black/30 rounded-lg w-min flex flex-col justify-center items-center p-2'>
                            <CubeTransparentIcon className='w-8 h-8 stroke-1 text-sky-700' />
                        </div>
                        <h2 className='text-white font-black text-xs lg:text-base xl:text-lg'>Achieve your <br /> desired design</h2>
                        <p className='text-white text-start font-extralight text-[10px] xl:max-3xl:text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex flex-row justify-start items-center transition-all font-extralight hover:gap-3 gap-2'>
                            <a href="" className='text-sky-700 font-black text-[10px] xl:max-3xl:text-xs'>View design examples</a>
                            <ArrowRightIcon className='w-3 h-3 text-sky-700' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='bg-black/30 rounded-lg w-min flex flex-col justify-center items-center p-2'>
                            <BoltIcon className='w-8 h-8 stroke-1 text-sky-700' />
                        </div>
                        <h2 className='text-white font-black text-xs lg:text-base xl:text-lg'>Heavy focus <br /> on work ethic</h2>
                        <p className='text-white text-start font-extralight text-[10px] xl:max-3xl:text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex flex-row justify-start items-center transition-all font-extralight hover:gap-3 gap-2   '>
                            <a href="" className='text-sky-700 font-black text-[10px] xl:max-3xl:text-xs'>View design examples</a>
                            <ArrowRightIcon className='w-3 h-3 text-sky-700' />
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <Technologies />
            </div>
        </div >
    );
}

export { HiringInfo };