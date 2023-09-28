import Section from '../components/StyledComponents/SectionStyled'
import Container from '../components/StyledComponents/ContainerStyled'
import H1 from '../components/StyledComponents/H1Styled'
import Card from '../components/Card'

const Artikli = () => {
    return (
        <Section $mt>
            <Container>
                <H1 $center>Artikli</H1>
                <Card />
            </Container>
        </Section>
    )
}

export default Artikli