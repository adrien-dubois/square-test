import React from 'react';
import { InfoSection } from '../../components';
import Pricing from '../../components/Pricing/Pricing';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />   
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjOne} />   
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjThree} />   
        </>
    );
};

export default Home;
