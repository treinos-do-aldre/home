import { useRouter } from "next/router"
import { StyledThemeHandler } from "./style";
import Link from "next/link"
import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";
import { FaMoon } from "react-icons/fa";

const ThemeHandler = () => {
    const { swapMode, mode } = useContext(GlobalContext)

    return (
        <StyledThemeHandler className={mode == "dark" ? " active" : ""}>
            <div className={`sun_moon${mode == "dark" ? " active" : ""}`} onClick={() => swapMode()}>
                {/* <div className={`theme_btn${mode == "dark" ? " active" : ""}`}>
                    <FaMoon />
                </div> */}

            </div>
        </StyledThemeHandler>
    )
}

export default ThemeHandler
