import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'
import { Link } from 'react-router-dom'

export const HomeRelaisCom = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("JamboMama! pour les Relais Communautaure"))
    }, [])
    return <div className="w-full h-[90vh]">
        <div className="grid w-[80%] m-auto grid-cols-4 gap-4">
            <Link to={"/mama-grossesse"} className='col-span-2 mt-2'>
            <PrincipalCardButton text="Follow your Pregnancy" className="bg-blue-500">
                <FontAwesomeIcon icon={faFileEdit} />
            </PrincipalCardButton>
            </Link>
            
            <Link to={"/femmes-enceinte"} className='col-span-2 mt-2'>
            <PrincipalCardButton text="Pregnant Women" className="bg-purple-500">
                <FontAwesomeIcon icon={faFileEdit} />
            </PrincipalCardButton>
            </Link>

            <Link to={"femmes-enceinte"} className='col-span-2 mt-2'>
            <PrincipalCardButton text="Health Providers" className="bg-green-500">
                <FontAwesomeIcon icon={faFileEdit} />
            </PrincipalCardButton>
            </Link>
            
            <Link to={"mon-enceinte"} className='col-span-2 mt-2'>
            <PrincipalCardButton text="My Account" className="bg-red-500">
                <FontAwesomeIcon icon={faFileEdit} />
            </PrincipalCardButton>
            </Link>

        </div>
    </div>
}