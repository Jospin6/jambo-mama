import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ListTile = ({title, subtitle}) => {
    return <div className="w-full flex justify-between px-2 mb-2 items-center border-b-[1px] border-gray-300 h-[40px]">
        <div className="flex">
            <div className="w-[35px] h-[35px] rounded-full bg-gray-300"></div>
            <div className="text-[14px] pl-2 text-gray-500">
                <div>{title} </div>
                <div className="text-[12px]"> {subtitle} </div>
            </div>
        </div>
        <div className="text-[15px] text-green-400"> <FontAwesomeIcon icon={faEllipsisV}/> </div>
    </div>
}