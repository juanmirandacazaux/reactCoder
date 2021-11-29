import React from 'react'
import { Button, Card} from 'react-bootstrap';

export const Item = ({item}) => {

    const{price, product, desc, img} = item


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{product}</Card.Title>
          <Card.Text>{desc}
          </Card.Text>
          <Card.Text>{price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
