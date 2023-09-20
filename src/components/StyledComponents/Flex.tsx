import styled from 'styled-components'

interface FlexProps {
    $column?: string; // Define the column prop
    $justify?: 'center' | 'start';
    $stretch?: boolean
    $padding?: boolean
    $filter?: boolean
    $gap?: boolean
    $wrap?: boolean
    $rowsm?: boolean
    $bg?: boolean
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.$column ? 'column':'row'};
    justify-content: ${props => props.$justify == 'start' ? 'start':'center'};
    align-items: ${props => props.$stretch ? 'stretch':'center'};
    padding: ${props => props.$padding ? '3rem 2rem': '0'};
    border-radius: 5px;
    background-color: ${props => props.$bg ? 'rgba(0,0,0,0.5)':''};
    color: #fff;
    backdrop-filter: ${props => props.$filter ? 'blur(5px)':'none'};
    gap: ${props => props.$gap ? '1rem':'0'};
    flex-wrap: ${props => props.$wrap ? 'wrap':'no-wrap'};

    @media(max-width: 768px) {
        flex-direction: ${props => props.$rowsm ? 'row':'column'};
        padding: ${props => props.$padding ? '2rem 1rem': '0'};
    }
`

export default Flex;