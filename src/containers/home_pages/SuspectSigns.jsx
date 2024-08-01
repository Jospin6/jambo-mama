import { faEdit, faUserDoctor, faHospital, faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const SuspectSigns = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Quelque chose est arrivé"))
    }, [])

    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="grid w-[80%] grid-cols-4 gap-4 h-auto">
            <Link to={"/signaler-evennement"} className='col-span-2'>
                <HorizontalCard bg="bg-green-500" icon={faEdit} text="Signaler un événement" />
            </Link>
            <Link to={"/mon-soignant"} className='col-span-2'>
                <HorizontalCard bg="bg-red-500" icon={faUserDoctor} text="Contactez votre soignant(e)" />
            </Link>
            <Link to={"/etablissement"} className='col-span-2'>
                <HorizontalCard bg="bg-blue-500" icon={faHospital} text="Etablissements de santé" />
            </Link>
            <Link to={"/transport"} className='col-span-2'>
                <HorizontalCard bg="bg-purple-500" icon={faAmbulance} text="Ambulance / Transports d'urgence" />
            </Link>
        </div>
    </div>
}