import styled from 'styled-components'
import Section from '../components/StyledComponents/Section'
import Container from '../components/StyledComponents/Container'
import Flex from '../components/StyledComponents/Flex'
import H1 from '../components/StyledComponents/H1'

import {useState, useEffect} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

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
        <Section $mt>
            <Container>
                <H1>O nama</H1>
                
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                    <Flex $stretch $gap>

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

                    <Flex $stretch $gap>
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