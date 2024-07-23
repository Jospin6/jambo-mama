import { faBaby } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import {SubNavbar} from '../../components/SubNavbar'
import { PragnentCard } from '../../components/PragnentCard'

export const PragnencePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Inscrivez-vous en tant qu'agent"))
    }, [])
    return <div className="w-full flex justify-center items-center">
        <SubNavbar text1="Toi-même" text2="Bébé" icon1={faBaby} icon2={faBaby}></SubNavbar>
        <SubBanner>
            <span> {"Votre bébé est attendu le ...(date) 12/08/2024"} </span>
        </SubBanner>
        <PragnentCard semaine="Semaine 36 à 37" hidden="hidden">
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro iste dolorem optio natus, enim nam distinctio in provident inventore ea. 
                Quis qui placeat quibusdam libero. Inventore laudantium et natus eius!
            </span>
        </PragnentCard>
    </div>
}