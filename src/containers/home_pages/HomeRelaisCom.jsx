import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'
import { HomeCardbtn } from '../components/HomeCardbtn'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'

export const HomeRelaisCom = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("JamboMama! pour les Relais Communautaure"))
    }, [])
    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="grid w-[80%] grid-cols-4 gap-4">
          <PrincipalCardButton text="Follow your Pregnancy" className="col-span-2 bg-blue-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>

          <PrincipalCardButton text="Pregnant Women" className="col-span-2 bg-purple-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>

          <PrincipalCardButton text="Health Providers" className="col-span-2 bg-green-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>

          <PrincipalCardButton text="My Account" className="col-span-2 bg-red-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>
        </div>
    </div>
}