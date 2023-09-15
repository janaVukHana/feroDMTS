type PartnerIconProps = {
    img: string
    alt: string
}

import styled from 'styled-components'

const IconDiv = styled.div`
    height: 60px;

    @media(max-width: 768px) {
        height: 30px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export default function PartnerIcon({img, alt}: PartnerIconProps) {
    return (
        <IconDiv>
            <Img src={`./images/toolsLogos/${img}`} alt={`${alt} tool logo`} />
        </IconDiv>
    )
}