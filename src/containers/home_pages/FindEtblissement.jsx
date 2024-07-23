import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'
import { HomeCardbtn } from '../components/HomeCardbtn'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'

export const FindEtblissement = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Trouver un établissement"))
    }, [])
    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className='w-[300px] text-center'>
            <div className='pb-4'>Trouver un centre de santé</div>
            <div> <button className="py-[5px] bg-red-500 mt-4 
        rounded-md text-white text-[16px]"> D'ACCORD </button> </div>
        </div>
    </div>
}