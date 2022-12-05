import styled from 'styled-components'

// const {theme} = useContext(GlobalContext)
export const StyledPage = styled.section.attrs(props => ({
    theme: props.theme,
}))`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.inverse};
    transition: background-color 0.3s ease-in;

    @media only screen and (max-width: 425px) {
        // width: auto;
    }
`


export const CrudControllerStyle = styled.div`
    width: calc(100% - 270px);
    margin-left: 270px;

    @media only screen and (max-width: 768px) {
        margin-left: 200px;
        width: calc(100% - 200px);
    }

    @media only screen and (max-width: 425px) {
        margin-left: 0px;
        margin-top: 80px;
        width: 100%;
    }
`

export default StyledPage;