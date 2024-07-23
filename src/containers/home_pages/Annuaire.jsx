import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar'
import { useEffect } from 'react'

export const Annuaire = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Quelque chose est arrivé"))
    }, [])

    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="grid w-[80%] grid-cols-6 gap-4 h-auto">
            <HorizontalCard bg="bg-green-500 col-span-2" icon={faEdit} text="Ambulance / Transport d'urgence"/>
            <HorizontalCard bg="bg-red-500 col-span-2" icon={faEdit} text="Etablissement de santé"/>
            <HorizontalCard bg="bg-blue-500 col-span-2" icon={faEdit} text="Soignant(e)s"/>
        </div>
    </div>
}