import React from 'react';
import "./App.css"

import { Header, HiringInfo, Footer, Projects } from './containers';
import { topography } from './assets';


export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <div className='absolute -top-56 sm:-top-48 md:-top-60 lg:-top-60 xl:-top-80 opacity-60 rounded-full sm:left-24 md:left-28 lg:left-36 xl:left-80 blur-3xl w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-800' />
      <div className='absolute xs:w-52 xs:top-64 xs:-right-52 s:top-96 s:-right-48 sm:top-96 sm:-right-48 md:top-96 md:-right-48 lg:top-96 lg:-right-36 xl:w-96 xl:h-96 xl:top-96 xl:-right-72 opacity-60 rounded-full blur-3xl w-60 h-60 bg-violet-800' />
      <div className='absolute -z-10 xs:-left-[55rem] xs:top-[40rem] s:-left-[55rem] sm:-left-[50rem] md:-left-[50rem] s:max-3xl:top-[50rem] lg:max-3xl:-left-[40rem] xl:w-[60rem] xl:h-[60rem] xl:top-[50rem] xl:-left-[40rem] opacity-80 blur-[15rem] w-[60rem] h-[60rem] bg-sky-700' />
      <div className='absolute -z-10 lg:h-[80rem] lg:w-[80rem] xl:w-[100rem] xl:h-[100rem] xl:top-[50rem] xl:-left-[40rem] opacity-80'>
        <img className='opacity-50 w-[100rem] h-[130rem]' src={topography} alt="" />
      </div>
      <div className='flex flex-col gap-12 p-12 md:p-16 lg:p-24 xl:px-36 xl:py-16'>
        <Header />
        <HiringInfo />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export { App };
