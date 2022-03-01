import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';

const Cart =() =>{

    const test = useContext(CartContext);
    
    console.log(test);

   
    return(
        <>
            

        {
           

           
            test.cartList.length > 0

            ?
        
            
            

            <div className="container cont-title__cart">

                <div>
                    
                <h2>CARRITO DE COMPRAS</h2>
                </div>

                <div>
                <button onClick={()=> test.clearList()}>Borrar todos los productos</button>
                </div>

                <div className="checkout">
                    <h3 className="checkout__title">Resumen de compra</h3>
                    <span>{"Cantidad de items: " + test.calcQtyItems()}</span>
                    <span><b>SUBTOTAL:</b>{" $" + test.calcSubtotal()}</span>
                    <span><b>TOTAL:</b>{" $" + test.calcSubtotal()}</span>
                    <button>FINALIZAR COMPRA</button>
                </div>
                
                

                

            </div>

            

            :
            <div className="content-CartVacio container">
                <h3 className="content-CartVacio__title">Carito Vacío</h3>
                <div className="content-CartVacio__spn"> 
                <span>Debes elegir al menos un producto para finalizar tu compra</span>
                </div>
                
                <button className="content-CartVacio__btn"><Link to='/'>Elegir productos</Link></button>
            </div>
            
            
        }


        {
            test.cartList.length > 0 &&

        
            test.cartList.map(item => (

                <>

                <div className="cont-item__cart container">

                 <div>
                <img className="cont-img--cfg" src={item.imagen}></img>
                    </div>
            
                    <h4><b>Producto: </b>{item.titulo}</h4>
            

                    <h5><b>Precio:</b>{" $" + item.precio}</h5>
                    <h6><b>CANTIDAD: </b>{item.qty}</h6>

                    <h6><b>SUBTOTAL:</b>{" $" + item.precio * item.qty}</h6>

                    <button onClick={()=> test.removeItem(item.id)}>Borrar</button>

                </div>
                
              
                </>

               
                
            )
            
            )


            
                
            
        }
        
            
        
       
      
           
           
               
            
           
           

           
       
            
        
        
        
        </>
    )
} 

export default Cart;