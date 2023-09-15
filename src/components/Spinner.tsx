import { styled } from "styled-components";

const SpinnerDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const SpinnerInner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spinner-rotate 1s linear infinite;
    }

    @keyframes spinner-rotate {
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`

const Spinner = () => {
    return (
        <SpinnerDiv>
            <SpinnerInner></SpinnerInner>
        </SpinnerDiv>
    )
}

export default Spinner;