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

const ElektroMaterijal = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Elektro Materijal</MainTitle>
                <Paragraph>
                    U ponudi imamo elektro materijal poznatih proizvođača kao što su ELCO, ALING, OSRAM, TUNSGRAM…
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Elektro Materijala"
                    listEl={[
                        'Kablovi i produžni kablovi',
                        'Sijalice, grla i prekidači',
                        'Utičnice i osigurači'
                    ]}
                    img="./images/asortiman/elektro_01.jpeg"
                />
            </Container>
        </Section>
    )
}

export default ElektroMaterijal;