import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMobile } from '@fortawesome/free-solid-svg-icons'
import { AnimationOnScroll } from 'react-animation-on-scroll';

type ContactCityProps = {
    city: string
    adresa: string
    telefon: string[]
    email: string
    link: string
}

const FlexItem = styled.div`
    flex: 1;
    padding: 1.2rem;
    border-right: 1px solid #fff;

    &:nth-child(2) {
        border: none;
    }

    @media(max-width: 600px) {
        border: none;
        border-bottom: 1px solid #fff;
    }
`

const Title = styled.h2`
    margin-bottom: 1.4rem;
    border-bottom: 1px solid #fff;
`

const Info = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;
`

const InfoIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

const Link = styled.a`
    color: inherit;
`

const Iframe = styled.iframe`
    border-radius: 6px;
`

const ContactCity = ({city, adresa, link, telefon, email}: ContactCityProps) => {
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);
    return (
        <FlexItem className="city-info">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>

                <Title>{city}</Title>
                <Info>
                    <InfoIcon>
                        <div>
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                        </div>
                    </InfoIcon>
                    <div>
                        <p style={{fontWeight: 700}}>Adresa</p>
                        <p>
                            <Link 
                                href={link}
                                target='_blank'
                            >
                                {adresa}
                            </Link>
                        </p>
                    </div>
                </Info>
                <Info>
                    <InfoIcon>
                        <div>
                            <FontAwesomeIcon icon={faMobile} size="lg" />  
                        </div>
                    </InfoIcon>
                    <div>
                        <p style={{fontWeight: 700}}>Telefon</p>
                        <p>
                            {telefon.map(tel => <Link key={tel} href={`tel:${tel}`}>{tel}&nbsp;&nbsp;&nbsp;</Link>)}
                        </p>
                    </div>
                </Info>
                <Info>
                    <InfoIcon>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </div>
                    </InfoIcon>
                    <div>
                        <p style={{fontWeight: 700}}>Email</p>
                        <p>
                            <Link href={`mailto:${email}`}>{email}</Link>
                        </p>
                    </div>
                </Info>
                    <Iframe 
                        frameBorder="0" 
                        height="200" 
                        scrolling="no"
                        src={`https://maps.google.com?saddr=${adresa}, Serbia&z=12&output=embed`}
                        width="100%"></Iframe>
                </AnimationOnScroll>
            </FlexItem>
    )
}

export default ContactCity;