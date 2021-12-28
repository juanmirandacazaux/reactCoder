import React from 'react'
import { useCartContext } from '../../Context/CartContext';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {cartList, borrarCarrito, eliminarItem} = useCartContext()
    return (
        <div>
            {
                cartList.length > 0 
                
                &&
               
                cartList.map((prod) => {
                    return(
                        <>
                        <Card className="text-center" key = {prod.id}>
                            
                            <Card.Body>
                                <Card.Title>{prod.product}</Card.Title>
                                <Card.Text>{prod.desc}</Card.Text>
                                <Card.Text>${prod.price}</Card.Text>
                                <Card.Text>Cantidad: {prod.cant} </Card.Text>
                                <Button variant="primary" onClick = {()=> eliminarItem(prod.id) }>Eliminar</Button>
                            </Card.Body>
                            
                           </Card>

                        </>
                    )
                } ) 
            }
            <Link to = '/'>Seguir Comprando</Link>
            <Button onClick = {borrarCarrito}>Vaciar carrito</Button>
        </div>
    )
}
