import iconCart from '../images/carrito-icono.png'
import { BrowserRouter, Route , Routes , Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CardWidge = () =>{

    
return(
    <>

    <div className='head-navBar__cart'>



   <Link to={'/cart'}><button className = "btn-cart"><img src = {iconCart} className = "btn-cart__img"></img></button></Link> 
    </div>
   
   

   </>
);

}

export default CardWidge;