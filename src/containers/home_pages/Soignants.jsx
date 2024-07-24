import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { Fournisor } from '../../components/Fournisor'
import { NeutreCard } from '../../components/NeutreCard'
import { SubmitButton } from '../../components/SubmitButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Soignants = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Soignant(e)s"))
    }, [])

    return <div className="w-full flex justify-center items-center pt-4">
        <div className="w-[60%] gap-4 h-auto">
            <NeutreCard hidden="hidden" >
                <div className='text-red-500 mb-4 pl-2 pt-2'>
                    <FontAwesomeIcon icon={faUser}/> <span>Juliana Moga</span>
                </div>
                <div>
                    <Fournisor></Fournisor>
                </div>
            </NeutreCard>
        </div>
    </div>
}