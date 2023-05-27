import React, { useEffect, useRef, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Hero, Navbar } from '../../components';
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
import images from "../../assets"
import { FiCodepen, FiCodesandbox } from 'react-icons/fi';


export type IHeaderProps = {

}

const Header: React.FC<IHeaderProps> = () => {


    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);


    const handleToggleMenu = () => {
        if (isMenuVisible) {
            setIsMenuToggled(false)
            setTimeout(() => {
                setIsMenuVisible(false)
            }, 500)
            return
        }
        setIsMenuToggled(true)
        setIsMenuVisible(true)
    }

    const handleClickOutsideMenu = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuToggled(false);
            setTimeout(() => {
                setIsMenuVisible(false);
            }, 500);
        }
    };

    const handleScroll = () => {
        setIsMenuToggled(false);
        setTimeout(() => {
            setIsMenuVisible(false);
        }, 500);
    };

    useEffect(() => {
        if (isMenuVisible) {
            document.addEventListener('mousedown', handleClickOutsideMenu);
            window.addEventListener('scroll', handleScroll);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideMenu);
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuVisible]);

    return (
        <>
            <img className='absolute -top-48 w-96 -left-48 opacity-40' src={images.gradient} alt="" />
            {isMenuVisible && <div ref={menuRef} className={`${isMenuToggled ? "slide-in-right" : ""} ${!isMenuToggled ? "slide-out-right" : ""} md:max-4xl:hidden fixed bg-text right-0 shadow-lg shadow-zinc-300 w-[75vw] h-screen p-6 xs:p-8 flex flex-col gap-12 z-50`}>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-bg font-black text-lg xs:text-2xl md:max-4xl:text-4xl'>Menu</h1>
                    <button onClick={handleToggleMenu} className='md:max-4xl:hidden flex gradient-bg w-min h-min px-2 py-1 rounded-2xl text-bg'>
                        <XMarkIcon className='w-4 h-4' />
                    </button>
                </div>
                <div className='flex flex-col gap-6'>
                    <a href="">
                        <div className='flex flex-col justify-start items-center px-5 py-3 rounded-2xl'>
                            <span className='flex flex-row gap-2 xs:max-4xl:gap-6 text-sm xs:text-base font-bold text-bg'>
                                <span className='gradient-bg-text'>01. </span>
                                Work
                            </span>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex flex-col justify-start items-center px-5 py-3 rounded-2xl'>
                            <span className='flex flex-row gap-2 xs:max-4xl:gap-6 text-sm xs:text-base font-bold text-bg'>
                                <span className='gradient-bg-text'>02. </span>
                                About
                            </span>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex flex-col justify-start items-center px-5 py-3 rounded-2xl'>
                            <span className='flex flex-row gap-2 xs:max-4xl:gap-6 text-sm xs:text-base font-bold text-bg'>
                                <span className='gradient-bg-text'>03. </span>
                                Projects
                            </span>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex flex-col justify-start items-center px-5 py-3 rounded-2xl'>
                            <span className='flex flex-row gap-2 xs:max-4xl:gap-6 text-sm xs:text-base font-bold text-bg'>
                                <span className='gradient-bg-text'>04. </span>
                                Tech Stack
                            </span>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex flex-col justify-start items-center px-5 py-3 rounded-2xl'>
                            <span className='flex flex-row gap-2 xs:max-4xl:gap-6 text-sm xs:text-base font-bold text-bg'>
                                <span className='gradient-bg-text'>05. </span>
                                Contact
                            </span>
                        </div>
                    </a>
                    <button className='gradient-bg font-bold text-bg px-5 py-2.5 rounded-2xl text-xs md:max-4xl:text-lg'>Resume</button>
                </div>
                <div className='w-full flex flex-col justify-center items-center text-bg'>
                    <div className='flex flew-row gap-2 justify-center items-center'>
                        <a href="https://github.com/diegov05" target='__blank'>
                            <AiFillGithub className="w-4 h-4 transition-all hover:text-bg-secondary" />
                        </a>
                        <a href="https://codesandbox.io/u/diegov05" target='__blank'>
                            <FiCodesandbox className="w-4 h-4 transition-all hover:text-bg-secondary" />
                        </a>
                        <a href="https://codepen.io/diegov05" target='__blank'>
                            <FiCodepen className="w-4 h-4 transition-all hover:text-bg-secondary" />
                        </a>
                        <a href="https://www.linkedin.com/in/diegovs05" target='__blank'>
                            <AiOutlineLinkedin className="w-5 h-5 transition-all hover:text-bg-secondary" />
                        </a>
                    </div>
                </div>
            </div>}
            <div className={`${isMenuToggled ? "blur-sm" : "blur-none"} flex flex-col py-10 px-10 sm:max-4xl:px-20 gap-24 overflow-hidden transition-all duration-500`}>
                <div className='flex flex-row justify-between items-start'>
                    <Navbar />
                    <button onClick={handleToggleMenu} className='md:max-4xl:hidden flex gradient-bg w-min h-min px-2 py-2 rounded-2xl text-bg'>
                        <Bars3Icon className='w-4 h-4' />
                    </button>
                </div>
                <Hero />
            </div>
        </>
    );
}

export { Header };