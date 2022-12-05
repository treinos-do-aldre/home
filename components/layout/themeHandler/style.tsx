import styled from 'styled-components'
import { Theme } from 'styles/theme'

export const StyledThemeHandler = styled.div`
    @keyframes rotate {
      0% {transform: rotate(-35deg);}
      25% {transform: rotate(-100deg); visibility: hidden;}
      75% {transform: rotate(-270deg); visibility: hidden;}
      100% {transform: rotate(-327deg);}
    }
    @keyframes unrotate {
        0% {transform: rotate(-327deg);}
        25% {transform: rotate(-270deg); visibility: hidden;}
        75% {transform: rotate(-100deg); visibility: hidden;}
        100% {transform: rotate(-35deg);}
      }

    position: fixed;
    top: calc(100px - 10vw);
    left: 50%;
    // background-color: #ffffdd33;
    height: 150vw;
    
    transform: rotate(-35deg);
    animation: unrotate 0.7s linear forwards;

    &.active {
        animation: rotate 0.7s linear forwards;
    }

    .sun_moon {
        width: 80px;
        height: 80px;
        background-color: #fffff8;
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: white 0px 0px 20px 4px, inset #ffffcc 0px 0px 20px 20px;
    }
`