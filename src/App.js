import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Cart } from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';


function App() {
  return (
    <CartContextProvider>
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
    
    

    <Route
      exact path = '/cart' element = {<Cart/>}
      />
    
    </Routes>


    </div>
    </BrowserRouter>

    </CartContextProvider>
    
  );
}

export default App;





