import React from 'react';
import images from "../../assets"

export type IProjectsProps = {

}

const Projects: React.FC<IProjectsProps> = () => {



    return (
        <div className='relative'>
            <img className='absolute -z-50 -top-24 w-96 -left-48 opacity-20' src={images.gradient} alt="" />
            <div className='flex flex-col gap-12 py-10 px-10 sm:max-4xl:px-20'>
                <div data-aos="fade-right" className='flex flex-col gap-1 sm:max-lg:gap-3 lg:max-4xl:gap-5 text-center w-full s:max-4xl:text-start h-full'>
                    <h1 className='text-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>Some of the things</h1>
                    <h1 className='gradient-bg-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'><span className='gradient-bg-text'>I've Built</span></h1>
                </div>
                <div className='flex flex-col gap-8 w-full h-full'>
                    <div id='work-section' data-aos="fade-right" className='w-full h-96 bg-bg shadow-xl shadow-zinc-300'></div>
                    <div data-aos="fade-up" className='flex flex-row gap-2 flex-wrap'>
                        <div className='bg-bg-secondary w-max px-5 py-2.5 rounded-2xl font-bold text-xs'>React</div>
                        <div className='bg-bg-secondary w-max px-5 py-2.5 rounded-2xl font-bold text-xs'>Tailwindcss</div>
                        <div className='bg-bg-secondary w-max px-5 py-2.5 rounded-2xl font-bold text-xs'>Firebase</div>
                        <div className='bg-bg-secondary w-max px-5 py-2.5 rounded-2xl font-bold text-xs'>TypeScript</div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <button className='gradient-bg font-bold text-bg px-5 py-2.5 rounded-2xl text-xs md:max-4xl:text-lg transition-all hover:shadow-lg hover:shadow-zinc-300'>Read Case Study</button>
                </div>
            </div>
        </div>
    );
}

export { Projects };