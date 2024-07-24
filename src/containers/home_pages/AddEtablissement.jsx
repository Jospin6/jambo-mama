import { useEffect } from 'react'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useDispatch } from 'react-redux'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import {SelectField} from '../../components/SelectField'

export const AddEtablissement = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("S'inscrire l'établissement de santé"))
    }, [])


    return <div className='w-full'>

        <div className='w-[400px] m-auto h-auto'>
            <SelectField labelText="Type de transport">
                <option value="">Choisir un type de transport</option>
            </SelectField>
            <SelectField labelText="Province">
                <option value="">Choisir une province</option>
            </SelectField>
            <SelectField labelText="Secteur">
                <option value="">Choisir un secteur</option>
            </SelectField>
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
            <SubmitButton text="SOUMETTRE"/>
        </div>


    </div>
}
