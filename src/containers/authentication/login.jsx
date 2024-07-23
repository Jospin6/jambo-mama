import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setNavbarTitle } from '../../features/navbar'

export const Login = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Connexion (avec mot de passe)"))
    }, [])
    
    return <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="w-[300px] h-auto">
            <div className='py-6'>
                <div className='text-[80px] text-red-500'> <FontAwesomeIcon icon={faUser}/> </div>
                <div>JamboMama</div>
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

            <div className='mt-4 flex justify-end text-red-500 text-[16px]'>
                <span>MOT DE PASSE OUBLIE?</span>
            </div>

            <div>
                <SubmitButton text="CONNEXION (AVEC MOT DE PASSE)" className="text-[16px]"/>
            </div>

            <div className='flex text-[16px]'>
                <span>Pas un membre? </span>
                <span>S'INSCRIRE</span>
            </div>

            <div className='text-[16px] text-red-500'>
                PAS PRET A REJOINDRE
            </div>

        </div>
    </div>
}