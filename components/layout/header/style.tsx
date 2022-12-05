import styled from "styled-components";


export const StyledHeader = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #ffffff22;
    position: absolute;
    top: 0;
    box-shadow: 0px 2px 10px #00000022;
`

export const LogoImage = styled.div`
    height: 100%;
    width: 600px;
    background-position: center;
    margin: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url('/header-text.png');

    @media screen and (max-width: 660px) {
        width: 370px;
    }
    
    @media screen and (max-width: 375px) {
        width: 160px;
        background-image: url('/header-text-responsive.png');
    }

`