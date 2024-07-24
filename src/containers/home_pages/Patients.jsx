import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { HospitalItem } from '../../components/HospitalItem'
import { ChatItem } from '../../components/ChatItem'
import { ListTile } from '../../components/ListTile'

export const Patients = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Les patients"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end h-[40px] items-center text-blue-500 pr-6'><span>Filtre</span></div>
        <div className='w-[60%] m-auto'>
            <ListTile title="Yvette L. Ngalima" subtitle="Due Date: 12/08/2024"/>
        </div>
    </div>
}