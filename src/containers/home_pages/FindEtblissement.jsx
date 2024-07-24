import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'
import { HospitalItem } from '../../components/HospitalItem'

export const FindEtblissement = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Trouver un établissement"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex h-[40px] justify-end items-center text-blue-500 pr-6'><span>Filtre</span></div>
        <div className='w-[60%] m-auto'>
            <HospitalItem
                centerName="Centre de santé Diocesain LUMU"
                location={"Sud-kivu: Bukavu: bagira: Quartier nyakavogo"} />
        </div>
    </div>
}