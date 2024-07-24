import { Routes, Route } from 'react-router-dom';
import { Home } from './containers/Home';
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux'
import { Login } from './containers/authentication/login'

import { AgentSigninForm } from './containers/authentication/AgentSigninForm'
import { SupplierSignin } from './containers/authentication/SupplierSignin'
import { SigninMere } from './containers/authentication/SigninMere'

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
      </Routes>
    </>
  )
}

export default App
