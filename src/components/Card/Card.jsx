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