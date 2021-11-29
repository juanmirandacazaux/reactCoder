import React from 'react'
import {Item} from './Item'

export const ItemList = ({productos}) => {
    console.log(productos)
    return (
        <div className="d-flex justify-content-between flex-wrap mx-4">
            {productos?.map(item => <Item key={item.id} item={item}/>) }
        </div>
    )
}
