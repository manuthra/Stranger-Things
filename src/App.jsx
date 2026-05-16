import react from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Seasons from './pages/Seasons'
import UpsideDown from './pages/UpsideDown'
import Dimension from './pages/Dimension'

function App() {
 

  return (
    <>
     <div className='bg-black min-h-screen'>
       <Navbar />

       <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/characters" element = {<Characters />} />
          <Route path = "/seasons" element = {<Seasons />} />
          <Route path = "/upsidedown" element = {<UpsideDown />} />
          <Route path = "/dimension" element = {<Dimension />} />
       </Routes>

     </div>
    </>
  )
}

export default App
