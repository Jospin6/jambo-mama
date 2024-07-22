import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { HomeCardbtn } from '../components/HomeCardbtn'

export const Home = () => {
    return <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="grid w-full grid-cols-6 gap-4 h-[400px] px-[100px]">
            <HomeCardbtn text={"Inscrivez-vous en tant que mère"}>
                <FontAwesomeIcon icon={faUser}/>
            </HomeCardbtn>
            <HomeCardbtn text={"Inscrivez-vous en tant que fournisseur de soins de sante"}>
                <FontAwesomeIcon icon={faUser}/>
            </HomeCardbtn>
            <HomeCardbtn text={"Inscrivez-vous en tant qu'agent de santé communauteure"}>
                <FontAwesomeIcon icon={faUser}/>
            </HomeCardbtn>
        </div>
    </div>
}