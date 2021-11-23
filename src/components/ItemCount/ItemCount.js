import React,{useState} from 'react'

export const ItemCount = ({inicial, max}) => {

    const [cantidad, setCantidad] = useState(inicial) 

    const sumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad+1) 
        }
        else{alert("No podes comprar mas de esta cantidad")}
    }

    const restar = () => {
        if( cantidad > inicial){
            setCantidad(cantidad-1)
        }
        else {alert("No podes comprar menos")}
    }


    return (
        <div>
            <h2>Cantidad:{cantidad}</h2>

            <button onClick = {sumar} >+</button>
            <button onClick = {restar}>-</button>
        </div>
    )
}

