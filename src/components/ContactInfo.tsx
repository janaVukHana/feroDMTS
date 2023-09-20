import Section from './StyledComponents/Section'
import Container from './StyledComponents/Container'
import Flex from './StyledComponents/Flex'
import H1 from './StyledComponents/H1'

import ContactCity from './ContactCity'
import WorkingTime from './WorkingTime'
import ContactForm from './ContactForm'

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
                        link="https://www.google.com/maps/place/%D0%A0%D1%83%D0%BC%D0%B5%D0%BD%D0%B0%D1%87%D0%BA%D0%B8+%D0%BF%D1%83%D1%82+55,+%D0%9D%D0%BE%D0%B2%D0%B8+%D0%A1%D0%B0%D0%B4+21000/@45.2756659,19.7977013,17z/data=!3m1!4b1!4m5!3m4!1s0x475b117552e9bcd5:0x5e9cae3e822ca493!8m2!3d45.2756659!4d19.8002762"
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
                <Flex>
                    <WorkingTime />
                </Flex>
                <Flex>
                    <ContactForm />
                </Flex>
            </Container>
        </Section>
    )
}

export default ContactInfo;