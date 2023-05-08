import React from 'react';
import "./App.css"

import { Header, HiringInfo, Footer, Projects } from './containers';

export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  return (
    <>
      <div className='p-4'>
        <Header />
        <HiringInfo />
        <Footer />
        <Projects />
      </div>
    </>
  );
}

export { App };
