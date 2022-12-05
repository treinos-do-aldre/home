import styled from 'styled-components'

// const {theme} = useContext(GlobalContext)
export const StyledMenu = styled.section.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.sky_background};
    transition: background-color 0.7s ease-in;

    .list_menu {
        width: 40%;
        margin: auto auto;
        min-width: 300px;
        transition: min-width 0.1s ease-in;

        @media screen and (max-width: 319px) {
            min-width: 200px;
        }
    }

    .menu_item {
        color: ${props => props.theme.color};
        transition: color 0.7s ease-in, background-color 0.7s, filter 0.05s, transform 0.05s;
        margin: 7px 0;
        text-align: center;
        padding: 10px 5px;
        border-radius: 4px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;

        svg {
            // margin-left: 10px;
            width: 10%;
        }

        span {
            width: 90%;
        }

        &:nth-child(5n+1) {
            background-color: ${props => props.theme.randomPallete[0]};
        }
        &:nth-child(5n+2) {
            background-color: ${props => props.theme.randomPallete[1]};
        }
        &:nth-child(5n+3) {
            background-color: ${props => props.theme.randomPallete[2]};
        }
        &:nth-child(5n+4) {
            background-color: ${props => props.theme.randomPallete[3]};
        }
        &:nth-child(5n) {
            background-color: ${props => props.theme.randomPallete[4]};
        }

        &:hover {
            cursor: pointer;
            filter: drop-shadow(0px 0px 5px black);
            transform: scale(1.05);
        }

        &.work_in_progress {
            cursor: default;

            &:after {
                content: "Feature em Desenvolvimento";
                display: flex;
                align-items: center;
                justify-content: center;
                background: #444;
                height: 100%;
                width: 100%;
                line-height: 100%;
                border-radius: 4px;
                color: #fff;
    
                transition: bottom 0.15s ease-in;
                position: absolute;
                bottom: 100%;
            }

            &:hover {
                filter: none;
                transform: scale(1);

                &:after {
                    bottom: 0px;
                }
            }

        }
    }
`