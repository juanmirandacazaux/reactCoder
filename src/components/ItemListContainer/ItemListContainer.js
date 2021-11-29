import { useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import "./ItemListContainer.css"



export const ItemListContainer = ({saludo}) => {
   
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProductos(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])

console.log(productos)
    return (
        <div>
            <h2 className="tituloInicio">  {saludo} </h2>
            <hr/>

            {
              loading 
              ? <h4>Cargando...</h4> 
              : <ItemList productos={productos}/>
            }
        </div>
    )
}



