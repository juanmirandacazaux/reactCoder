import React,{useState, useEffect} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'



export const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(false)
    const [detalle, setDetalle] = useState([])

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setDetalle(resp.find(item=>item.id === 1))
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])

    console.log(detalle)


    return (
        <div>
            

            {
              loading 
              ? <h4>Cargando...</h4> 
              : <ItemDetail detalle={detalle}/>
            }
        </div>
    )
}
