import { useEffect } from 'react'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useDispatch } from 'react-redux'
import { SubBanner } from '../../components/SubBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { InputFile } from '../../components/InputFile'
import { SubmitButton } from '../../components/SubmitButton'
import {PersonaliseInput} from '../../components/PersonaliseInput'
import { OtherQuestion } from '../../components/OtherQuestion'

export const VitalsSignInfosForm = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Mise à jour des informations vitaux"))
    }, [])


    return <div className='w-full pb-6'>
        <SubBanner>
            {"Age de votre grossesse (semaines, jours) 36,6 Votre bébé est attendu ... (date) 12/08/2024"}
        </SubBanner>

        <div className='w-full h-[50px] leading-[50px] text-center text-[16px]'>
            21/07/2024
        </div>

        <div className='w-[60%] m-auto h-auto'>
            <InputFile labelText="Sélectionnez ou prenez une photo" />
            <PersonaliseInput 
                labelText="Tension artérielle-systolique"
                type="text" 
                icon={faUser}
                flag="mmHg"/>
            <PersonaliseInput 
                labelText="Albumine dans l'urine"
                type="text" 
                icon={faUser}
                flag="mg/L"/>
            <PersonaliseInput 
                labelText="Glucose (sucre) dans l'urine"
                type="text" 
                icon={faUser}
                flag="mmHg"/>
            <PersonaliseInput 
                labelText="Tension artérielle-systolique"
                type="text" 
                icon={faUser}
                flag="mmol/L"/>
            <OtherQuestion question="Rythme cardiaque"/>
            <SubmitButton text="METTRE A JOUR"/>
        </div>


    </div>
}