import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const StyledLink = styled(Link)`
    color: #fff;
    background-color: var(--red);
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 75px;
    left: 10px;
    border-radius: 6px;
    opacity: 0.8;
    transition: 0.2s linear;
    
    &:hover {
        opacity: 1;
    }

    @media(max-width: 768px) {
        padding: 0.2rem 0.5rem;
    }
`

const GoBack = () => {
    return (
        <StyledLink to="/artikli"><FontAwesomeIcon icon={faArrowLeft} size="sm" /></StyledLink>
    )
}

export default GoBack;