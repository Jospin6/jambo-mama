import { Routes, Route } from 'react-router-dom';
import { Home } from './containers/Home';
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux'
import { Login } from './containers/authentication/login'

import { AgentSigninForm } from './containers/authentication/AgentSigninForm'
import { SupplierSignin } from './containers/authentication/SupplierSignin'
import { SigninMere } from './containers/authentication/SigninMere'
import {MereHome} from './containers/home_pages/MereHome'
import {HomeRelaisCom} from './containers/home_pages/HomeRelaisCom'
import {ProAccount} from './containers/home_pages/ProAccount'
import {PragnencePage} from './containers/home_pages/PragnencePage'
import {PeriodiqueQuestions} from './containers/home_pages/PeriodiqueQuestions'
import {VitalsSignInfosForm} from './containers/home_pages/VitalsSignInfosForm'
import {SuspectSigns} from './containers/home_pages/SuspectSigns'
import {SignalEvent} from './containers/home_pages/SignalEvent'
import {Soignants} from './containers/home_pages/Soignants'
import {FindEtblissement} from './containers/home_pages/FindEtblissement'
import {FindTransport} from './containers/home_pages/FindTransport'
import {Patients} from './containers/home_pages/Patients'
import {Instructions} from './containers/home_pages/Instructions'
import {MyAccount} from './containers/home_pages/MyAccount'
import {PregnantWomen} from './containers/home_pages/PregnantWomen'
import {MyCode} from './containers/home_pages/MyCode'
import {Antecedent} from './containers/home_pages/Antecedent'
import {EncodeTransport} from './containers/home_pages/EncodeTransport'
import {PersonDeConfiance} from './containers/home_pages/PersonDeConfiance'
import {Apprendre} from './containers/home_pages/Apprendre'
import {Chats} from './containers/home_pages/Chats'
import {Settings} from './containers/home_pages/Settings'


function App() {

  const { navtitle } = useSelector(state => state.navbar)

  return (
    <>
      <Navbar title={navtitle}/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />

          <Route exact path="/inscription-mere" element={<SigninMere/>} />
          <Route exact path="/inscription-fournisseur" element={<SupplierSignin/>} />
          <Route exact path="/inscription-agent" element={<AgentSigninForm/>} />

          <Route exact path="/mama" element={<MereHome/>} />
          <Route exact path="/agent" element={<HomeRelaisCom/>} />
          <Route exact path="/fournisseur" element={<ProAccount/>} />
          <Route exact path="/mama-grossesse" element={<PragnencePage/>} />
          <Route exact path="/periodique-question" element={<PeriodiqueQuestions/>} />
          <Route exact path="/signe-vitaux" element={<VitalsSignInfosForm/>} />
          <Route exact path="/signe-suspects" element={<SuspectSigns/>} />
          <Route exact path="/signaler-evennement" element={<SignalEvent/>} />
          <Route exact path="/mon-soignant" element={<Soignants/>} />
          <Route exact path="/etablissement" element={<FindEtblissement/>} />
          <Route exact path="/transport" element={<FindTransport/>} />

          <Route exact path="/fournisseur-patients" element={<Patients/>} />
          <Route exact path="/fournisseur-instructions" element={<Instructions/>} />
          <Route exact path="/mon-compte" element={<MyAccount/>} />

          <Route exact path="/femmes-enceinte" element={<PregnantWomen/>} />

          <Route exact path="/mon-code" element={<MyCode/>} />
          <Route exact path="/antecedent-medicaux" element={<Antecedent/>} />
          <Route exact path="/add-transport" element={<EncodeTransport/>} />
          <Route exact path="/person-de-confiance" element={<PersonDeConfiance/>} />
          <Route exact path="/apprendre" element={<Apprendre/>} />
          <Route exact path="/messagerie" element={<Chats/>} />
          <Route exact path="/paramettre" element={<Settings/>} />


      </Routes>
    </>
  )
}

export default App
