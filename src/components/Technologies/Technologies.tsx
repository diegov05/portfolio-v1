import React from 'react';

import { technologiesData } from './data';
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export type ITechnologiesProps = {

}

const Technologies: React.FC<ITechnologiesProps> = () => {

    return (
        <div className='w-full flex flex-row flex-wrap xs:max-md:justify-between xs:max-sm:gap-2 sm:max-3xl:gap-4 sm:max-3xl:justify-end'>
            {technologiesData.map((tech) => (
                <div key={tech.name} className="flex flex-col justify-start items-center gap-6 bg-zinc-700/20 p-4 backdrop-blur-xl rounded-3xl border border-t-zinc-600 border-l-zinc-600 basis-1/4">
                    {tech.name === "NextJS" ?
                        <SiNextdotjs className="xs:max-s:w-4 xs:max-s:h-4 md:max-xl:w-6 md:max-lg:h-6 xl:max-3xl:w-8 xl:max-3xl:h-8 text-white" />
                        : tech.name === "ExpressJS" ?
                            <SiExpress className="xs:max-s:w-4 xs:max-s:h-4 md:max-xl:w-6 md:max-lg:h-6 xl:max-3xl:w-8 xl:max-3xl:h-8 text-white" />
                            :
                            <img className={`xs:max-md:w-4 xs:max-md:h-4 md:max-xl:w-6 md:max-xl:h-6 xl:max-3xl:w-8 xl:max-3xl:h-8`} src={tech.icon} alt="" />}
                    <div className='flex flex-col justify-start items-start gap-6'>
                        <p className='text-white text-justify w-[15ch] font-extralight xs:max-lg:text-[8px] lg:max-3xl:text-[10px]'>{tech.description}</p>
                        <div className='flex flex-row justify-start items-center transition-all font-extralight hover:gap-3 gap-2'>
                            <a href="" className='text-white font-black xs:max-lg:text-[8px] lg:max-3xl:text-[10px]'>View docs</a>
                            <ArrowRightIcon className='w-3 h-3 text-white' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { Technologies };