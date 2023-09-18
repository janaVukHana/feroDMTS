import styled from 'styled-components'
import Header from '../components/StyledComponents/Header'

import Hero from '../components/Hero'
import Ogradjivanje from '../components/Ogradjivanje'
import Partner from '../components/Partner'
// Delete Test later
// import Test from '../components/Test'

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
                    {/* Later delete this and some styled components */}
                    {/* <Test /> */}
            <Ogradjivanje />  
            <Partner />  
            {/* Other sections here */}
        </>
    )
}

export default Home;