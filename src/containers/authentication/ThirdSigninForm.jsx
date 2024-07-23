import { useEffect } from 'react'
import { setNavbarTitle } from '../../features/navbar'
import { useDispatch } from 'react-redux'
import { SubBanner } from '../../components/SubBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { InputFile } from '../../components/InputFile'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'

export const ThirdSigninForm = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Inscrivez-vous en tant que mère"))
    }, [])


    return <div className='w-full'>
        <SubBanner>
            <div className='w-full flex justufy-between'>
                <div></div>
                <div>
                    <FontAwesomeIcon icon={faUser} /> <span> {"Soignant(e)"} </span>
                </div>
                <div>Sauter</div>
            </div>
        </SubBanner>

        <div className='w-[400px] m-auto h-auto'>
            <InputFile labelText="Sélectionnez ou prenez une photo" />
            <Input
                labelText="Prénom"
                id="prenom"
                fieldName="prenom"
                type="text"
                placeholder="Votre prénom" />
            <Input
                labelText="Deuxième nom"
                id="prenom"
                fieldName="prenom"
                type="text"
                placeholder="Votre nom" />
            <Input
                labelText="Date de naissance"
                id="prenom"
                fieldName="prenom"
                type="date"
                placeholder="Votre date de naissance" />
            <Input
                labelText="Téléphone"
                id="prenom"
                fieldName="prenom"
                type="number"
                placeholder="Votre numero de téléphone" />
            <div className='flex justify-between'>
                <SubmitButton text="RETOUR"/>
                <SubmitButton text="SUIVANT"/>
            </div>
            
        </div>


    </div>
}