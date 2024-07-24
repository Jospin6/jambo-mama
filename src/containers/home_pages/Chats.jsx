import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { ChatItem } from '../../components/ChatItem'
import { Link } from 'react-router-dom'

export const Chats = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Messageries"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end h-[40px] items-center text-blue-500 pr-6'><span>Filtre</span></div>
        <div className='w-[60%] m-auto'>
            <Link to={"chat"}>
                <ChatItem userName="Jules Nzanzu Kapera" role="Soignant(e)"/>
            </Link>
            
        </div>
    </div>
}