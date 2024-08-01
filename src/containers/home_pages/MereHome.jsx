import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileEdit, faEdit, faWarning, faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { PrincipalCardButton } from '../../components/PrincipalCardButton'
import { Link } from 'react-router-dom'
import JamboMamaNoCaptionWhite from '../../assets/JamboMamaNoCaptionWhite.png'

export const MereHome = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("JamboMama! pour les mères"))
    }, [])
    return <div className="w-full h-[90vh]">
        <SubBanner>
            PregnancyAge 36,6 BabyDueDate 12/08/2024
        </SubBanner>
        <div className="grid w-[80%] m-auto grid-cols-4 gap-4">
            <Link to={"/mama-grossesse"} className='col-span-2 mt-2'>
                <PrincipalCardButton text="Follow your Pregnancy" className="bg-blue-500 ">
                <img src={JamboMamaNoCaptionWhite} alt="mama" className='w-[60px] h-[60px]' />
                </PrincipalCardButton>
            </Link>

            <Link to={"/periodique-question"} className='col-span-2 mt-2'>
                <PrincipalCardButton text="Periodic Questionnaire" className="bg-purple-500">
                    <FontAwesomeIcon icon={faEdit} className='text-[50px]' />
                </PrincipalCardButton>
            </Link>

            <Link to={"/signe-vitaux"} className='col-span-2 mt-2'>
            <PrincipalCardButton text="Vital Info Update" className="bg-green-500">
                <FontAwesomeIcon icon={faKitMedical} className='text-[50px]' />
            </PrincipalCardButton>
            </Link>

            <Link to={"/signe-suspects"} className='col-span-2 mt-2'>
            <PrincipalCardButton text="Something happened" className="bg-red-500">
                <FontAwesomeIcon icon={faWarning} className='text-[50px]' />
            </PrincipalCardButton>
            </Link>
 
        </div>
    </div>
}