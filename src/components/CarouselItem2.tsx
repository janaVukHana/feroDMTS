import styled from 'styled-components'
import Paragraph from "./StyledComponents/ParagraphStyled"
import H2 from "./StyledComponents/H2Styled"

type CarouselItem2Props = {
    title: string
    desc: string
    img: string
    link: string
}

interface DivStyledProps {
    $img: string
}

const DivStyled = styled.div<DivStyledProps>`
    width: 100%;
    height: 100%;
    background-color: blue;
    background-image: ${props => props.$img};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`
const DivContent = styled.div`
    position: absolute;
    top: 20%;
    left: 10%;
`

const CarouselItem2 = ({title, desc, img, link}: CarouselItem2Props) => {
    return (
        <DivStyled $img={img}>
            <DivContent>
                <H2>{title}</H2>
                <Paragraph>{desc}</Paragraph>
                <a href={link}>Link</a>
            </DivContent>
        </DivStyled>
    )
}

export default CarouselItem2;