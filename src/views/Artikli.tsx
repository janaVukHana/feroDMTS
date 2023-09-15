import styled from 'styled-components'
import Card from '../components/Card'

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
    align-items: center;
    flex-wrap: wrap;
`

const Artikli = () => {
    return (
        <Section>
            <Container>
                <MainTitle>Artikli</MainTitle>
                <Flex>
                    <Card />
                </Flex>
            </Container>
        </Section>
    )
}

export default Artikli