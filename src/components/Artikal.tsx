import styled from "styled-components";
import Flex from './StyledComponents/Flex'
import H2 from './StyledComponents/H2'

import GoBack from "./GoBack";

type ArtikalProps = {
    title: string
    listEl: string[]
    img: string
}

const FlexItem = styled.div`
    flex: 1;
    padding: 1rem;
`

const Img = styled.img`
    width: 100%;
    border-radius: 6px;
`

const Li = styled.li`
    margin-bottom: 1rem;
`

const Artikal = ({title, listEl, img}: ArtikalProps) => {
    return (
                <Flex>
                    <GoBack />
                    <FlexItem>
                        <H2>{title}</H2>
                        <ul>
                            {listEl.map(el => <Li key={el}>{el}</Li>)}
                        </ul>
                    </FlexItem>
                    <FlexItem>
                        <Img src={img} alt={title} />
                    </FlexItem>
                </Flex>
    )
}

export default Artikal;