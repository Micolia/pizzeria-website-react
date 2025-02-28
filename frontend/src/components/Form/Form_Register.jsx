import './Form.css'
import { useState } from 'react'

const FormRegister = () => {
  /* ALTERNATIVA:
    const [nombre, setNombre] = useState ('')
    const [password, setPassword] = useState ('')
    const [passwordConfirmation, setPawwordconfirmation] = useState ('')
    <input
    type= 'text'
    placeholder= 'Email'
    value={nombre}
    onChange={(e) => setNombre (e.target.value)}
    />
    */

  const [registration, setRegistration] = useState({

    nombre: '',
    password: '',
    passwordConfirmation: ''
  })

  const [errorReg, setErrorReg] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // comuncia che sono 3 inputs -- (e)vento
  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value }) // ... fa una copia del valore precedente e la salva nella lista
  }

  const handleResult = () => {
    setIsSubmitted(true)

    if (!registration.nombre || !registration.password || !registration.passwordConfirmation) {
      setErrorReg('Debes ingresar todos los datos')
      return
    }

    if (registration.password.length < 6) {
      setErrorReg('La contraseña debe tener al menos 6 caracteres')
      return
    }

    if (registration.password !== registration.passwordConfirmation) {
      setErrorReg('Las contraseñas no coinciden')
      return
    }

    setErrorReg('')
  }

  return (
    <div className='formRegistration'>
      <h2>Crear cuenta:</h2>
      {isSubmitted && (errorReg ? <p className='error'>{errorReg}</p> : <p className='success'>Los datos son correctos</p>)}
      <input
        type='email'
        placeholder='Email'
        value={registration.nombre}
        onChange={handleChange}
        name='nombre'
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

      <button className='btnform' onClick={handleResult}>Registrate</button>
    </div>

  )
}

export default FormRegister
