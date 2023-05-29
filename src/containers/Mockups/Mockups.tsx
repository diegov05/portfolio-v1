import { FC } from 'react'
import images from "../../assets"

const Mockups: FC = () => {
    return (
        <div className='flex flex-col items-center gap-24 py-10 px-10 sm:max-4xl:px-20'>
            <div data-aos="fade-right" className='flex flex-col gap-1 sm:max-lg:gap-3 lg:max-4xl:gap-5 text-center w-full s:max-4xl:text-start h-full'>
                <h1 className='text-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>Responsive Web Design</h1>
                <h1 className='text-text text-2xl sm:max-lg:text-4xl lg:max-4xl:text-6xl font-extrabold'>At Its <span className='gradient-bg-text'>Finest</span></h1>
                <h2 data-aos="fade-right" data-aos-delay="300" data-aos-anchor-placement="" className='text-accent-color text-base sm:max-lg:text-xl lg:max-4xl:text-2xl font-extrabold'>Scroll to switch device!</h2>
            </div>
            <div>
                <img data-aos="fade-up" data-aos-delay="300" src={images.phone} alt="phone" className='w-[30rem]' />
            </div>
        </div >
    )
}

export { Mockups };