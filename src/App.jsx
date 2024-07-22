import { Routes, Route } from 'react-router-dom';
import { Home } from './containers/Home';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
