import { MenuItem } from "./MenuItem"
import { MenuTitle } from "./MenuTitle"
import { MiniFooter } from "./MiniFooter"

export const Menu = () => {
    return <div className="w-[300px] h-[100vh] fixed top-0 left-0 border-r-[1px] border-gray-300">
        <MenuTitle/>
        <MenuItem/>
        <MiniFooter/>
    </div>
}