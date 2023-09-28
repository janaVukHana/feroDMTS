import TestStyle from './StyledComponents/TestStyle';
import H2 from './StyledComponents/H2Styled';

const Test: React.FC = () => {
    return (
        <TestStyle color='red'>
            <H2 space="3">Test</H2 >
            <h2>Item one</h2>
            <h2>Item two</h2>
        </TestStyle>
    )
}

export default Test;