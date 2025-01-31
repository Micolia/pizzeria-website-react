import './Card.css'

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

export default Card