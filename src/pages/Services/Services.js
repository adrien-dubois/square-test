import React from 'react';
import { InfoSection } from '../../components';
import Pricing from '../../components/Pricing/Pricing';
import { homeObjThree } from './Data';

const Services = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjThree} />   
        </>
    );
};

export default Services;