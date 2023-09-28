import styled from 'styled-components'
import Flex from './StyledComponents/FlexStyled'
import H1 from './StyledComponents/H1Styled'
import Paragraph from './StyledComponents/ParagraphStyled'


import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

// const Section = styled.section`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 3rem 1rem;
//     border-radius: 5px;
//     background-color: rgba(0,0,0,0.5);
//     color: #fff;
//     backdrop-filter: blur(5px);

//     @media(max-width: 600px) {
//         padding: 2rem 1rem;
//     }
// `

// const Title = styled.h1`
//     text-align: center;
//     margin-bottom: 1.2rem;

//     @media(max-width: 600px) {
//         font-size: 1.6rem;
//     }
// `

// const Paragraph = styled.p`
//     margin-bottom: 0.6rem;

//     @media(max-width: 600px) {
//         font-size: 1rem;
//     }
// `

const StyledLink = styled(Link)`
    color: #fff;
    background-color: var(--red);
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 2rem;
    border: 1px solid var(--red);
    margin-top: 2rem;
    border-radius: 24px;
    opacity: 0.8;
    transition: .2s linear;

    &:hover {
        opacity: 1;
    }
`

const Hero = () => {
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);
    return (
            <Flex $filter $padding $bg style={{background: "url('./images/asortiman/wire_1.jpg') contain"}} >
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <H1 $center>Gvožđara u tvom komšiluku</H1>
                        <Paragraph>
                                <span style={{fontSize: '2rem'}}>DOBRODOŠLI</span> u svet žica, mreža, pletiva, sita, kompletnog gvožđarskog i farbarskog 
                                asortimana kao i mnoge opreme za domaćinstvo...
                        </Paragraph>
                        <Paragraph>
                            Naš tim stručnjaka je tu da Vam pomogne pronaći najbolje rešenje za Vaše potrebe. 
                            Posetite nas danas i uverite se u našu široku ponudu i kvalitet usluge.
                        </Paragraph>
                        
                        <StyledLink to="/artikli">Pogledaj ponudu</StyledLink>
                </AnimationOnScroll>
            </Flex>
    )
}

export default Hero;