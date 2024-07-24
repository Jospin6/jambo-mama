import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'
import { Link } from "react-router-dom"

export const ProAccount = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("JamboMama! pour les proffessionnel de santé"))
    }, [])
    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="grid w-[80%] grid-cols-4 gap-4">
            <Link to={"/fournisseur-patients"} className='col-span-2 mt-2'>
                <PrincipalCardButton text="Patients" className="bg-blue-500">
                    <FontAwesomeIcon icon={faFileEdit} />
                </PrincipalCardButton>
            </Link>

            <Link to={"/fournisseur-patients"} className='col-span-2 mt-2'>
                <PrincipalCardButton text="Directory" className="bg-purple-500">
                    <FontAwesomeIcon icon={faFileEdit} />
                </PrincipalCardButton>
            </Link>

            <Link to={"/fournisseur-instructions"} className='col-span-2 mt-2'>
                <PrincipalCardButton text="Instructions" className="bg-green-500">
                    <FontAwesomeIcon icon={faFileEdit} />
                </PrincipalCardButton>
            </Link>

            <Link to={"/mon-compte"} className='col-span-2 mt-2'>
                <PrincipalCardButton text="My Account" className="bg-red-500">
                    <FontAwesomeIcon icon={faFileEdit} />
                </PrincipalCardButton>
            </Link>
        </div>
    </div>
}