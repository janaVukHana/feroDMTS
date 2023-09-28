// Styles
import Header from '../components/StyledComponents/HeaderStyled'
import Container from '../components/StyledComponents/ContainerStyled'

import Hero from '../components/Hero'
import Ogradjivanje from '../components/Ogradjivanje'
import Partner from '../components/Partner'
import Carousel2 from '../components/Carousel2'
// Delete Test later
// import Test from '../components/Test'

const Home = () => {
    return (
        <>
            <Header>
                <Carousel2 />
                {/* <Container>
                    <Hero />
                </Container> */}
            </Header>
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