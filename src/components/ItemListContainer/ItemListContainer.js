import { useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'



export const ItemListContainer = ({saludo}) => {
   
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                console.log(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])


    return (
        <div>
            {saludo}
            <hr/>

            {
              loading ? <h4>cargando...</h4> : <h4>Productos cargados</h4>
            }
        </div>
    )
}



