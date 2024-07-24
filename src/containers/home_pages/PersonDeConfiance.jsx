import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { Fournisor } from '../../components/Fournisor'

export const PersonDeConfiance = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Personne de confiance"))
    }, [])

    return <div className="w-full flex justify-center items-center">
        <div className="w-[60%] m-auto pt-4 gap-4 h-auto">
            <Fournisor></Fournisor>
        </div>
    </div>
}