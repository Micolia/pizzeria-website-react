import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)

  // effettuare il login
  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) {
        throw new Error('Credenziali non valide')
      }

      const data = await res.json()
      setToken(data.token) // salva email e token
      setEmail(data.email)
      console.log('Login effettuato con successo!')
    } catch (error) {
      console.error('Errore durante il login:', error.message)
    }
  }

  // registrar un nuovo utente
  const register = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) {
        throw new Error('Errore nella registrazione')
      }

      const data = await res.json()
      setToken(data.token)
      setEmail(data.email)
      console.log('Registrazione completata con successo!')
    } catch (error) {
      console.error('Errore durante la registrazione:', error.message)
    }
  }

  // logout - rimuovere email e token
  const logout = () => {
    setToken(null)
    setEmail(null)
    console.log('Logout effettuato')
  }

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

/* import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logout = () => {
    setToken(false)
  }

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  )
} */
