import Section from './StyledComponents/SectionStyled'
import Container from './StyledComponents/ContainerStyled'
import Flex from './StyledComponents/FlexStyled'
import H1 from './StyledComponents/H1Styled'

import ContactCity from './ContactCity'
import ContactForm from './ContactForm'
import WorkingTime from './WorkingTime'

const ContactInfo = () => {
    return (
        <Section $mt>
            <H1 $center>Kontakt</H1>
            <Container>
                <Flex>
                    {/* NOVI SAD */}
                    <ContactCity 
                        city="Novi Sad"
                        adresa="Rumenački put 55b, Novi Sad"
                        email="dm.fero@yahoo.com"
                        link="https://www.google.com/maps/dir//Rumena%C4%8Dki+put+55b,+Novi+Sad,+Serbia/@45.271698,19.806639,12z/data=!4m12!1m2!2m1!1sRumena%C4%8Dki+put+55b+Novi+Sad!4m8!1m0!1m5!1m1!1s0x475b11a71d91a52b:0x43109438a2717f8!2m2!1d19.8066392!2d45.2716978!3e2?hl=en-US&entry=ttu"
                        telefon={["0216311183", "0616133301"]}
                    />
                    {/* KIKINDA */}
                    <ContactCity 
                        city="Kikinda"
                        adresa="Nikole Pašića 6, Kikinda"
                        email="dm.feroki@yahoo.com"
                        link="https://www.google.com/maps/place/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B5+%D0%9F%D0%B0%D1%88%D0%B8%D1%9B%D0%B0+6,+%D0%9A%D0%B8%D0%BA%D0%B8%D0%BD%D0%B4%D0%B0/@45.8373357,20.4712666,17z/data=!3m1!4b1!4m6!3m5!1s0x4744df21be671b6b:0x45572ffe840f6f53!8m2!3d45.8373358!4d20.47588!16s%2Fg%2F11dzpmm406"
                        telefon={["0606133307"]}
                    />
                </Flex>
                <WorkingTime />
                <ContactForm />
            </Container>
        </Section>
    )
}

export default ContactInfo;