import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SubNavbar = ({icon1, icon2, text1, text2}) => {
    return <div className="bg-[#EFE4B0] text-red-600 w-full h-[40px] flex 
    justify-between items-center px-[200px]">
        <div>
            <div className='text-[30px]'> <FontAwesomeIcon icon={icon1}/> </div>
            <div> {text1} </div>
        </div>
        <div>
            <div className='text-[30px]'> <FontAwesomeIcon icon={icon2}/> </div>
            <div> {text2} </div>
        </div>
    </div>
}