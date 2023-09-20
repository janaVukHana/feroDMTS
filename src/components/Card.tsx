import styled from 'styled-components'
import H2 from './StyledComponents/H2'
import Paragraph from './StyledComponents/Paragraph'

import { useState, useEffect } from 'react'
import asortiman from '../assets/asortiman'
import {Link} from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const CardItem = styled.div`
    flex: 1 1 100%;
    max-width: 650px;
    align-self: center;
    margin-bottom: 2rem;
`
    
const Flex = styled.div`
    padding: 1rem;
    background-color: #fff;
    border-radius: 24px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 24px;

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: stretch;
    }
`
const ImgDiv = styled.div`
    background-color: #fff;
    margin-left: -30px;
    margin-right: 16px;
    border-radius: 24px;
    overflow: hidden;

    @media(max-width: 600px) {
        margin-left: 0;
        margin-right: 0;
        margin-top: -30px;
        margin-bottom: 16px;
    }
`

const Img = styled.img`
    max-width: 200px;
    width: 100%;
    height: 150px;
    object-fit: cover;
    vertical-align: middle;

    @media(max-width: 600px) {
        max-width: 600px;
    }
`

const DescriptionDiv = styled.div`
    flex: 1;
    width: 100%;
`

const StyledLink = styled(Link)`
    display: inline-block;
    background-color: var(--red);
    border: 1px solid var(--red);
    border-radius: 6px;
    font-weight: 700;
    color: #fff;
    padding: 0.5rem 1.5rem;
    transition: 0.2s linear;
    cursor: pointer;
    opacity: 0.8;
    text-decoration: none;

    &:hover {
        opacity: 1;
    }
`
const Card = () => {
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {asortiman.map(item => {
                return (
                    <CardItem key={item.title}>
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                            <Flex>
                                <ImgDiv>
                                    <Img src={item.img} alt={item.title} />
                                </ImgDiv>
                                <DescriptionDiv>
                                    <H2 $color>{item.title}</H2>
                                    <Paragraph $color>{item.opis}</Paragraph>
                                    <StyledLink to={item.link}>Pogledaj proizvode</StyledLink>
                                </DescriptionDiv>
                            </Flex>
                        </AnimationOnScroll>
                    </CardItem>
                )
            })}            
        </>
    )
}

export default Card;