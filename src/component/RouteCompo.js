import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Tech from './Tech'
import Holly from './Holly'
import Fitnes from './Fitnes'
import Food from "./Food"
// import LinkCompo from './LinkCompo'
import DataStore from './DataStore'
import Content from './Content'
function RouteCompo() {
  return (
    <BrowserRouter>
    {/* <LinkCompo/> */}

    <hr className='hr' />
      <DataStore>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/technology" element={<Tech />} />
          <Route path="/hollywood" element={<Holly />} />
          <Route path="/fitness" element={<Fitnes />} />
          <Route path="/food" element={<Food />} />
          <Route path="/Dcontent/:Id" element={<Content/>}/>
        </Routes>
      </DataStore>
    </BrowserRouter>

  )
}

export default RouteCompo