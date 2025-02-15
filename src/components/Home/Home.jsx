import Card from '../Card/Card'
import Header from '../Header/Header'
import { pizzas } from '../../data/pizzas'
/*
import Pizza1 from '../../assets/img/pizza1.png'
import Pizza2 from '../../assets/img/pizza2.png'
import Pizza3 from '../../assets/img/pizza3.png' */

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

/* dati vecchi
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

export default Home
