import { useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'



export const ItemListContainer = ({saludo}) => {
   
    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const{cat} = useParams()

    useEffect(() => {

        setLoading(true)
        if(cat){
        pedirDatos()
            .then( (resp) => {
                setProductos(resp.filter(prods => prods.cat === cat))
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
        }

        else {
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
        }
    }, [cat])

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



