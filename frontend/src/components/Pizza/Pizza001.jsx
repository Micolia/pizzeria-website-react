import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Pizza.css'
import { CartContext } from '../../context/CartContext'

const Pizza = () => {
  const { id } = useParams()
  const [info, setInfo] = useState(null)
  const { addToCart } = useContext(CartContext)

  const getApi = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      if (!res.ok) throw new Error('Errore nel recupero dei dati')
      const data = await res.json()
      setInfo(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getApi()
  }, [id]) // nuova richiesta se cambia l'id

  if (!info) {
    return <p>Caricamento...</p>
  }

  return (
    <div className='card-container'>
      <div className='cardpizza'>
        <img src={info.img} alt={info.name} />
        <h2>{info.name.charAt(0).toUpperCase() + info.name.slice(1)}</h2>
        <p>{info.desc}</p>
        <div className='pizzaprice'>
          <h3>Prezzo:</h3><h3> ${info.price}</h3>
        </div>
        <h3>Ingredienti:</h3>
        <p>{info.ingredients.join(', ')}</p>
        <button className='button2' onClick={() => addToCart(info)}>Añadir al carrito</button>
      </div>
    </div>
  )
}

export default Pizza

/*
const Pizza = () => {
  const [info, setInfo] = useState(null)

  const getApi = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas/p001')
      const data = await res.json()
      setInfo(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  if (!info) {
    return <p>Caricamento...</p>
  }

  return (
    <div className='card'>
      <img src={info.img} alt={info.name} />
      <h2>{info.name}</h2>
      <p>{info.desc}</p>
      <div className='pizzaprice'>
        <h3>Prezzo:</h3><h3> ${info.price}</h3>
      </div>
      <h3>Ingredienti:</h3>
      <p>{info.ingredients.join(', ')}</p>
      <button className='button2'>Añadir al carrito</button>
    </div>
  )
}

*/
