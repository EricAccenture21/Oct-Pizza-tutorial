import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtn, HeroItems } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
       <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
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
