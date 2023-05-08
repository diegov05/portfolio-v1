import React from 'react';
import "./App.css"

import { Header, HiringInfo, Footer, Projects } from './containers';

export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <div className='absolute -top-56 sm:-top-48 md:-top-60 lg:-top-60 xl:-top-80 opacity-60 rounded-full sm:left-24 md:left-28 lg:left-36 xl:left-80 blur-3xl w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-blue-800'></div>
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
