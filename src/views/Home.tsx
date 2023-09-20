// Styles
import Header from '../components/StyledComponents/Header'
import Container from '../components/StyledComponents/Container'

import Hero from '../components/Hero'
import Ogradjivanje from '../components/Ogradjivanje'
import Partner from '../components/Partner'
// Delete Test later
// import Test from '../components/Test'

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