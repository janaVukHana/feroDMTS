import styled from "styled-components";

const TestStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color == 'red' ? 'red':'blue'};

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: stretch;
    }
`
export default TestStyle;