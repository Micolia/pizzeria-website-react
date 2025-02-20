//VERSIONE 2

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

export default Home

/* VERSIONE 1:

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