import React, { useState } from 'react'
import {Card} from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({detalle}) => {

    const [mostrar, setMostrar] = useState(false)
    const {agregarAlCarrito, cartList} = useCartContext()
    const{desc, price, product, img} = detalle
    
    console.log(detalle)

    function onAdd(counter) {
      setMostrar(true)
      agregarAlCarrito({...detalle, cant:counter})
    }
    
    console.log(cartList)

    return (
        <Card className="w-25 h-25 mt-5 m-auto mb-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>{desc} </Card.Text>
          <Card.Text>{price} </Card.Text>
          <Card.Text>{product}</Card.Text>
          {!mostrar ? <ItemCount inicial = {1} max = {10} onAdd = {onAdd} />: <Link to = '/cart'>Ir al carrito</Link> }
        </Card.Body>
      </Card>
    )
}
