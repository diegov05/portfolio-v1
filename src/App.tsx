import React from 'react';
import "./App.css"

import { Header, HiringInfo, Footer, Projects } from './containers';

export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <div className='absolute -top-56 sm:-top-48 md:-top-60 lg:-top-60 xl:-top-80 opacity-60 rounded-full sm:left-24 md:left-28 lg:left-36 xl:left-80 blur-3xl w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-800' />
      <div className='fixed xs:w-52 xs:top-64 xs:-right-48 s:top-96 s:-right-48 sm:top-96 sm:-right-48 md:top-96 md:-right-48 lg:top-96 lg:-right-36 xl:w-96 xl:h-96 xl:top-96 xl:-right-72 opacity-60 rounded-full blur-3xl w-60 h-60 bg-violet-800' />
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
