import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const HospitalItem = ({centerName, location }) => {
    return <div className="w-full p-2 border-[1px] border-gray-400 rounded-lg">
        <div className="border-b-[1px] border-gray-400 py-2 mb-2">
            <div className="text-red-500"> {centerName} </div>
            <div className="text-[14px] text-gray-400">Health center</div>
        </div>
        <div className='text-[16px]'>
            <FontAwesomeIcon icon={faEnvelope}/> <span> {location} </span>
        </div>
    </div>
}