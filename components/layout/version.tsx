import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";
import pkg from "package.json"


const Version = () => {
    const { theme } = useContext(GlobalContext);

    const StyledVersion = styled.div`
        position: fixed;
        bottom: 5px;
        left: 5px;
        color: ${theme.inverse};
        font-weight: 300;
    `

    return (
        <StyledVersion>
            Versão {pkg.version}
        </StyledVersion>
    )
}

export default Version