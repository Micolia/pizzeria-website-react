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

    const [registration, setRegistration] = useState ({

        nombre: '',
        password: '',
        passwordConfirmation: ''
    })

    const [errorReg, setErrorReg] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    //comuncia che sono 3 inputs -- (e)vento
    const handleChange = (e) => {
        setRegistration({ ... registration, [e.target.name]: e.target.value }) //... fa una copia del valore precedente e la salva nella lista
    }

    const handleResult = () => {

        setIsSubmitted(true)

        if (!registration.nombre || !registration.password || !registration.passwordConfirmation) {
            setErrorReg(true)
            return
            }

        if (registration.password.length < 6) {
            setErrorReg(true)
            return
            }

        if (registration.password !== registration.passwordConfirmation) {
            setErrorReg(true)
            return
            }

        setErrorReg(false)

    }

    return (
        <div className='formRegistration'>
        <h2>Crear cuenta:</h2>
        {isSubmitted && (errorReg ? <p className="error">Hay un error en los datos</p> : <p className="success">Los datos son correctos</p>)}
        <input
        type= 'text'
        placeholder= 'Email'
        value={registration.nombre}
        onChange={handleChange}
        name='nombre' //definire nome valore o input utente viene sovrascritto
        />

        <input
        type= 'text'
        placeholder= 'Contraseña'
        value={registration.password}
        onChange={handleChange}
        name='password'
        />

        <input
        type= 'text'
        placeholder= 'Confirmar contraseña'
        value={registration.passwordConfirmation}
        onChange={handleChange}
        name='passwordConfirmation'
        />

        <button className='btnform' onClick={handleResult}>Registrate</button>
        </div>

    )

}

export default FormRegister