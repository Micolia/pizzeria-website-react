import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const { token, logout } = useContext(UserContext)
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <div className='navigazione'>
      <div className='bttleft'>
        <Link to='/'><button className='btnfill'>Home</button></Link>
        {token
          ? (
            <>
              <Link to='/profile'><button className='btnempty'>Profile</button></Link>
              <button className='btnempty' onClick={logout}>Logout</button>
            </>
            )
          : (
            <>
              <Link to='/login'><button className='btnempty'>Login</button></Link>
              <Link to='/register'><button className='btnempty'>Register</button></Link>
            </>
            )}
      </div>
      <div className='bttright'>
        <Link to='/cart'><button className='btnfill'>Total: ${total.toLocaleString()}</button></Link>
      </div>
    </div>
  )
}

export default Navbar
