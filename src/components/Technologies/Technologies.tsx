import React from 'react';
import "./Technologies.css"
import { technologiesArr } from './data';
import { TechCard } from '../TechCard/TechCard';

export type ITechnologiesProps = {

}

const Technologies: React.FC<ITechnologiesProps> = () => {

    return (
        <div data-aos="fade-left" className='flex flex-col gap-12 pl-10 sm:max-4xl:pl-20'>
            <div className='flex flex-col md:max-4xl:flex-row justify-start items-start md:max-4xl:items-center gap-12 md:max-4xl:gap-24 shadow-2xl rounded-l-2xl shadow-zinc-400 p-5 xs:max-md:pt-10 xs:max-md:pl-10 xs:max-md:pb-10 xs:max-md:pr-0 md:max-4xl:p-32 md:max-4xl:pr-0'>
                <div className='flex flex-col gap-4 w-2/4'>
                    <h1 className='gradient-bg-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>Tech Stack</h1>
                    <p className='text-base sm:max-lg:text-xl lg:max-4xl:text-2xl font-medium'>Technologies I use to
                        design, build and deploy
                        amazing web pages</p>
                </div>
                <div className='slide-in-fwd-center flex flex-col gap-4 s:max-md:gap-8 md:max-4xl:gap-16 w-full md:max-4xl:w-2/4'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className="no-scrollbar relative flex flex-row items-center overflow-x-auto">
                            <div data-aos="fade-left" className="flex flex-row overflow-x-visible gap-4 p-0 md:max-4xl:p-10 pr-0">
                                {technologiesArr.map((tech) => (
                                    <TechCard techName={tech.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Technologies };