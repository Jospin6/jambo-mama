import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar'
import { useEffect } from 'react'
import { HospitalItem } from '../../components/HospitalItem'
import { ChatItem } from '../../components/ChatItem'

export const Chats = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Messageries"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end text-blue-500 pr-2'><span>Filtre</span></div>
        <div className='w-[60%]'>
            <ChatItem userName="Jules Nzanzu Kapera" role="Soignant(e)"/>
        </div>
    </div>
}