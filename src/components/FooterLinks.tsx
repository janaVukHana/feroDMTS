import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const  Title = styled.h3`
    font-weight: 700;
    margin-bottom: 1rem;
`

const List = styled.ul`
    list-style-type: none;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding-bottom: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`

const FooterLinks = () => {
    return (
        <>
            <div>
                <Title>Stranice</Title>
                <List>
                    <li><StyledNavLink to="/">Početna</StyledNavLink></li>
                    <li><StyledNavLink to="/onama">Artikli</StyledNavLink></li>
                    <li><StyledNavLink to="/artikli">O&nbsp;Nama</StyledNavLink></li>
                    <li><StyledNavLink to="/kontakt">Kontakt</StyledNavLink></li>
                </List>
            </div>

            <div>
                <Title>Artikli</Title>
                <List>
                    <li><StyledNavLink to="/alat">Alat</StyledNavLink></li>
                    <li><StyledNavLink to="/plastika">Plastika</StyledNavLink></li>
                    <li><StyledNavLink to="/basta">Bašta</StyledNavLink></li>
                    <li><StyledNavLink to="/varenje">Varenje</StyledNavLink></li>
                    <li><StyledNavLink to="/ekseri">Ekseri</StyledNavLink></li>
                    <li><StyledNavLink to="/srafovi">Šrafovi</StyledNavLink></li>
                </List>
            </div>

            <div>
                <Title>Artikli</Title>
                <List>
                    <li><StyledNavLink to="/zica">Žica</StyledNavLink></li>
                    <li><StyledNavLink to="/stubovi">Stubovi</StyledNavLink></li>
                    <li><StyledNavLink to="/elektro">Elektromaterijal</StyledNavLink></li>
                    <li><StyledNavLink to="/moleraj">Moleraj</StyledNavLink></li>
                    <li><StyledNavLink to="/htz">HTZ oprema</StyledNavLink></li>
                    <li><StyledNavLink to="/stolarija">Stolarija</StyledNavLink></li>

                </List>
            </div>
        </>
    )
}

export default FooterLinks;