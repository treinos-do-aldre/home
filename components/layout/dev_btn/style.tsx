import styled from "styled-components";


export const StyledBTN = styled.div`
    width: 70px;
    height: 70px;

    background-color: #333;
    padding: 10px;

    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 100%;
    transition: all 0.2s ease-out;

    &:hover {
        transform: scale(1.1);
        box-shadow: inset 70px 0px #111;
        cursor: pointer;
    }


    svg {
        width: 100%;
        height: 100%;
        fill: #eee;
    }
`