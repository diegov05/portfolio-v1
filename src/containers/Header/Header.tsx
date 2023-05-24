import React from 'react';

import { Hero, Navbar } from '../../components';

export type IHeaderProps = {

}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
        </div>
    );
}

export { Header };