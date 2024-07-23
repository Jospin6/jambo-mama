import { useEffect } from 'react'
import { setNavbarTitle } from '../../features/navbar'
import { useDispatch } from 'react-redux'
import { SubBanner } from '../../components/SubBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const SigninMere = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Inscrivez-vous en tant que mère"))
    }, [])


    return <div>
        <SubBanner>
            <FontAwesomeIcon icon={faUser}/> <span>Personnelle</span>
        </SubBanner>

        
    </div>
}