import React,{useState, useEffect} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router'


export const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(false)
    const [detalle, setDetalle] = useState([])


    const{id} = useParams()

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setDetalle(resp.find(item=>item.id === parseInt(id)))
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [id])

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
