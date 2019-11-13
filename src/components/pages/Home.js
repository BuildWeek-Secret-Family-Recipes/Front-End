import React from 'react';

import Nav from '../layout/Nav'
import Dining from '../../assets/img/dining.png';

const Home = () => {
    return (
        <div>
            <Nav />
            <img src={Dining} alt='Family Dining' />
            <p>Coming soon!</p>
        </div>
    )
}

export default Home
