import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SubNavbar = ({icon1, icon2, text1, text2}) => {
    return <div className="bg-[#EFE4B0] text-red-600 w-full h-[50px] flex 
    justify-between items-center px-[200px]">
        <div className='text-center'>
            <div className='text-[16px]'> <FontAwesomeIcon icon={icon1}/> </div>
            <div className='text-[14px]'> {text1} </div>
        </div>
        <div className='text-center'>
            <div className='text-[16px]'> <FontAwesomeIcon icon={icon2}/> </div>
            <div className='text-[14px]'> {text2} </div>
        </div>
    </div>
}