import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import FormRegister from './components/Form/Form_Register'
import FormLogin from './components/Form/Form_Login'
import Form from './components/Cart/Cart'

import './App.css'

const App =() => {
  return(
    <>
    <Navbar />
    <Home />
    <Form />
    <div className='forms'>
    <FormRegister />
    <FormLogin />
    </div>
    <Footer />
   </>
  )
  }

export default App
