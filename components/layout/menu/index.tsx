import { useRouter } from "next/router"
import { StyledMenu } from "./style"
import Link from "next/link"
import { GiHammerNails } from "react-icons/gi";
import { MenuItemProps } from "./interface";
import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";

const Menu = (props: { data: MenuItemProps[] }) => {
  const router = useRouter();
  const {theme} = useContext(GlobalContext)
  return (
      <StyledMenu theme={theme}>
        <div className="list_menu">
          {props.data.map((menuItem) => (
            <div className={`menu_item${menuItem.wp ? ' work_in_progress' : ''}`} key={menuItem.route} onClick={menuItem.wp ? undefined : (() => router.push(menuItem.route))}>
              <>
                {menuItem.icon || <GiHammerNails/>}
                <span>{menuItem.label}</span>
              </>
            </div>
          ))}
        </div>
      </StyledMenu>
  )
}

export default Menu
