import { useDispatch } from 'react-redux'
import { setNavbarTitle } from '../../features/navbar'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'

export const Apprendre = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNavbarTitle("Apprendre"))
    }, [])
    return <div className="w-full">
        <div className='w-[60%]'>
            <div>Comment prendre la tension artérielle</div>
            <div className='w-full h-[400px] bg-red-500 rounded-lg'>

            </div>
            <div className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt necessitatibus nobis 
                asperiores, quas harum ea architecto rem nulla? Non facilis dolor quas 
                voluptate pariatur nisi similique consequuntur. Similique, aperiam.
            </div>
            <div className='w-full h-[50px] flex items-center bg-green-500 text-white'>
                <span>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-6'/>
                </span>
                <span>
                    Retourner aux instructions
                </span>
            </div>
        </div>
    </div>
}