import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="mi-app">

    <NavBar/>
   


    <ItemListContainer saludo='Bienvenido a RockStart'/>
    <ItemDetailContainer/>

    
  

      
    </div>

    
  );
}

export default App;





