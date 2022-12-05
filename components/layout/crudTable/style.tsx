import styled from "styled-components";


export const StyledTable = styled.table.attrs(props => ({
    theme: props.theme,
}))`
    background-color: ${props => props.theme.background};
    // border: solid 10px ${props => props.theme.light_background};
    transition: background-color 0.3s ease-in;
    width: 100%;
    border-spacing: 0px;
    padding: 15px 20px;
    overflow: auto;

    td {
        border-top: solid 2px ${props => props.theme.secondary.default};
    }
    .custom_row {
        td:not(:first-child), th:not(:first-child) {
            border-left: solid 2px ${props => props.theme.secondary.default};
        }

        :hover {
            background-color: ${props => props.theme.dark_background};
            color: ${props => props.theme.inverse};
            cursor: default;
        }
    }

    .custom_head {
        color: #fff;
        background-color: ${props => props.theme.secondary.default};
        transition: background-color 0.3s ease-in;
    }
    td, th {
        min-width: 80px;
        transition: all 0.3s ease-in;
        padding: 8px 10px;
        text-align: left;
    }

    .action_col {
        padding: 3px 10px;
        svg {
            padding: 4px;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 8px;
            background-color: red;
            fill: #fff;
            transition: all 0.05s ease-in;

            :hover {
                cursor: pointer;
                transform: scale(1.1);
                box-shadow: 0px 0px 3px #101010;
            }

            &.delete {
                background-color: #f72121;
                // background-color: #de381f;
            }
            &.edit {
                background-color: ${props => props.theme.primary.dark};
            }
        }
        svg:not(:first-child) {
            margin-left: 10px;
        }

        @media only screen and (max-width: 768px) {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;

            svg {
                margin-top: 5px;
                width: 1.7rem;
                height: 1.7rem;
            }
            svg:not(:first-child) {
                margin-left: 0px;
            }
        }
    }

    @media only screen and (max-width: 425px) {
        td, th {
            min-width: 0px;
            transition: all 0.3s ease-in;
            padding: 8px 10px;
            text-align: center;
        }
    }
`