import styled from "styled-components";
import GoBack from "./GoBack";

type BastaProps = {
    title: string
    listEl: string[]
    img: string
}

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: stretch;
    }
`

const FlexItem = styled.div`
    flex: 1;
    padding: 1rem;
`

const Img = styled.img`
    width: 100%;
    border-radius: 6px;
`

const H2 = styled.h2`
    margin-bottom: 1.4rem;
`

const Li = styled.li`
    margin-bottom: 1rem;
`

const Artikal = ({title, listEl, img}: BastaProps) => {
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