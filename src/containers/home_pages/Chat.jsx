import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'

export const Chat = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Jules Nzanzu Kapera"))
    }, [])
    return <div className="w-full h-[90vh] flex justify-center items-center">
         <div className='w-[60%] h-[90vh] relative m-auto'>
            <div className='absolute flex justify-between items-center bottom-0 left-0 text-[16px] rounded-lg border-[1px] border-gray-400'>
                <span>Type a message</span>
                <span> <FontAwesomeIcon icon={faEnvelope}/> </span>
            </div>
         </div>
    </div>
}