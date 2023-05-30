import React from 'react';
import images from "../../assets"
import { projects } from './data';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { AiFillGithub } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

export type IProjectsProps = {

}

const Projects: React.FC<IProjectsProps> = () => {



    return (
        <div className='relative'>
            <img className='absolute -z-50 -top-24 w-96 -left-48 opacity-20' src={images.gradient} alt="" />
            <div className='flex flex-col gap-12 py-10 pl-10 sm:max-4xl:pl-20 '>
                <div data-aos="fade-right" className='flex flex-col gap-1 sm:max-lg:gap-3 lg:max-4xl:gap-5 text-center w-full s:max-4xl:text-start h-full'>
                    <h1 className='text-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>Some of the things</h1>
                    <h1 className='gradient-bg-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'><span className='gradient-bg-text'>I've Built</span></h1>
                </div>
                <div className="no-scrollbar relative flex flex-row items-center overflow-x-auto">
                    <div className="flex flex-row overflow-x-visible gap-4 p-0 md:max-4xl:p-10 pr-0">
                        <Swiper
                            grabCursor={true}
                            slidesPerView="auto"
                            loop={false}
                            spaceBetween={24}
                            navigation
                            pagination={{ clickable: true }}
                            className='h-max w-[100vw]'
                        >
                            {projects.map((project) => (
                                <>
                                    <SwiperSlide key={project.name} className='flex flex-col gap-8 w-[50vw]'>
                                        <div className='flex flex-col gap-8'>
                                            <img src={project.imgPath} id='work-section' data-aos="fade-right" className='w-full shadow-xl shadow-zinc-300 rounded-sm' alt={project.name} />
                                            <div data-aos="fade-up" className='flex flex-row gap-2 flex-wrap w-full'>
                                                {project.tags.map((tag) => (
                                                    <div key={tag} className='bg-bg-secondary w-max px-3 py-1 md:max-4xl:px-5 md:max-4xl:py-2.5 rounded-2xl font-bold text-[8px] md:max-4xl:text-xs'>{tag}</div>
                                                ))}
                                            </div>
                                        </div>
                                        {project.caseStudy ? <div data-aos="fade-up">
                                            {<button className='gradient-bg font-bold text-bg px-5 py-2.5 rounded-2xl text-xs md:max-4xl:text-lg transition-all hover:shadow-lg hover:shadow-zinc-300'>Read Case Study</button>}
                                        </div> : (
                                            <div data-aos="fade-up" className='w-max h-full flex flex-col md:max-4xl:flex-row justify-end items-center gap-2'>
                                                <a target='__blank' className='w-full' href={project.link}>
                                                    <button className='gap-4 justify-center items-center flex gradient-bg font-bold text-bg px-5 py-2.5 md:max-4xl:px-5 md:max-4xl:py-2.5 rounded-2xl text-xs w-full md:max-4xl:text-lg transition-all hover:shadow-lg hover:shadow-zinc-300 hover:text-accent-color'>
                                                        Try it out!
                                                        <ArrowTopRightOnSquareIcon className='h-3 w-3 md:max-4xl:w-6 md:max-4xl:h-6' />
                                                    </button>
                                                </a>
                                                <a target='__blank' className='w-full' href={project.githubRepo}>
                                                    <button className='gap-4 justify-center items-center flex bg-zinc-700 font-bold text-bg px-5 py-2.5 rounded-2xl text-xs w-max md:max-4xl:text-lg transition-all hover:shadow-lg hover:shadow-zinc-300 hover:bg-white hover:text-text'>
                                                        <AiFillGithub className='h-3 w-3 md:max-4xl:w-6 md:max-4xl:h-6' />
                                                        GitHub Repo
                                                        <ArrowTopRightOnSquareIcon className='h-3 w-3 md:max-4xl:w-6 md:max-4xl:h-6' />
                                                    </button>
                                                </a>
                                            </div>
                                        )}
                                    </SwiperSlide >
                                </>
                            ))}
                        </Swiper >
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Projects };