import React from 'react';
import "./App.css"
import { Header, Footer, Projects, Mockups } from './containers';
import { Technologies } from './components';
import AOS from "aos"
import "aos/dist/aos.css"

export type IAppProps = {

}

const App: React.FC<IAppProps> = () => {
  AOS.init()

  return (
    <div className='flex flex-col gap-24 p-0 m-0'>
      <Header />
      <Projects />
      <Technologies />
      <Mockups />
      <Footer />
    </div>
  );
}

export { App };
