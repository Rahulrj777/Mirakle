import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Mirakle_Home_page from '../Pages/Mirakle_Home_page'
import ShopingPage from '../Pages/ShopingPage'
import AboutUs from '../Pages/AboutUs'
import ContectUs from '../Pages/ContectUs'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element= {<Mirakle_Home_page/>} />
            <Route path='/Shop' element= {<ShopingPage/>} />
            <Route path='/About_Us' element= {<AboutUs/>} />
            <Route path='/Contect_Us' element={<ContectUs/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default Routing
