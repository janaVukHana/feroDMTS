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

const Moleraj = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Boje, farbe i molerski program</MainTitle>
                <Paragraph>
                    U ponudi imamo boje i farbe poznatih proizvođača kao što su TKK, Mimont, Tesa, Henkel, Chemax, JUB, Irkom, HGP…
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Molerskog Alata"
                    listEl={[
                        'Silikoni, pur pene, razni lepkovi',
                        'Boje i lakovi raznih namena',
                        'Četke, valjci, špahtle',
                        'Poludisperzije, disperzije, fasadne boje',
                        'Krep trake, izolir trake i trake za druge namene',
                        'Premazi, podloge, ispune, sprejevi, šmirgle',
                        'Razređivači'
                    ]}
                    img="./images/asortiman/boje_farbe_01.jpg"
                />
            </Container>
        </Section>
    )
}

export default Moleraj;