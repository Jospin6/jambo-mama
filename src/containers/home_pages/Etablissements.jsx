import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { HospitalItem } from '../../components/HospitalItem'

export const FindEtblissement = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Trouver un établissement"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end text-blue-500 pr-2'><span>Filtre</span></div>
        <div className='w-[60%]'>
            <HospitalItem 
                centerName="Centre de santé Diocesain LUMU" 
                location={"Sud-kivu: Bukavu: bagira: Quartier nyakavogo"}/>
        </div>
    </div>
}