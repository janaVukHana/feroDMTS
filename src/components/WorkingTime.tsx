import styled from 'styled-components'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import Flex from './StyledComponents/FlexStyled'

const SectionTime = styled.section`
    width: 100%;
    margin-bottom: 2rem;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
`
    
const Paragraph = styled.p`
    display: flex;
    justify-content: space-between;
    background-color: var(--light-blue);
    color: #242424;
    width: 100%;
    max-width: 600px;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    
    &:nth-of-type(2) {
        background-color: #fff;
    }
`

const WorkingTime = () => {
    return (
        <Flex>
            <SectionTime>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={false}>
                            <Title>Radno Vreme</Title>
                            <Paragraph>Ponedeljak - Petak <span>07:00 - 16:00 (Novi Sad)</span></Paragraph>
                            <Paragraph>Ponedeljak - Petak <span>07:00 - 17:00 (Kikinda)</span></Paragraph>
                            <Paragraph>Subota <span>07:00 - 14:00</span></Paragraph>
                            <Paragraph>Nedelja <span>Neradan dan</span></Paragraph>
                </AnimationOnScroll>
                {/* kikinda radno vreme od 7 do 17 */}

            </SectionTime>
        </Flex>
    )
}

export default WorkingTime;