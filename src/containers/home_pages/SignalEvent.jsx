import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { SubBanner } from '../../components/SubBanner'
import { QuestionItem } from '../../components/QuestionItem'
import { OtherQuestion } from '../../components/OtherQuestion'
import { SubmitButton } from '../../components/SubmitButton'

export const SignalEvent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Signaler un événement"))
    }, [])
    return <div className="w-full pb-6">
         <SubBanner>
            {"Age de votre grossesse (semaines, jours) 36,6 Votre bébé est attendu ... (date) 12/08/2024"}
        </SubBanner>

        <div className='w-full h-[50px] leading-[50px] text-center text-[16px]'>
            21/07/2024
        </div>

        <div className="w-[60%] m-auto">
            <QuestionItem question="Salut? Comment ça va aujourd'hui?" otherText="Not Well"/>
            <QuestionItem question="Salut? Comment ça va aujourd'hui?" otherText="Not Well"/>
            <QuestionItem question="Salut? Comment ça va aujourd'hui?" otherText="Not Well"/>
            <QuestionItem question="Salut? Comment ça va aujourd'hui?" otherText="Not Well"/>
            <QuestionItem question="Salut? Comment ça va aujourd'hui?" otherText="Not Well"/>
            <OtherQuestion question="Avez-vous d'autres questions ou soucis?"/>
            <SubmitButton text="METTRE A JOUR" />
        </div>
    </div>
}