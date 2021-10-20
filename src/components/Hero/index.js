import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtn, HeroItems } from './HeroElements';

const Hero = () => {
    return (
       <HeroContainer>
        <Navbar />
        <HeroContent>
            <HeroItems>
            <HeroH1>GREATNESS IN PIZZA</HeroH1>
            <HeroP>ONE MINUTE OR LESS</HeroP>
            <HeroBtn>Order NOW</HeroBtn>
            </HeroItems>
        </HeroContent>
       </HeroContainer>
    );
};

export default Hero;
