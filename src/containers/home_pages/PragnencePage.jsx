import { faBaby } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { SubNavbar } from '../../components/SubNavbar'
import { PragnentCard } from '../../components/PragnentCard'
import woman4 from '../../assets/woman4.jpg'

export const PragnencePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Suivez votre grossesse"))
    }, [])
    return <div className="w-full">
        <SubNavbar text1="Toi-même" text2="Bébé" icon1={faBaby} icon2={faBaby}></SubNavbar>
        <SubBanner>
            <span> {"Votre bébé est attendu le ...(date) 12/08/2024"} </span>
        </SubBanner>
        <div className='w-[60%] m-auto'>
            <PragnentCard semaine="Semaine 36 à 37" src={woman4}>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro iste dolorem optio natus, enim nam distinctio in provident inventore ea.
                    Quis qui placeat quibusdam libero. Inventore laudantium et natus eius!
                </span>
            </PragnentCard>
        </div>

    </div>
}