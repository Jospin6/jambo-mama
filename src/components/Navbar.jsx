import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from './Menu'
import { useState } from 'react'
export const Navbar = ({title}) => {
    const [hidden, setHidden] = useState(false)
    const handleHidden = () => setHidden(!hidden)
    console.log(hidden)
    return <div className="bg-[#EFE4B0] text-red-600 w-full h-[50px] flex 
        justify-between items-center px-[100px] relative">
        {hidden && <Menu/>}
        <div className="text-xl font-500"> 
            <span onClick={handleHidden}><FontAwesomeIcon icon={faBars} className='mr-4 cursor-pointer' /></span>
              {title}
        </div>
        <div></div>
    </div>
}