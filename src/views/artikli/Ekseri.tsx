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

const Ekseri = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Ekseri</MainTitle>
                <Paragraph>
                    U ponudi imamo...........................
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Eksera" 
                    listEl={[
                        'Građevinski ekseri: dimenzija Ø2.8 ÷ 6.0mm (od 50mm do 240mm)',
                        'Sitni ekseri : od Ø1.2 ÷ 2.5mm (od 16mm do 50mm)',
                        'Specijalni ekseri  Ø1.0mm (od 13mm do 16mm)',
                        'Cu i Zn ekseri za tegole',
                        '“U”,"G", plavi ekseri',
                        'Spiralni ekseri (za palete)',
                        'Šaržirani ekseri (za palete)',
                        'Ukrasni ekser (mesing,bronza)',
                        'NAPOMENA: Ekseri se prodaju po kg ili na pakovanje.'
                    ]} 
                    img="./images/asortiman/ekseri.png"
                 />
            </Container>
        </Section>
    )
}

export default Ekseri;