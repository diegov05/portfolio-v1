import React from 'react';
import "./App.css"

import { Header, HiringInfo, Footer, Projects } from './containers';

export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <div className='flex flex-col gap-12 p-12'>
        <Header />
        <HiringInfo />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export { App };
