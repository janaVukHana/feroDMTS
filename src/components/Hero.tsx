import styled from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    backdrop-filter: blur(5px);

    @media(max-width: 600px) {
        padding: 2rem 1rem;
    }
`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 1.2rem;

    @media(max-width: 600px) {
        font-size: 1.6rem;
    }
`

const Paragraph = styled.p`
    margin-bottom: 0.6rem;

    @media(max-width: 600px) {
        font-size: 1rem;
    }
`

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
            <Section>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Title>Gvožđara u tvom komšiluku</Title>
                        <Paragraph>
                                Dobrodošli u našu gvožđaru! Kod nas možete pronaći sve vrste metalnih materijala 
                                za Vaše projekte, uključujući čelične šipke, cevi, limove, žice, ograde, kapije i 
                                još mnogo toga.
                            </Paragraph>
                            <Paragraph>
                                Naš tim stručnjaka je tu da Vam pomogne pronaći najbolje rešenje za Vaše potrebe. 
                                Posetite nas danas i uverite se u našu široku ponudu i kvalitet usluge.
                            </Paragraph>
                            
                            <StyledLink to="/artikli">Pogledaj ponudu</StyledLink>
                </AnimationOnScroll>
            </Section>
    )
}

export default Hero;