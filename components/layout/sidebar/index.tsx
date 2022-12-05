import { StyledSideBar } from "./style"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "context/GlobalContext";
import { CrudProvider, CrudContext } from 'context/CrudContext';
import { useRouter } from "next/router";


import { GiDatabase, GiHamburgerMenu } from "react-icons/gi";
import { HiSun, HiMoon } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa"

const SideBar = () => {
    const { theme, mode, swapMode } = useContext(GlobalContext);
    const { selectMenu, selectedMenu } = useContext(CrudContext);
    const router = useRouter();
    const [hidden, setHidden] = useState<boolean>(false);

    return (
        <StyledSideBar theme={theme} className={hidden ? "" : "show"}>
            <div>
                <div onClick={() => {selectMenu("item"); setHidden(true)}} className={`item_menu${selectedMenu == "item" ? " selected" : ""}`}>
                    <GiDatabase />
                    Item
                </div>
                <div onClick={() => {selectMenu("tag"); setHidden(true)}} className={`item_menu${selectedMenu == "tag" ? " selected" : ""}`}>
                    <GiDatabase />
                    Categoria
                </div>
            </div>

            <div>
                <div className="footer_item_menu">
                    <FaArrowLeft onClick={() => router.push('/')} />
                    {mode == "dark" ? <HiSun onClick={() => swapMode()} /> : <HiMoon onClick={() => swapMode()} />}
                    <GiHamburgerMenu className="mobile" onClick={() => setHidden(!hidden)} />
                </div>
            </div>
        </StyledSideBar>
    )
}

export default SideBar