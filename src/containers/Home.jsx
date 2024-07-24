import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { HomeCardbtn } from '../components/HomeCardbtn'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../features/navbar/navbarSlice'
import { useEffect } from 'react'

export const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("JamboMama!"))
    }, [])

    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="grid w-full grid-cols-6 gap-4 h-[400px] px-[100px]">
            <Link to="/inscription-mere" className='col-span-2'>
                <HomeCardbtn text={"Inscrivez-vous en tant que mère"}>
                    <FontAwesomeIcon icon={faUser} />
                </HomeCardbtn>
            </Link>

            <Link to="/inscription-fournisseur" className='col-span-2'>
                <HomeCardbtn text={"Inscrivez-vous en tant que fournisseur de soins de sante"}>
                    <FontAwesomeIcon icon={faUser} />
                </HomeCardbtn>
            </Link>

            <Link to="/inscription-agent" className='col-span-2'>
                <HomeCardbtn text={"Inscrivez-vous en tant qu'agent de santé communauteure"}>
                    <FontAwesomeIcon icon={faUser} />
                </HomeCardbtn>
            </Link>

        </div>
    </div>
}