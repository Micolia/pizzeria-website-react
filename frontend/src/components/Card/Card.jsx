//VERSIONE 2

import './Card.css'

const Card = ({pizza}) => {
const { desc, id, img, ingredients, name, price } = pizza //estraggo valori da data

    return (
        <div className='pizzaCard'>
        <div className='pizzaContent'>
        <img src= {img} alt='pizza'/>
        <h2>Pizza {name}</h2>
        <p>Ingredientes:</p>

        <ul className='ulpizzacard'>
        {ingredients.map((ingredient, index) => (

         <li key={index}>{ingredient}</li>

        ))}
        </ul>

        <p>{desc}</p>
        <h3>Precio: {price} $</h3>
        <button className='button2'>Añadir al carrito</button>
        </div>
        </div>
    )
}

export default Card

/* VERSIONE 1:

const Card = (props) => {
return (

    <div className='pizzaCard'>
    <div className='pizzaContent'>
    <img src={props.img} alt='pizza'/>
    <h2>Pizza {props.name}</h2>
    <p>Ingredientes:</p>
    <p>{props.ingredients}</p>
    <h3>Precio: {props.price} $</h3>
    </div>

    <div className='buttons'>
    <button className='button1'>Ver más </button>
    <button className='button2'>Añadir</button>
    </div>

    </div>
)
}
*/