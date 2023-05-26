import React from 'react';
import "./App.css"

import { Header, Footer, Projects } from './containers';

export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {

  return (
    <div className='flex flex-col gap-24 p-0 m-0'>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export { App };
