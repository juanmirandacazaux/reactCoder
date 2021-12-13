import React from 'react'
import { Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const Item = ({item}) => {

    const{price, product, desc, img, id} = item


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{product}</Card.Title>
          <Card.Text>{desc}
          </Card.Text>
          <Card.Text>{price}
          </Card.Text>
        <Link to = {`/detalle/${id}`}>
            <Button variant="primary">Ver detalle</Button>
        </Link>
        </Card.Body>
      </Card>
    )
}
