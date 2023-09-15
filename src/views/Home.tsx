import styled from 'styled-components'
import Hero from '../components/Hero'
import Ogradjivanje from '../components/Ogradjivanje'
import Partner from '../components/Partner'

const Header = styled.header`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../public/images/hero/hero_02.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Container = styled.div`
    width: 80%;
    max-width: 992px;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px) {
        width: 95%;
    }
`

const Home = () => {
    return (
        <>
            <Header>
                <Container>
                    <Hero />
                </Container>
            </Header>
            <Ogradjivanje />  
            <Partner />  
            {/* Other sections here */}
        </>
    )
}

export default Home;