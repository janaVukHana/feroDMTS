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

const Plastika = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Domaćinstvo i Plasika</MainTitle>
                <Paragraph>
                    U ponudi imamo ručni alat poznatih proizvođača kao što su Modex, Festa, Topex, Muta, Unior…
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Domaćinstvo i Plastika"
                    listEl={[
                        'Dimovodni program',
                        'Burad, baloni, kace',
                        'Merdevine AL i sa širokim gazištima',
                        'Kolica i delovi za kolica',
                        'Metle, četke',
                        'Plastične posude, kofe, skafovi',
                        'Kotlići, oranije, breneri, plamenici',
                        'Pojilice, hranilice, PVC posude'
                    ]}
                    img="./images/asortiman/domacinstvo_00.png"
                />
            </Container>
        </Section>
    )
}

export default Plastika;