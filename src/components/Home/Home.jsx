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
