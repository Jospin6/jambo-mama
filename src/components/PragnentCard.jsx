import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const PragnentCard = ({semaine, src, hidden, children}) => {
    return <div className="w-full">
        <div className="w-full text-center py-2"> {semaine} </div>
        <div className="h-[300px] w-[200px] text-red-500 text-[100px] my-4">
            <img src={src} alt="immage femme" className={`${hidden}`} />
            <FontAwesomeIcon icon={faUser}/>
        </div>
        <div className="text-[16px] text-gray-500">
            {children}
        </div>
    </div>
}