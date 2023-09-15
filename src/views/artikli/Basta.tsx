import styled from "styled-components";
import Artikal from "../../components/Artikal";

const Section = styled.section`
    padding: 3rem 0;
    margin-top: 55px;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    @media(max-width: 600px) {
        width: 95%;
    }
`

const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`
const Paragraph = styled.p`
    font-size: 1.2rem;
`

const Basta = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Baštenski program</MainTitle>
                <Paragraph>
                    U ponudi imamo...........................
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Baštenska oprema" 
                    listEl={[
                        'Lopatice, grabljice',
                        'Creva za zalivanje (kotur ili na merenje)',
                        'Prskalice ili kante za zalivanje',
                        'Ograde za baštu',
                        'Saksije i humus',
                        'Baštenski stapovi i pritke raznih dimenzija',
                        'Baštenske makaze (voće, živa ograda, ruže...)'
                    ]} 
                    img="./images/asortiman/bastenski_program_08.png"
                />
            </Container>
        </Section>
    )
}

export default Basta;