import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";

interface SpinnerProps {
    color?: string
}
const SubmitSpinner = (props: SpinnerProps) => {
    const { theme } = useContext(GlobalContext);

    const StyledSpinner = styled.div`
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;

        @keyframes spin {
            from {transform: rotate(0deg);}
            to {transform: rotate(359deg);}
        }
    
        .square {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .spinner {
                animation: spin 0.7s infinite linear;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 100%;
                border: solid 2px #00000000;
                border-color: #fff ${props.color || "#fff"} #00000000 #00000000;
                border-width: 1px 3px 5px 0px;
            }
        }
    `

    return (
        <StyledSpinner theme={theme}>
            <div className="square">
                <div className="spinner" />
            </div>
        </StyledSpinner>
    )
}

export default SubmitSpinner