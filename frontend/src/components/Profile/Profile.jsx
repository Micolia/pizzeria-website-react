import './profile.css'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { email, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login') // reindirizza a login dopo logout
  }

  return (
    <div className='profileblock'>
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      <button className='closesession' onClick={handleLogout}>Cerrar sesión</button>
    </div>
  )
}

export default Profile

/* const Profile = () => {
  return (
    <div className='profileblock'>
      <h1>Mi perfil</h1>
      <h3>user@pizza.com</h3>
      <button className='closesession'>Cerrar sesión</button>
    </div>
  )
} */
