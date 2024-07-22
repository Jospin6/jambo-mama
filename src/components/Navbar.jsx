import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu'
import { useDispatch, useSelector } from 'react-redux'
import { setIsHidden } from '../features/navbar/navbarSlice'

export const Navbar = ({title}) => {
    const { isHidden } = useSelector(state => state.navbar)
    const dispatch = useDispatch()
    
    const handleNavbar = () => dispatch(setIsHidden(!isHidden))

    return <div className="bg-[#EFE4B0] text-red-600 w-full h-[50px] flex 
        justify-between items-center px-[100px] relative">
        <Menu/>
        <div className="text-xl font-500"> 
            <span onClick={handleNavbar}><FontAwesomeIcon icon={faBars} className='mr-4 cursor-pointer' /></span>
              {title}
        </div>
        <div></div>
    </div>
}