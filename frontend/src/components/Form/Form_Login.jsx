import './form.css'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {
  const { login } = useContext(UserContext)
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      setError('Debes ingresar todos los datos')
      return
    }

    if (loginData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    try {
      await login(loginData.email, loginData.password)
      navigate('/')
    } catch (error) {
      setError('Email o contraseña incorrectos')
    }
  }

  return (
    <div className='blockForm'>
      <div className='formLogin'>
        <h2>Iniciar sesión:</h2>
        {error && <p className='error'>{error}</p>}
        <input
          type='email'
          placeholder='Email'
          value={loginData.email}
          onChange={handleChange}
          name='email'
        />

        <input
          type='password'
          placeholder='Contraseña'
          value={loginData.password}
          onChange={handleChange}
          name='password'
        />

        <button className='btnform' onClick={handleLogin}>Acceder</button>
      </div>
    </div>
  )
}

export default FormLogin
