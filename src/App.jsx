import { Routes, Route } from 'react-router-dom';
import { Home } from './containers/Home';
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux'

function App() {

  const { navtitle } = useSelector(state => state.navbar)

  return (
    <>
      <Navbar title={navtitle}/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
