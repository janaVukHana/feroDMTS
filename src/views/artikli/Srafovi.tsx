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

const Srafovi = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Šrafovska Roba</MainTitle>
                <Paragraph>
                    U našoj ponudi imamo vijke raznih proizvođača i različitog kvaliteta 5.6, 8.8, 10.9
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Ponuda Šrafovi"
                    listEl={[
                        'Mašinski vijak 5.6 ili 8.8 (051 ili 053)',
                        'Torban vijak',
                        'Iver vijak',
                        'Vijak za drvo',
                        'Gips vijci',
                        'Lim vijci',
                        'Anker vijci',
                        'SPECIJALNE VRSTE VIJAKA:',
                        'Matice, podloške, kuke različitih dimenzija',
                        'Navojne šipke od M4 do M32',
                        'TIPLE RAZLIČITIH DIMENZIJA I PROIZVOĐAČA'
                    ]}
                    img="./images/asortiman/srafovi_00.png"
                />
            </Container>
        </Section>
    )
}

export default Srafovi;