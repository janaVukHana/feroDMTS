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

const Stolarija = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Stolarski i Bravarski program</MainTitle>
                <Paragraph>
                    U ponudi imamo brave i okove poznatih proizvođača kao što su FOM, Rapid, BANE                
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Stolarije i Bravarije"
                    listEl={[
                        'Okovi',
                        'Kvake',
                        'Brave',
                        'Cilindri',
                        'Katanci'
                    ]}
                    img="./images/asortiman/stolarija_00.png"
                />
            </Container>
        </Section>
    )
}

export default Stolarija;