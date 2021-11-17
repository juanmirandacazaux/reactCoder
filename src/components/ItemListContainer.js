import { React, useState} from 'react'
import { ReactDOM } from 'react'

const ItemListContainer = () => {
    return (
        <div>
            
        </div>
    )
}

const  ItemCount = ({ stock, initial, onAdd }) => {
    const initialCant = initial || 1;
    


    const [cant, setCant] =  useState(initialCant);

    const handleCantDown = () => {
        if (cant > 0){ setCant(cant-1)}
    }

    const handleCantUp = () => {
        if (cant < stock){ setCant(cant +1)           
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mi-app')
  );

  
export default {App,  ItemListContainer }