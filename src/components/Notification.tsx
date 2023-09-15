import styled from 'styled-components'

const NotificationSpan = styled.span`
    display: block;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 3;
    padding: 1rem 4.5rem;
    border-radius: 5px;
    color: #fff;
    background-color: var(--red);
`

const Notification = () => {
    return (
        <NotificationSpan>Poruka je poslata!</NotificationSpan>
    )
}

export default Notification;