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

const Htz = () => {
    return (
        <Section>
            <Container>
                <MainTitle>HTZ oprema</MainTitle>
                <Paragraph>
                    U ponudi imamo HTZ opremu poznatih proizvođača kao što su Panda, NEO, Wurth, Springer…
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda HTZ Opreme"
                    listEl={[
                        'Cipele (plitke, duboke)',
                        'Cizme (gumene, Tigar)',
                        'Zaštitne rukavice',
                        'Zaštitne naočare'
                    ]}
                    img="./images/asortiman/htz_01.jpeg"
                />
            </Container>
        </Section>
    )
}

export default Htz;