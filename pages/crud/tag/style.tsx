import styled from 'styled-components'

// const {theme} = useContext(GlobalContext)
const StyledComponent = styled.div.attrs(props => ({
    theme: props.theme,
}))`
    overflow-x: auto;
    z-index: 10;
    display: block;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.inverse};
    transition: background-color 0.3s ease-in;

    .content_header {
        padding: 30px 20px 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            margin-bottom: 0px;
            margin-top: 0px;
            transition: all 0.3s ease-in;
        }

        .new_btn {
            color: #fff;
            padding: 10px 30px;
            display: flex;
            align-items: center;
            background-color: #23c13ecc;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.05s ease-in;
            
            :hover {
                transform: scale(1.05);
                box-shadow: 0px 0px 3px #101010;
                background-color: #34cb4daa;
            }
            svg {
                width: 18px;
                height: 18px;
            }
            span {
                margin-left: 5px;
            }
        }
    }
`

export default StyledComponent;