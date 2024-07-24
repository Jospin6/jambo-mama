import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'

export const Chat = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Jules Nzanzu Kapera"))
    }, [])
    return <div className="w-full h-[90vh] flex justify-center items-center">
         <div className='w-[60%] h-[500px] rounded-t-lg bg-gray-100 relative m-auto'>
         <FontAwesomeIcon icon={faR}/>
            <div className='absolute w-full h-[40px] px-2 flex justify-between items-center bottom-0 left-0 text-[16px] rounded-lg border-[1px] border-gray-400'>
                <span>Type a message</span>
                <span> <FontAwesomeIcon icon={faPaperPlane}/> </span>
            </div>
         </div>
    </div>
}