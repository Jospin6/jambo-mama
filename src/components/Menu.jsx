import { MenuItem } from "./MenuItem"
import { MenuTitle } from "./MenuTitle"
import { MiniFooter } from "./MiniFooter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export const Menu = () => {
    let style = `w-[300px] bg-white z-10 h-[100vh] 
    fixed top-0 left-0 border-r-[1px] border-gray-300`
    const [ishidden, setIsHidden] = useState(false)
    const handleHidden = () => setIsHidden(!ishidden)
    return <div className={ishidden ?`${style} hidden`: ` ${style} block`}>
        <div className="relative">
            <MenuTitle/>
            <button onClick={handleHidden} className="absolute right-[10px] top-[10px] text-red-500">X</button>
        </div>
        <MenuItem title={'Home'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Find a Health Facility'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Find a Transport'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Register Transport'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'My Health Provider'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'My Community HealthWorker'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'My Trusted Person'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'My Account'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'My Code And Consent'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Birth Plan'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Medical Background'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Anc Schedule'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Chat'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Settings'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MenuItem title={'Logout'}><FontAwesomeIcon icon={faHome}/></MenuItem>
        <MiniFooter/>
    </div>
}