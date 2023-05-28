import React, { useEffect, useRef } from 'react';
import "./Technologies.css"
import { FaReact } from "react-icons/fa"

export type ITechnologiesProps = {

}

const Technologies: React.FC<ITechnologiesProps> = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = containerRef.current;
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className='flex flex-col gap-12 pl-10 sm:max-4xl:pl-20'>
            <div className='flex flex-row justify-start items-center gap-24 shadow-lg rounded-l-2xl shadow-zinc-300 p-5 xs:max-md:p-10 md:max-4xl:p-32 md:max-4xl:pr-0'>
                <div className='flex flex-col gap-4 w-2/4'>
                    <h1 className='gradient-bg-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>Tech Stack</h1>
                    <p className='text-base sm:max-lg:text-xl lg:max-4xl:text-2xl font-medium'>Technologies I use to
                        design, build and deploy
                        amazing web pages</p>
                </div>
                <div className='slide-in-fwd-center flex flex-col gap-4 s:max-md:gap-8 md:max-4xl:gap-16 w-2/4'>
                    <div className='flex flex-row justify-between items-center'>
                        <div ref={containerRef} className="no-scrollbar relative flex flex-row items-center overflow-x-auto">
                            <div className="flex flex-row overflow-x-visible gap-4 p-10 pr-0">
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                                <div className='flex flew-row justify-center items-center text-bg gap-6 p-10 gradient-bg rounded-2xl shadow-xl shadow-zinc-300'>
                                    <FaReact className="w-10 h-10" />
                                    <span className='text-xl font-extrabold'>React</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Technologies };