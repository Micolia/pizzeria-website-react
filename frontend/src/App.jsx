import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import FormRegister from './components/Form/Form_Register'
import FormLogin from './components/Form/Form_Login'
import Cart from './components/Cart/Cart'
//import Pizza from './components/Pizza/pizza'

import './App.css'

const App =() => {
  return(
    <>
    <Navbar />
    <Home />
    {/*<Pizza />*/}
    <Cart />
    <div className='forms'>
    <FormRegister />
    <FormLogin />
    </div>
    <Footer />
   </>
  )
}

export default App
