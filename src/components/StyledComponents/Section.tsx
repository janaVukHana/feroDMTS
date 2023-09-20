import styled from 'styled-components'

interface SectionProps {
    $mt?: boolean
    $isGradient?: boolean;
}

const Section = styled.section<SectionProps>`
    padding: 3rem 0;
    margin-top: ${props => props.$mt ? '55px':'0'};
    background: ${props => props.$isGradient ? 'linear-gradient(180deg, rgba(26,55,77,1) 0%, rgba(255,255,255,1) 100%)':''};

    

`

export default Section;