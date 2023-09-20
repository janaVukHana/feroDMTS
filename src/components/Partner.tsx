// import toolsLogos from '../assets/toolsLogosData.js'
import toolsLogos from '../assets/toolsLogos'
// Styles
import Section from './StyledComponents/Section'
import Container from './StyledComponents/Container'
import Flex from './StyledComponents/Flex'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import PartnerIcon from "./PartnerIcon"

const Partner = () => {

    return (
        <Section>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={true}>
            <Container>
                {/* <h2>Naši partneri</h2> */}
                <Flex $gap $wrap $justify="start" $rowsm>
                {
                    toolsLogos.map(item => {
                        return (
                            <PartnerIcon key={item.id} img={item.img} alt={item.alt} />
                        )
                    })
                }
                </Flex>
            </Container>
            </AnimationOnScroll>
        </Section>
    )
}

export default Partner;