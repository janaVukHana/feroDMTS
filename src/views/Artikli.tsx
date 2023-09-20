import Section from '../components/StyledComponents/Section'
import Container from '../components/StyledComponents/Container'
import Flex from '../components/StyledComponents/Flex'
import H1 from '../components/StyledComponents/H1'

import Card from '../components/Card'

const Artikli = () => {
    return (
        <Section $mt>
            <Container>
                <H1 $center>Artikli</H1>
                <Flex $wrap>
                    <Card />
                </Flex>
            </Container>
        </Section>
    )
}

export default Artikli