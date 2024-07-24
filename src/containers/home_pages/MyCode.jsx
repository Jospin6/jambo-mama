import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { HorizontalCard } from "../../components/HorizontalCard"
import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { Fournisor } from '../../components/Fournisor'
import { NeutreCard } from '../../components/NeutreCard'
import { SubmitButton } from '../../components/SubmitButton'

export const MyCode = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Mon code et mon consentement"))
    }, [])

    return <div className="w-full flex justify-center items-center">
        <div className="w-[60%] m-auto h-auto pt-2">
            <NeutreCard className="text-red-500 text-center" title="Mon code" >
                <span>0000199</span>
            </NeutreCard>
            <NeutreCard title="Mon consentement" >
                <div className='flex px-2 pb-2 mt-4'>
                    <div><input type="checkbox" className='mr-2'/></div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id asperiores similique voluptatibus 
                        reprehenderit, quaerat quos, eos deleniti facilis ullam eum
                         harum distinctio explicabo accusantium qui debitis temporibus beatae nulla ad?
                    </div>
                </div>
            </NeutreCard>
            <SubmitButton text="METTRE A JOUR"/>
        </div>
    </div>
}