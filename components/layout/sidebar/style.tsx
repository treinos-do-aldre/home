import styled from "styled-components";


export const StyledSideBar = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 0;
    width: 270px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.secondary.default};
    transition: background-color 0.3s ease-in;
    box-shadow: -3px 0px 5px 2px ${props => props.theme.inverse};
    padding-top: 30px;
    justify-content: space-between;

    .mobile {
        display: none;
    }

    .item_menu {
        // color: ${props => props.theme.color};
        color: #fff;
        margin: 20px 40px 0px 40px;
        padding: 10px 30px;
        border-radius: 4px;
        transition: background-color 0.1s ease-in;
        display: flex;
        align-items: center;
        
        
        svg {
            margin-right: 4px;
            // fill: ${props => props.theme.color};
            fill: #fff;
        }
        
        &:hover {
            cursor: pointer;
            background-color: ${props => props.theme.secondary.light};
        }
        
        &.selected {
            background-color: ${props => props.theme.secondary.light};
        }
    }

    .footer_item_menu {
        margin: 20px 50px;
        border-radius: 4px;
        transition: background-color 0.1s ease-in;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        svg {
            margin-right: 4px;
            // fill: ${props => props.theme.color};
            fill: #fff;
            transition: fill 0.3s ease-in;
            height: 2.5em;
            width: 2.5em;
            padding: 5px;
            border-radius: 8px;

            :hover {
                cursor: pointer;
                background-color: ${props => props.theme.secondary.light};
            }
        }
    }

    @media only screen and (max-width: 768px) {
        width: 200px;

        .item_menu {
            margin: 20px 20px 0px 20px;
            padding: 10px 20px;
        }
    }

    @media only screen and (max-width: 425px) {
        width: 100vw;
        position: fixed;
        height: 100vh;
        z-index: 10;
        top: calc(-100vh + 75px);
        transition: all 0.2s ease-in;

        .mobile {
            display: block;
        }

        .item_menu {
            font-size: 2rem;
            margin: 20px 20px;
            padding: 10px 20px;
            justify-content: center;
            border: solid 2px ${props => props.theme.color};
        }

        &.show {
            top: calc(0px);
        }
    }
`