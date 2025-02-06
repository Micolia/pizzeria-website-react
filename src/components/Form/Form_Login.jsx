import './Form.css'
import { useState } from 'react'

const FormLogin = () => {

    const [login, setLogin] = useState ({

        nombre: '',
        password: ''
    })

    const [error, setError] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        setLogin({ ... login, [e.target.name]: e.target.value })
    }

    const handleResult = () => {

        setIsSubmitted(true)

        if (!login.nombre || !login.password) {
            setError(true)
            return
            }

        if (login.password.length < 6) {
            setError(true)
            return
            }

            setError(false)
    }

    return (

        <div className='formLogin'>
        <h2>Iniciar sesión:</h2>
        {isSubmitted && (error ? <p className="error">Hay un error en los datos</p> : <p className="success">Los datos son correctos</p>)}
        <input
        type= 'text'
        placeholder= 'Email'
        value={login.nombre}
        onChange={handleChange}
        name='nombre'
        />

        <input
        type= 'text'
        placeholder= 'Contraseña'
        value={login.password}
        onChange={handleChange}
        name='password'
        />

        <button className='btnform' onClick={handleResult}>Acceder</button>
        </div>

    )

}

export default FormLogin