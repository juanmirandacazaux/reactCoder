import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="mi-app">

    <NavBar/>
   


    <ItemListContainer saludo='Bienvenido Al Sitio'/>
    <ItemCount inicial={1} max = {10} />

    
  

      
    </div>

    
  );
}

export default App;





