import styled from 'styled-components';

interface H2Props {
    space?: string; // Define the space prop
}

const H2 = styled.div<H2Props>`
    color: green;
    margin-bottom: ${(props) => (props.space === '2' ? '2rem' : '8rem')};
`;

export default H2;
