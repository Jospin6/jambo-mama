import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons'

export const Instructions = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Messageries"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end text-blue-500 pr-2'><span>Filtre</span></div>
        <div className='w-[60%]'>
            <div className='flex justify-between w-full h-[40px] items-center text-white bg-green-500 px-2'>
                <span>Prendre la tension artérielle</span>
                <span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </span>
            </div>
        </div>
    </div>
}