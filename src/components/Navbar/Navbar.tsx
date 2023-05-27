import React from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiCodesandbox, FiCodepen } from "react-icons/fi"

export type INavbarProps = {

}

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <>
            <div className='flex flex-row justify-between items-start w-full'>
                <div className='flex flex-col gap-4 lg:gap-2 xl:gap-2'>
                    <h1 className='text-text font-black text-xl md:max-4xl:text-2xl'>Diego Vargas</h1>
                    <div className='flex flex-row gap-2 justify-start items-center text-text/40'>
                        <a href="https://github.com/diegov05" target='__blank'>
                            <AiFillGithub className="w-4 h-4 transition-all hover:text-text" />
                        </a>
                        <a href="https://codesandbox.io/u/diegov05" target='__blank'>
                            <FiCodesandbox className="w-4 h-4 transition-all hover:text-text" />
                        </a>
                        <a href="https://codepen.io/diegov05" target='__blank'>
                            <FiCodepen className="w-4 h-4 transition-all hover:text-text" />
                        </a>
                        <a href="https://www.linkedin.com/in/diegovs05" target='__blank'>
                            <AiOutlineLinkedin className="w-5 h-5 transition-all hover:text-text" />
                        </a>
                    </div>
                </div>
                <button className='hidden md:max-4xl:flex gradient-bg font-bold text-bg px-5 py-2.5 rounded-2xl text-base md:max-4xl:text-lg'>Contact Me</button>
            </div>
        </>
    );
}

export { Navbar };