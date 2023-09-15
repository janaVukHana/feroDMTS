import styled from 'styled-components'
import {useState, useEffect} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Section = styled.section`
    margin-top: 55px;
    padding: 3rem 0;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    
`

const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`
const Flex = styled.section`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    margin-bottom: 2rem;

    @media(max-width: 992px) {
        flex-direction: column;
    }
`

const Img = styled.img`
    max-width: 100%;
`

const Paragraph = styled.p`
    flex: 1 1 50%;
    line-height: 2rem;
`

const AboutUs = () => {
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);
    return (
        <Section>
            <Container>
                <MainTitle>O nama</MainTitle>
                
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                    <Flex>

                        <Paragraph>
                            "Osnivanje maloprodajnog objekta i formiranje specijalizovane prodavnice u vidu gvožđare-farbare 
                            bio je logičan potez osnivača koji je dugo godina usko povezan sa proizvodnjom svih žičanih proizvoda, 
                            raznih mreža (sita) i eksera. Sve je počelo samo idejom, a onda i realizacijom 2012. godine. 
                            Trenutno imamo sedmoro zaposlenih, a ako bude mogućnosti taj broj će se u budućnosti povećavati..."
                        </Paragraph>
                        <div>
                            <Img src="./images/shop/fero_shop.jpg" alt="slika prodavnice - Novi Sad" />
                        </div>
                    </Flex>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>

                    <Flex>
                        <div>
                            <Img src="./images/shop/fero_shop.jpg" alt="slika prodavnice - Novi Sad" />
                        </div>
                        <Paragraph>
                            Prodajni objekat je površine 35m2, a raspolažemo sa istom tolikom površinom magacinskog prostora.
                            "U ovom trenutku raspolažemo sa preko 3000 artikala, a u ponudi možemo posebno
                            istaći žičane proizvode, koje odmeravamo po želji ili se
                            poručuju i izrađuj u po specijalnim zahtevima cenjenih potrošača."
                        </Paragraph>
                    </Flex>
                </AnimationOnScroll>
            </Container>
        </Section>
    )
}

export default AboutUs;