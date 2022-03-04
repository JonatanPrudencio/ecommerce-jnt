import iconCart from '../images/carrito-icono.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CardWidge = () =>{

    
    const test = useContext(CartContext);
    
return(
    <>

    <div className='head-navBar__cart'>

    <Link to={'/cart'}><button className = "btn-cart"><img src = {iconCart} className = "btn-cart__img"></img></button></Link> 

    {
        test.cartList.length > 0 &&
        <div className='head-navBar__cart-qty'>

        <span>{test.calcQtyItems()}</span>
         </div>
    }

    

    


   
    </div>
   
   

   </>
);

}

export default CardWidge;