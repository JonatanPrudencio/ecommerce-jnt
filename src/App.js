import logo from './logo.svg';
import { BrowserRouter, Route , Routes , Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import swal from 'sweetalert';

import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Cart from './components/Cart';

import CartContextProvider from './components/CartContext';
import Home from './components/Home';

function App() {
  return (
    <>
    <CartContextProvider>

    
    <BrowserRouter>
    
    <NavBar />

   

    <Routes>

    <Route path='/' element={<Home />}/>

    <Route path='/product' element={<ItemListContainer title = "Productos" />}/>

    <Route path='/item/:idProd' element={<ItemDetailContainer />}/>

    <Route path='/category/:idCategory' element={<ItemListContainer />}/>

    <Route path='/cart' element={<Cart />}/>  
    

    </Routes>

    
    <Footer />
    </BrowserRouter>
    

    </CartContextProvider>

    </>
  );
}

export default App;
