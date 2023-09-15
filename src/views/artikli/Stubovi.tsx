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

const Stubovi = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Stubovi, španeri, lanci, sajle</MainTitle>
                <Paragraph>
                    Betonski stub je visoko kvalitetne izrade sa trostruko upredenim
                    čeličnim žicama, poseduje elastičnost koja doprinosi dužem veku 
                    trajanja i nije sklon pucanju pri velikim opterecenjima...
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title='(a) Stub metalni plastificiran Ø 5/4" različitih visina:'
                    listEl={[
                        '1.50 m - (za ogradu visine od 1.0 m do 1.2 m)',
                        '1.75 m - (za ogradu visine od 1.2 m do 1.5 m)',
                        '2.00 m - (za ogradu visine od 1.5 m)',
                        '2.50 m - (za ogradu visine od 2.0 m)'
                    ]}
                    img="./images/asortiman/stubovi.jpg"
                />
            </Container>

            <Container>
                <Artikal 
                    title='(b) Betonski stubovi:'
                    listEl={[
                        'Stub betonski 7×7×205 cm',
                        'Stub betonski 7x7x250'
                    ]}
                    img="./images/asortiman/stubovi.jpg"
                />
            </Container>

            <Container>
                <Artikal 
                    title='Ostalo:'
                    listEl={[
                        'Spaneri veci, manji, za sajle i razne namene...',
                        'Lanci',
                        'Sajle',
                        'Kanapi',
                        'Uzad',
                        'RAZNE VELICINE I NAMENE'
                    ]}
                    img="./images/asortiman/stubovi.jpg"
                />
            </Container>
        </Section>
    )
}

export default Stubovi;