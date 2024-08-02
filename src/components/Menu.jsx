import { MenuItem } from "./MenuItem"
import { MenuTitle } from "./MenuTitle"
import { MiniFooter } from "./MiniFooter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookMedical, faCalendar, faCar, faCode, faCog, faHome, faHospital, faInbox, faLongArrowUp, faMessage, faPaperclip, faSignOut, faUser, faUserDoctor, faUserGroup, faWater } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setIsHidden } from '../features/navbar/navbarSlice'
import {Link} from 'react-router-dom'

export const Menu = () => {
    let style = `w-[280px] bg-white z-10 h-[100vh] 
    fixed top-0 left-0 border-r-[1px] border-gray-300 overflow-x-auto`
    const { isHidden } = useSelector(state => state.navbar)
    const dispatch = useDispatch()
    
    const handleNavbar = () => dispatch(setIsHidden(!isHidden))
    return <div className={isHidden ?`${style} hidden`: ` ${style} block`}>
        <div className="relative">
            <MenuTitle/>
            <button onClick={handleNavbar} className="absolute right-[10px] top-[10px] text-red-500">X</button>
        </div>
        <Link to="/"><MenuItem title={'Home'}><FontAwesomeIcon icon={faHome}/></MenuItem></Link>
        <Link to={"/agent"}><MenuItem title={'Find a Health Facility'}><FontAwesomeIcon icon={faHospital}/></MenuItem></Link>
        <Link to={"/transport"}><MenuItem title={'Find a Transport'}><FontAwesomeIcon icon={faCar}/></MenuItem></Link>
        <Link to={"/add-transport"}><MenuItem title={'Register Transport'}><FontAwesomeIcon icon={faCar}/></MenuItem></Link>
        <Link to={"/fournisseur"}><MenuItem title={'My Health Provider'}><FontAwesomeIcon icon={faUserDoctor}/></MenuItem></Link>
        <Link to={"/agent"}><MenuItem title={'My Community HealthWorker'}><FontAwesomeIcon icon={faUserGroup}/></MenuItem></Link>
        <Link to={"/person-de-confiance"}><MenuItem title={'My Trusted Person'}><FontAwesomeIcon icon={faUser}/></MenuItem></Link>
        <Link to={"/mon-compte"}><MenuItem title={'My Account'}><FontAwesomeIcon icon={faUser}/></MenuItem></Link>
        <Link to={"/mon-code"}><MenuItem title={'My Code And Consent'}><FontAwesomeIcon icon={faPaperclip}/></MenuItem></Link>
        <Link to={"/apprendre"}><MenuItem title={'Birth Plan'}><FontAwesomeIcon icon={faCalendar}/></MenuItem></Link>
        <Link to={"/antecedent-medicaux"}><MenuItem title={'Medical Background'}><FontAwesomeIcon icon={faBookMedical}/></MenuItem></Link>
        <Link to={"/"}><MenuItem title={'Anc Schedule'}><FontAwesomeIcon icon={faCalendar}/></MenuItem></Link>
        <Link to={"/messagerie"}><MenuItem title={'Chat'}><FontAwesomeIcon icon={faMessage}/></MenuItem></Link>
        <Link to={"/paramettre"}><MenuItem title={'Settings'}><FontAwesomeIcon icon={faCog}/></MenuItem></Link>
        <Link to={"/paramettre"}><MenuItem title={'SignUp'}><FontAwesomeIcon icon={faUser}/></MenuItem></Link>
        <Link to={"/logiin"}><MenuItem title={'Logout'}><FontAwesomeIcon icon={faSignOut}/></MenuItem></Link>
        <MiniFooter/>
    </div>
}