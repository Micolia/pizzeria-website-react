import './profile.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { email, logout, token, getProfile } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login') // utente non autenticato va a login
    } else {
      getProfile()
    }
  }, [token, navigate, getProfile])

  const handleLogout = () => {
    logout()
    navigate('/login') // reindirizza a login dopo logout
  }

  if (!email) {
    return <p>Loading...</p> // attesa che carichi dati email
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
