import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart =() =>{

    const test = useContext(CartContext);
    
    console.log(test);
    return(
        <>
            <div className="container cont-title__cart">

                <h2>CARRITO DE COMPRAS</h2>
                <div>
                <button onClick={()=> test.clearList()}>Borrar todos los productos</button>
                </div>
            </div>
            



        {
            test.cartList.length > 0 &&

            
            test.cartList.map(item => (

                <>

                <div className="cont-item__cart container">

                 <div>
                <img className="cont-img--cfg" src={item.imagen}></img>
                    </div>
            
                    <h4><b>Producto: </b>{item.titulo}</h4>
            

                    <h5><b>Precio:</b>{item.precio}</h5>
                    <h6><b>CANTIDAD: </b>{item.qty}</h6>

                    <button onClick={()=> test.removeItem(item.id)}>Borrar</button>

                </div>
                
              
                </>

               
                
            ))
        }
       
      
           
           
               
            
           
           

           
       
            
        
        
        
        </>
    )
} 

export default Cart;