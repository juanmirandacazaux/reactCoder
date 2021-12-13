import React from 'react'
import {Card} from 'react-bootstrap';

export const ItemDetail = ({detalle}) => {

    const{desc, price, product, img} = detalle
    
    console.log(detalle)

    return (
        <Card className="w-25 h-25 mt-5 m-auto mb-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>{desc} </Card.Text>
          <Card.Text>{price} </Card.Text>
          <Card.Text>{product}</Card.Text>
        </Card.Body>
      </Card>
    )
}
