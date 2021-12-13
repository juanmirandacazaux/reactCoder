import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="mi-app">

    <NavBar/>
   

    <Routes>
      <Route
      exact path = '/' element = {<ItemListContainer saludo='Bienvenido a RockStart'/>}
      />

      <Route
      exact path = '/categoria/:cat' element = {<ItemListContainer saludo='Bienvenido a RockStart'/>}
      />

    <Route
      exact path = '/detalle/:id' element = {<ItemDetailContainer/>}
      />
    
    </Routes>

    </div>
    </BrowserRouter>
    
  );
}

export default App;





