// import toolsLogos from '../assets/toolsLogosData.js'
import toolsLogos from '../assets/toolsLogos'
import styled from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import PartnerIcon from "./PartnerIcon"

const Section = styled.section`
    width: 100%;
    padding: 3rem 0;
    background-color: #fff;
    color: #242424;
`

const Inner = styled.div`
    width: 80%;
    margin: 0 auto;

    @media(max-width: 768px) {
        width: 90%;
    }
`

const Container = styled.section`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`

export default function Partner() {

    return (
        <Section>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={true}>
            <Inner>
                {/* <h2>Naši partneri</h2> */}
                <Container>
                {
                    toolsLogos.map(item => {
                        return (
                            <PartnerIcon key={item.id} img={item.img} alt={item.alt} />
                        )
                    })
                }
                </Container>
            </Inner>
            </AnimationOnScroll>
        </Section>
    )
}
