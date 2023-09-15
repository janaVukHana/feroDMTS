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
    margin-bottom: 1.5rem;
`

const H2 = styled.h2`
    margin-bottom: 1.4rem;
`

const List = styled.ul`
    margin-bottom: 2rem;
`

const Li = styled.li`
    margin-bottom: 1rem;
`

const HR = styled.hr`
    margin-bottom: 2rem;
`

const Zica = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Žice, Pletiva, Mreže, Sita</MainTitle>
                <Paragraph>
                    Nudimo široku paletu žica, pletiva, mreža i sita za različite namene. Bilo da Vam treba 
                    zaštitna ograda, ograđivanje dvorišta ili voćnjaka, zaštita od insekata ili neka 
                    druga primena, mi imamo sve što Vam treba. 
                    Naši proizvodi su visokog kvaliteta i ispunjavaju najviše standarde industrije.                
                </Paragraph>
            </Container>
            <Container>
                <Artikal 
                    title="Žica paljena"
                    listEl={[
                        'paljena žica Ø 0.8 mm (cvećarska)',
                        'paljena žica Ø 1.2 mm (armiracka)',
                        'paljena žica Ø 2.0 mm (tesarska)',
                        'paljena žica Ø 3.1 mm (tesarska)'
                    ]}
                    img="./images/asortiman/zica.jpg"
                />
            </Container>
            <Container>
                <H2>Žica pocinkovana</H2>
                <List><Li>pocinkovana žica Ø 0.7 - 4.0 mm</Li></List>
                <HR />
                <H2>Žica PVC</H2>
                <List><Li>plastificirana žica Ø 1.8 - 3.1 mm</Li></List>
                <HR />
                <H2>Pletiva</H2>
                <Paragraph>
                    Sva pletiva izrađujemo po merama i želji naših kupaca... Visinu i dužinu pletiva kao i ostale 
                    karakteristike određuju naši cenjeni potrošači, a mi smo tu da im te zahteve ispunimo i u potpunosti ispoštujemo.
                </Paragraph>
                <HR />
                <H2>Metalne mreže</H2>
                <H2>Grifovano pletivo</H2>
                <Paragraph>Mreža u tablama za izradu ograda, kapija, boksova za pse, za razne manje ili veće životinje.</Paragraph>
                <h3>Veličine okaca</h3>
                <List>
                    <Li>50×50 tabla 1×2 m ili specijal po želji kupca</Li>
                    <Li>30x30 tabla 1×2 m ili specijal po želji kupca</Li>
                    <Li>20x20 tabla 1×2 m ili specijal po želji kupca</Li>
                </List>
                <HR />
                <H2>Šulc mreža</H2>
                <Paragraph>Šulc mreža za košuljice i pregrade dimenzija 1×2 m.</Paragraph>
                <HR />
                <H2 className="left mb-1">Glatka armaturna mreza</H2>
                <Paragraph>Glatka armaturna mreža Ø 4 mm za betoniranje i košuljice, okca 100×100 mm.</Paragraph>
                <HR />
                <H2>Mreže za kaveze</H2>
                <List>
                    <Li>za sitne životinje (zečeve, činčile, prepelice, koke nosilje, piliće, papagaje, golubove...)</Li>
                    <Li>za prosejavanje zemlje, peska, šljunka i poljoprivrednih proizvoda (soja, kukuruz, pšenica ...)</Li>
                </List>
                <HR />
                <H2>Rabic punktovani</H2>
                <List>
                    <Li>Pocinkovana i PVC mreža</Li>
                    <Li>debljina žica od Ø 0.7 - 2.0 mm</Li>
                    <Li>veličina okca od 6×6 mm do 100×100 mm</Li>
                </List>
                <HR />
                <H2>Heksagon pletiva</H2>
                <List>
                    <Li>pocinkovana i PVC</Li>
                    <Li>veličina okca od 12×12 mm do 52×52 mm</Li>
                </List>
                <HR />
                <H2>Mreža sa sitnim okcima i sita</H2>
                <Paragraph>Zaštita od komaraca, u pčelarstvu, kod bušenja bunara, prosejavanje različitih materijala</Paragraph>
                <List>
                    <Li>Komarnici (PVC, Fiber, Zn, Al )</Li>
                    <Li>Pčelarska sita dimenzija okca od 2×2 mm do 5×5 mm</Li>
                    <Li>SITA za bunare</Li>
                    <Li>Istegnuta sita ( Zn, Al ) dimenzija okca od 3×6 do 5×10</Li>
                </List>
            </Container>
        </Section>
    )
}

export default Zica;