import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { HospitalItem } from '../../components/HospitalItem'
import { SelectField } from '../../components/SelectField'
import { SubmitButton } from '../../components/SubmitButton'

export const Settings = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Paramettres"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex justify-end text-blue-500 pr-2'><span>Filtre</span></div>
        <div className='w-[60%] m-auto'>
            <SelectField labelText="Pays">
                <option value="">Choisir un pays</option>
            </SelectField>

            <SelectField labelText="Langue">
                <option value="">Choisir une langue</option>
            </SelectField>

            <SelectField labelText="Region">
                <option value="">Choisir une region</option>
            </SelectField>

            <SelectField labelText="Territoire">
                <option value="">Choisir un territoire</option>
            </SelectField>
            <SubmitButton text={"SAUVEGARDER"}/>
        </div>
    </div>
}