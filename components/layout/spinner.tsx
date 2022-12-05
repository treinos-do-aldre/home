import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";

interface SpinnerProps {
    speed?: number
    size?: number
    thickness?: number
}
const Spinner = (props: SpinnerProps) => {
    const { theme } = useContext(GlobalContext);

    const StyledSpinner = styled.div`
        margin: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        @keyframes spin {
            from {transform: rotate(0deg);}
            to {transform: rotate(359deg);}
        }
    
        .square {
            width: ${props.size || 200}px;
            height: ${props.size || 200}px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .spinner {
                animation: spin ${props.speed || 1}s infinite linear;
                position: absolute;
                width: 95%;
                height: 95%;
                border-radius: 100%;
                border: solid ${props.thickness || 4}px #00000000;
                border-color: #00000000 ${theme.secondary.default};
            }

            .spinner:last-child {
                animation: spin ${props.speed || 1}s infinite reverse linear;
                width: calc(100% - ${(props.thickness || 4)*6}px);
                height: calc(100% - ${(props.thickness || 4)*6}px);
                border-color: ${theme.primary.default} #00000000;
            }
        }
    `

    return (
        <StyledSpinner theme={theme}>
            <div className="square">
                <div className="spinner" />
                <div className="spinner" />
            </div>
        </StyledSpinner>
    )
}

export default Spinner