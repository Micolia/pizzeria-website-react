import { useEffect, useState } from 'react'
import './Pizza.css'

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

export default Pizza
