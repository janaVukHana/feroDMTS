import styled from 'styled-components'
import { useStateContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';

const Img = styled.img`
    width: 50px;
    height: 50px;

    @media(max-width: 600px) {
        width: 25px;
        height: 25px;
    }
`

const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    transition: 0.2s linear all;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    &:hover {
        transform: scale(1.05);
    }
`

const LogoText = styled.div`
    font-size: 20px;
    letter-spacing: 10px;
    font-family: "Lora";
    font-weight: 700;

    @media(max-width: 600px) {
        font-size: 12px;
        letter-spaceing: 5px;
    }
`

const Span = styled.span`
    font-size: 16px;
    text-transform: uppercase;

    @media(max-width: 600px) {
        font-size: 8px;
    }
`

const Logo = () => {
    const {setShowMenu} = useStateContext()

    const handleClick = () => {
        if(window.innerWidth < 768) setShowMenu(false)
    }

    return (
        <StyledNavLink to="/" onClick={handleClick}>
            <Img src="images/logo/ferodm_logo.png" alt="logo" />
            <LogoText>
                Fero D&M<br /><Span>Gvožđara</Span>
            </LogoText>
            {/* <WhatshotIcon fontSize="large" /> */}
        </StyledNavLink>
    )
}

export default Logo;