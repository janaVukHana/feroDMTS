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

const Alat = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Ručni Alat</MainTitle>
                <Paragraph>
                    U ponudi imamo ručni alat poznatih proizvođača kao što su Modex, Festa, Topex, Muta, Unior…
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Ručnog Alata"
                    listEl={[
                        'Zidarski (fangle, ferdaske, kofe, mistrije...)',
                        'Keramičarski alati',
                        'Baštenski (lopate, ašovi, sekire, grablje...)',
                        'Električarski alati',
                        'Mehaničarski alati'
                    ]}
                    img="./images/asortiman/tool_3.jpg"
                />
            </Container>
        </Section>
    )
}

export default Alat;