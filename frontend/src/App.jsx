import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'
import HomePage from './views/HomePage'
import CartPage from './views/CartPage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import PizzaPage from './views/PizzaPage'
import ProfilePage from './views/ProfilePage'
import NotFoundPage from './views/NotFoundPage'
import CartProvider from './context/CartContext'
import UserProvider from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'
// import Home from './components/Home/Home'
// import FormRegister from './components/Form/Form_Register'
// import FormLogin from './components/Form/Form_Login'
// import Cart from './components/Cart/Cart'
// import Pizza from './components/Pizza/Pizza'

import './app.css'

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            {/* <Route path='/pizza/p001' element={<PizzaPage />} /> */}

            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route path='*' element={<NotFoundPage />} />
            <Route path='/404' element={<NotFoundPage />} />
            <Route path='/pizza/:id' element={<PizzaPage />} />

          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
        {/* <Pizza /> */}
        {/* <Cart /> */}
        {/* <div className='forms'>
    <FormRegister />
    <FormLogin />
    </div> */}
        {/* <Footer /> */}
      </CartProvider>
    </UserProvider>
  )
}

export default App
