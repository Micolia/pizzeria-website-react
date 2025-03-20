import './form.css'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const FormRegister = () => {
  const { register } = useContext(UserContext)
  const navigate = useNavigate() // reindirizza utente

  const [registration, setRegistration] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value })
  }

  const handleRegister = async () => {
    if (!registration.email || !registration.password || !registration.passwordConfirmation) {
      setError('Debes ingresar todos los datos')
      return
    }

    if (registration.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    if (registration.password !== registration.passwordConfirmation) {
      setError('Las contraseñas no coinciden')
      return
    }

    try {
      await register(registration.email, registration.password)
      navigate('/') // ✅ Reindirizziamo l'utente alla home
    } catch (error) {
      setError('Error en el registro, intenta con otro email')
    }
  }

  return (
    <div className='blockForm'>
      <div className='formRegistration'>
        <h2>Crear cuenta:</h2>
        {error && <p className='error'>{error}</p>}
        <input
          type='email'
          placeholder='Email'
          value={registration.email}
          onChange={handleChange}
          name='email'
        />

        <input
          type='password'
          placeholder='Contraseña'
          value={registration.password}
          onChange={handleChange}
          name='password'
        />

        <input
          type='password'
          placeholder='Confirmar contraseña'
          value={registration.passwordConfirmation}
          onChange={handleChange}
          name='passwordConfirmation'
        />

        <button className='btnform' onClick={handleRegister}>Registrate</button>
      </div>
    </div>
  )
}

export default FormRegister
