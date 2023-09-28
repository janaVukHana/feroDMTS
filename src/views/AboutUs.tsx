import styled from 'styled-components'
import Section from '../components/StyledComponents/SectionStyled'
import Container from '../components/StyledComponents/ContainerStyled'
import Flex from '../components/StyledComponents/FlexStyled'
import H1 from '../components/StyledComponents/H1Styled'
import H2 from '../components/StyledComponents/H2Styled'
import Paragraph from '../components/StyledComponents/ParagraphStyled'

import {useState, useEffect} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const FlexItem = styled.div`
    flex: 1;
`

const Img = styled.img`
    max-width: 100%;
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
                <H1 $center>O nama</H1>
                
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Paragraph $mb="2rem">
                            "Osnivanje maloprodajnog objekta i formiranje specijalizovane prodavnice u vidu gvožđare-farbare 
                            bio je logičan potez osnivača koji je dugo godina usko povezan sa proizvodnjom svih žičanih proizvoda, 
                            raznih mreža (sita) i eksera. Sve je počelo samo idejom, a onda i realizacijom. Prva poslovna jedinica 
                            osnovana je 2012. godine u Novom Sadu gde je i danas sedište firme. Druga poslovna jedinica je osnovana 2017. 
                            godine sa sedištem u Kikindi. Oba maloprodajna objekta raspolažu sa preko 4000 artikala u svojoj ponudi.
                            Trenutno imamo osmoro zaposlenih, a ako bude mogućnosti taj broj će se u budućnosti povećavati..."
                        </Paragraph>

                        <Flex $gap $stretch>
                            <FlexItem>
                                <H2>Novi Sad - FeroD&M 1</H2>
                                <div>
                                    <Img src="./images/shop/radnjaNS.jpg" alt="slika prodavnice - Novi Sad" />
                                </div>
                                <Paragraph>
                                    Prodajni objekat je površine 50m2, a raspolažemo sa istom tolikom površinom magacinskog prostora.
                                </Paragraph>
                            </FlexItem>
                            <FlexItem>
                                <H2>Kikinda - FeroD&M 2</H2>
                                <div>
                                    <Img src="./images/shop/radnjaKI3.jpg" alt="slika prodavnice - Novi Sad" />
                                </div>
                                <Paragraph>
                                    Prodajni objekat sa magacinskim prostorom je ukupno 150m2.
                                </Paragraph>
                            </FlexItem>
                        </Flex>

                </AnimationOnScroll>
            </Container>
            {/* 
                Misija i ciljevi

                G vožđarska roba za svakog kupca
                V elika ljubaznost i odlična usluga
                O zbiljan i profesionalan pristup svih zaposlenih
                Ž elje i zahteve naših kupaca brzo realizujemo
                D ostava robe na željenu lokaciju
                J ednostavno rešenje na svaki vaš zahtev
                A sortiman je specifičan i jedinstvena ponuda na jednom mestu
                R azličitost u odnosu na konkurenciju
                A ktuelnosti i inovacije pratimo svakodnevno

                F arbarski asortiman po zahtevu kupca
                E nergičnost i pozitivan stav svih zaposlenih
                R ealizacija porudžbina u najkraćem mogućem roku
                O sluškujemo tržište i usklađujemo sa potrebama naših potrošača

                D ržimo korak sa konkurencijom
                and
                M isija: svakodnevna težnja za proširenjem kako asortimana tako i usluga

                Ciljevi

                - Da imamo zadovoljne kupce i to smatramo našim najvećim uspehom.
                - Zaposlenima težimo da omogućimo primeran i odgovarajući socijalni status i kompletne uslove
                  prilikom zapošljavanja

                  Srdačno Vaša

                  Gvoždjara )u ekseru
                  logo

            */}
        </Section>
    )
}

export default AboutUs;