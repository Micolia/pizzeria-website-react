// VERSIONE 3 DATA API

import { useEffect, useState, useContext } from 'react'
import Header from '../Header/Header'
import './Home.css'
import { CartContext } from '../../context/CartContext'

const Home = () => {
  const [info, setInfo] = useState([])
  const { addToCart } = useContext(CartContext)

  const getApi = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setInfo(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <>
      <Header />

      <div className='cards'>
        {info.map((pizza) => (
          <div key={pizza.id} className='card'>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h2>
            <p>{pizza.desc}</p>
            <div className='pizzaprice'><h3>Precio:</h3><h3> ${pizza.price}</h3></div>
            <h3>Ingredientes:</h3>
            <p>{pizza.ingredients.join(', ')}</p>
            <button className='button2' onClick={() => addToCart(pizza)}>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home

/* VERSIONE 2 DATA EXTERN

import Card from '../Card/Card'
import Header from '../Header/Header'
import { pizzas } from '../../data/pizzas'
import './Home.css'

const Home =() => {
return (
<>
<Header />

<div className='cards'>
{pizzas.map(pizza => (
  <div className='card' key={pizza.id}>
  <Card pizza={pizza}/>
  </div>
))}

</div>

</>
)
}

export default Home  */

/* VERSIONE 1 DATA MANUALE

const Home =() => {
  return(

    <>
    <Header />
    <div className='cards'>
    <Card name="Napoletana"
    price={5950}
    ingredients={["mozzarella, ", "tomates, ", "jamón, ", "orégano "]}
    img={Pizza1}
    />

    <Card name="Española"
    price={6950}
    ingredients={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]}
    img={Pizza2}
    />

    <Card
    name="Peperoni"
    price={6950}
    ingredients={["mozzarella, ", "pepperoni, ", "orégano"]}
    img={Pizza3}
    />
    </div>

   </>
  )
  }
  */
