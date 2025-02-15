import './Cart.css'
import { useState } from "react";

const initialLista = ['pan', 'queso', 'jamon' , 'cafe']

const Form = () => {
    const [lista, setLista] = useState (initialLista)  //initialLista qui serve perché il valore dell'input venga aggiunto alla lista
    const [text, setText] = useState ('') //per catturare valore input

    const addProduct = (e) => {
        e.preventDefault ()
        setLista([...lista, text]) //allo stato della lista aggiungo input (text), formato string --> mi serve come array [] + ...riprendo lista esistente e aggiungo nuovo valore input (senza ... si cancella)
        console.log(lista)
    }

    return (
        <>
        <form className='formlista' onSubmit={addProduct}> {/* non usare onClick in button perche manda a altra pagina*/}
        <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)} //funzione per cambiarte lo stato iniziale
        />

        <button type='submit'>Agregar</button>
        </form>

        <ul className='ulcarrito'>
            {lista.map((producto) => <li key={producto}>{producto}</li>)}
        </ul>
        </>
    )
}

export default Form


/*
const productos = ['Producto 1', 'Producto 2', 'Producto 3']

VERSIONE 1 (non conviene quando hai tanti prodotti perché manuale)

const App () => {
  return (
  <>
  <ul>
  <li>{productos[0]}</li>
  <li>{productos[1]}</li>
  <li>{productos[2]}</li>
  </ul>
  </>

  )}

FOR EACH modifica arreglo original (itera solo un arreglo --> una funcion para cada elemento)
productos.forEach(productos => console.log(procuctos))

MAP estrae array nuevo
const productos = productos.map(producto)

VERSIONE 2 - (con una linea di codice puoi estrarre migliaia di prodotti) - usare key come id unico o non funziona {producto.id}                                                               }

const App () => {
  return (
  <>
  <ul>
  {productos.map ((producto)=> <li key={producto}>{producto}</li>)}
  </ul>
  </>

)}

SE VOGLIO AGGIUNGERE STYLE

const colors = [{
id: 1,
color:red
}]

{colors.map ((color)=> <li key={color.id} style=>{{color}}</li>)}
*/

