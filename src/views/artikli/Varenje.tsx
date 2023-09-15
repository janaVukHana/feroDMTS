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

const Varenje = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Brusno Rezni i Varilacki Program</MainTitle>
                <Paragraph>
                    Flexco, Scorpio, Duke, Dronco, Jasenice, Oerlikon, Varstroj, Wurth…                
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Varilačkog i Reznog Alata"
                    listEl={[
                        'Brusne i rezne ploče svih dimenzija',
                        'Elektrode različitih vrsta',
                        'Maske, stakla, naočare',
                        'CO2 žica za varenje'
                    ]}
                    img="./images/asortiman/varilacki_program.jpeg"
                />
            </Container>
        </Section>
    )
}

export default Varenje;