import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu'
export const Navbar = () => {
    return <div className="bg-[#EFE4B0] text-red-600 w-full h-[50px] flex 
        justify-between items-center px-[100px] relative">
        <Menu/>
        <div className="text-xl font-500"> <FontAwesomeIcon icon={faBars} className='mr-4'/>  jamboMama</div>
        <div></div>
    </div>
}