import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HorizontalCard = ({bg, icon, text}) => {
    return <div className={`text-white rounded-lg flex justify-center items-center min-h-[150px] h-auto ${bg}`}>
        <div className="flex">
            <FontAwesomeIcon icon={icon} className='text-[30px]'/>
            <span className="w-[200px] pl-2 h-auto text-md"> {text} </span>
        </div>
    </div>
}