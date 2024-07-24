import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'

export const Login = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Connexion (avec mot de passe)"))
    }, [])

    return <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="w-[300px] h-auto">
            <div className='flex justify-center'>
                <div className='py-6 text-center'>
                    <div className='text-[80px] text-red-500'> <FontAwesomeIcon icon={faUser} /> </div>
                    <div>JamboMama</div>
                </div>
            </div>

            <div>
                <Input
                    labelText="Nom d'utilisateur"
                    id="userName"
                    fieldName="userName"
                    type="text"
                    placeholder="Votre nom" />
                <Input
                    labelText="Mot de passe"
                    id="password"
                    fieldName="password"
                    type="password"
                    placeholder="Votre mot de passe" />
            </div>

            <div className='mt-4 flex justify-end text-red-500 text-[12px]'>
                <span>MOT DE PASSE OUBLIE?</span>
            </div>

            <div>
                <SubmitButton text="CONNEXION (AVEC MOT DE PASSE)" className="w-full" />
            </div>

            <div className='flex text-[12px] py-2'>
                <span>Pas un membre? </span>
                <span>S'INSCRIRE</span>
            </div>

            <div className='text-[12px] text-red-500'>
                PAS PRET A REJOINDRE
            </div>

        </div>
    </div>
}