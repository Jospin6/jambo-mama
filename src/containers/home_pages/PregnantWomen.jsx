import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar/navbarSlice'
import { useEffect } from 'react'
import { ListTile } from '../../components/ListTile'

export const PregnantWomen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Femme enceinte"))
    }, [])
    return <div className="w-full">
        <div className='w-full flex items-center h-[40px] justify-end text-blue-500 pr-6'><span>Filtre</span></div>
        <div className='w-[60%] m-auto'>
            <ListTile title="Yvette L. Ngalima" subtitle="Due Date: 12/08/2024"/>
        </div>
    </div>
}