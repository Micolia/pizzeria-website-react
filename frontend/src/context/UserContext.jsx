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

  // profilo utente loggato

  const getProfile = async () => {
    if (!token) return // se non c'è token logout

    try {
      const res = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // manda token in header
          'Content-Type': 'application/json'
        }
      })

      if (!res.ok) {
        throw new Error('Errore nel recupero del profilo')
      }

      const data = await res.json()
      setEmail(data.email) // aggiorna email con info da API
      console.log('Profilo utente:', data)
    } catch (error) {
      console.error('Errore durante il recupero del profilo:', error.message)
    }
  }

  // logout - rimuovere email e token
  const logout = () => {
    setToken(null)
    setEmail(null)
    console.log('Logout effettuato')
  }

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
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
