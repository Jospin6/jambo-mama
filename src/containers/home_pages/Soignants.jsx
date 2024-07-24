import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { Fournisor } from '../../components/Fournisor'
import { NeutreCard } from '../../components/NeutreCard'
import { SubmitButton } from '../../components/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MyCode = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Mon code et mon consentement"))
    }, [])

    return <div className="w-full flex justify-center items-center">
        <div className="grid w-[60%] grid-cols-6 gap-4 h-auto">
            <NeutreCard hidden="hidden" >
                <div className='text-red-500 mb-4'>
                    <FontAwesomeIcon icon={faUser}/> <span>Juliana Moga</span>
                </div>
                <div>
                    <Fournisor></Fournisor>
                </div>
            </NeutreCard>
        </div>
    </div>
}