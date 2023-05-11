import React from 'react';

import { Hero, Navbar } from '../../components';

export type IHeaderProps = {

}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className='w-full flex flex-col gap-2'>
            <Navbar />
            <Hero />
        </div>
    );
}

export { Header };