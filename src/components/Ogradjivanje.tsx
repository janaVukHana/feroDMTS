    // Styles
    import styled from 'styled-components'
    import Section from './StyledComponents/SectionStyled'
    import Container from './StyledComponents/ContainerStyled'
    import Flex from './StyledComponents/FlexStyled'
    import H2 from './StyledComponents/H2Styled'
    import Paragraph from './StyledComponents/ParagraphStyled'

    import {AnimationOnScroll} from 'react-animation-on-scroll'

    import Carousel from "./Carousel";

    const FlexItem = styled.div`
        flex: 1 1 100%;
    `

    const Span = styled.span`
        font-weight: 700;
    `

    const Ogradjivanje: React.FC = () => {
        return (
            <Section $isGradient >
                <Container>
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={true}>
                        <Flex $gap $stretch>
                            <FlexItem>
                                <H2>Ograde i ograđivanje</H2>
                                <Paragraph>
                                U našem asortimanu proizvoda nudimo <Span>kompletan program materijala za 
                                ograđivanje</Span> (stubove, žice, pletiva, španere...).
                                </Paragraph>
                                <Paragraph>
                                Kao posebnu uslugu za naše kupce nudimo mogućnost kompletnog ograđivanja prostora 
                                i izradu kapija ukoliko kupci nisu već unapred obezbedili izvođača radova.
                                </Paragraph>
                            </FlexItem>
                            <FlexItem>
                                <Carousel />
                            </FlexItem>
                        </Flex>
                    </AnimationOnScroll>
                </Container>
            </Section>
        )
    }

    export default Ogradjivanje;