import './Cart.css'
import { useState, useContext } from 'react'
// import { pizzaCart } from '../../data/pizzas'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, increase, decrease } = useContext(CartContext)

  const calcTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0)
  }

  return (
    <div className='carrito'>
      <h2>Detalles de tu pedido:</h2>

      {cart.length > 0
        ? (
            cart.map((item) => (
              <div className='cardCarrito' key={item.id}>
                <div className='mainInfoCarrito'>
                  <img src={item.img} className='imgPizzaCart' alt={item.name} />
                  <h3>{item.name}</h3>
                </div>

                <div className='detailsCarrito'>
                  <p>Precio: {item.price} $</p>
                  <button className='buttonCartRemove' onClick={() => decrease(item.id)}>-</button>

                  <span>{item.count}</span>

                  <button className='buttonCartAdd' onClick={() => increase(item.id)}>+</button>

                </div>
              </div>
            ))
          )
        : (
          <h3>Tu carrito está vacío 🛒</h3>
          )}

      <h2 className='totalprice'>Total: {calcTotal()} $</h2>
    </div>
  )
}
/* OLD VERSION
const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)
  const calcTotal = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.count
    })
    return total
  }

  const aumentarCantidad = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1
        }
      }
      return item
    })
    setCart(newCart)
  }

  const disminuirCantidad = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count > 0 ? item.count - 1 : 0
        }
      }
      return item
    })
    setCart(newCart)
  }

  return (
    <div className='carrito'>
      <h2>Detalles de tu pedido:</h2>
      {cart.map((item) => (

        <div className='cardCarrito' key={item.id}>

          <div className='mainInfoCarrito'>
            <img src={item.img} className='imgPizzaCart' alt={item.name} />
            <h3>{item.name}</h3>
          </div>

          <div className='detailsCarrito'>
            <p>Precio: {item.price} $</p>
            <button className='buttonCartRemove' onClick={() => disminuirCantidad(item.id)}>-</button>
            <span>{item.count}</span>
            <button className='buttonCartAdd' onClick={() => aumentarCantidad(item.id)}>+</button>
          </div>
        </div>

      ))}

      <h2 className='totalprice'>Total: {calcTotal()} $</h2>
    </div>

  )
} */

export default Cart
