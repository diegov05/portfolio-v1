import React from 'react';

import { Hero, Navbar } from '../../components';

export type IHeaderProps = {

}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <div className='w-full'>
            <Navbar />
            <Hero />
        </div>
    );
}

export { Header };