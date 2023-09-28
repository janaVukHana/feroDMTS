import styled from 'styled-components'
import Flex from './StyledComponents/FlexStyled'
import H2 from './StyledComponents/H2Styled'

import { useState, useEffect } from 'react'
import asortiman from '../assets/asortiman'
import {Link} from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const CardItem = styled.div`
    flex: 0 0 30%;

    @media(max-width: 992px) {
        flex: 0 0 45%;
    }
`

const CardContainer = styled.div`
    position: relative;
    background-color: #fff;
    padding-bottom: 3rem;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #242424;
`

const Img = styled.img`
    width: 100%;
    max-width: 100%;
    height: 200px;
    vertical-align: middle;
    object-fit: cover;
`

const CardContent = styled.div`
    padding: 0.5rem;
`

const StyledLink = styled(Link)`
    display: block;
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
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;

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
        <Flex $gap $wrap $stretch $justify='start'>
            {asortiman.map(item => {
                return (
                    <CardItem key={item.title}>
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                            <CardContainer>
                                <Img src={item.img} alt={item.title} />
                                <CardContent>
                                    <H2 $color>{item.title}</H2>
                                    <StyledLink to={item.link}>Istrazi</StyledLink>
                                </CardContent>
                            </CardContainer>
                        </AnimationOnScroll>
                    </CardItem>
                )
            })}            
        </Flex>
    )
}

export default Card;