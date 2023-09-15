    import styled from 'styled-components'
    import {AnimationOnScroll} from 'react-animation-on-scroll'

    import Carousel from "./Carousel";

    const Section = styled.section`
        width: 100%;
        padding: 3rem 0;
        background-color: #fff;
        color: #242424;
        // background: rgb(36,36,36);
        background: linear-gradient(180deg, rgba(26,55,77,1) 0%, rgba(255,255,255,1) 100%);
    `

    const Inner = styled.div`
        width: 80%;
        margin: 0 auto;

        @media(max-width: 768px) {
            width: 90%;
        }
    `

    const Container = styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: strech;
        gap: 2rem;

        @media(max-width: 968px) {
            flex-direction: column;
        }
    `

    const Flex = styled.div`
        flex: 1 1 100%;
    `

    const Title = styled.h2`
        font-size: 2.4rem;
        margin-bottom: 1.2rem;
    `

    const Paragraph = styled.p`
        margin-bottom: 0.8rem;
    `

    const Span = styled.span`
        font-weight: 700;
    `

    export default function Ogradjivanje() {
        return (
            <Section className="light-section">
                <Inner className="inner-container">
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={true}>
                        <Container>
                            <Flex>
                                <Title>Ograde i ograđivanje</Title>
                                <Paragraph>
                                U našem asortimanu proizvoda nudimo <Span>kompletan program materijala za 
                                ograđivanje</Span> (stubove, žice, pletiva, španere...).
                                </Paragraph>
                                <Paragraph>
                                Kao posebnu uslugu za naše kupce nudimo mogućnost kompletnog ograđivanja prostora 
                                i izradu kapija ukoliko kupci nisu već unapred obezbedili izvođača radova.
                                </Paragraph>
                            </Flex>
                            <Flex>
                                <Carousel />
                            </Flex>
                        </Container>
                    </AnimationOnScroll>
                </Inner>
            </Section>
        )
    }