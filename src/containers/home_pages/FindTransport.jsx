import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { HospitalItem } from '../../components/HospitalItem'

export const FindTransport = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Trouver un transport"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end h-[40px] items-center text-blue-500 pr-6'><span>Filtre</span></div>
        <div className='w-[60%]'>

        </div>
    </div>
}