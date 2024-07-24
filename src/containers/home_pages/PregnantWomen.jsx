import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { HospitalItem } from '../../components/HospitalItem'
import { ChatItem } from '../../components/ChatItem'
import { ListTile } from '../../components/ListTile'

export const Chats = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Femme enceinte"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end text-blue-500 pr-2'><span>Filtre</span></div>
        <div className='w-[60%]'>
            <ListTile title="Yvette L. Ngalima" subtitle="Due Date: 12/08/2024"/>
        </div>
    </div>
}