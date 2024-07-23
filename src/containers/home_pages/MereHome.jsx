import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit } from '@fortawesome/free-solid-svg-icons'
import { HomeCardbtn } from '../components/HomeCardbtn'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'

export const MereHome = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Inscrivez-vous en tant qu'agent"))
    }, [])
    return <div className="w-full h-[90vh] flex justify-center items-center">
         <SubBanner>
            PregnancyAge 36,6 BabyDueDate 12/08/2024
        </SubBanner>
        <div className="grid w-full grid-cols-4 gap-4 h-[400px] px-[100px]">
          <PrincipalCardButton text="Follow your Pregnancy" className="col-span-2 bg-blue-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>

          <PrincipalCardButton text="Periodic Questionnaire" className="col-span-2 bg-purple-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>

          <PrincipalCardButton text="Vital update" className="col-span-2 bg-green-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>

          <PrincipalCardButton text="Something happened" className="col-span-2 bg-red-500 mt-2">
            <FontAwesomeIcon icon={faFileEdit}/>
          </PrincipalCardButton>
        </div>
    </div>
}