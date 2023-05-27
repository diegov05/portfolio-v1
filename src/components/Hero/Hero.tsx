import React from 'react';
import images from "../../assets"

export type IHeroProps = {

}

const Hero: React.FC<IHeroProps> = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col md:max-4xl:flex-row'>
                <div className='flex flex-col gap-12 justify-start items-start w-full h-full'>
                    <div className='flex flex-col gap-3 sm:max-4xl:gap-2 text-center w-full md:max-4xl:text-start'>
                        <span className='gradient-bg-text text-base sm:max-lg:text-xl lg:max-4xl:text-2xl font-extrabold'>Let's build something amazing</span>
                        <div className='flex flex-col gap-1 sm:max-lg:gap-3 lg:max-4xl:gap-5  text-center w-full md:max-4xl:text-start h-full' >
                            <h1 className='text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold text-text'>Unlimited Possibilities</h1>
                            <h1 className='text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold text-text'>You imagine it?</h1>
                            <h1 className='gradient-bg-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>I'll build it.</h1>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:max-4xl:items-start w-full'><img className='md:max-4xl:hidden block w-64' src={images.hero} alt="" /></div>
                    <div className='p-10 flex flex-col rounded-2xl shadow-zinc-300 shadow-lg w-full md:max-4xl:w-3/4'>
                        <div className='flex flex-col opacity-70 gap-8'>
                            <h2 className='font-bold text-sm md:max-4xl:text-lg text-text'>About Me</h2>
                            <p className='font-base text-sm md:max-4xl:text-lg text-text'>Hi, my name is Diego Vargas, I'm a Full-Stack Web Developer
                                <b> specialized in the MERN Stack.</b> <span className='gradient-bg-text'><a href=''><b>Learn more about my  tech stack!</b></a></span></p>
                            <p className='font-base text-sm md:max-4xl:text-lg text-text'>I'm 19 years old, currently living in the USA.  I love to do everything
                                related in the process of building a web application, from designing,
                                to developing and finally deploying projects.</p>
                            <p className='font-base text-sm md:max-4xl:text-lg text-text'>If you would like to contact me, <span className='gradient-bg-text'>
                                <a href="">
                                    <b>
                                        click this button located in the top
                                        section of the page.
                                    </b>
                                </a>
                            </span></p>
                        </div>
                    </div>
                </div>
                <img className='hidden md:max-4xl:block w-48 h-[30rem] lg:max-4xl:h-auto lg:max-4xl:w-96' src={images.hero} alt="" />
            </div>
        </div>
    );
}

export { Hero };