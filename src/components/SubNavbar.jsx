import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JamboMamaNoCaptionRed from '../assets/JamboMamaNoCaptionRed.png'
import baby3_red from '../assets/baby3_red.png'

export const SubNavbar = ({icon1, icon2, text1, text2}) => {
    return <div className="bg-[#EFE4B0] text-red-600 w-full h-[50px] flex 
    justify-between items-center px-[200px]">
        <div className='text-center'>
            <div className='text-[16px] flex justify-center'> <img src={JamboMamaNoCaptionRed} alt="mama" className='w-[25px] h-[25px]' /> </div>
            <div className='text-[14px]'> {text1} </div>
        </div>
        <div className='text-center'>
            <div className='text-[16px]'> <img src={baby3_red} alt="mama" className='w-[25px] h-[25px]' />  </div>
            <div className='text-[14px]'> {text2} </div>
        </div>
    </div>
}