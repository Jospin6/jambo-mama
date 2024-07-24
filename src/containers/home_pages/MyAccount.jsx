import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { Fournisor } from '../../components/Fournisor'

export const MyAccount = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Mon compte"))
    }, [])

    return <div className="w-full flex justify-center items-center">
        <div className="grid w-[60%] grid-cols-6 gap-4 h-auto">
            <Fournisor></Fournisor>
        </div>
    </div>
}