import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import db from "../utils/firebaseConfig";
import { async } from "@firebase/util";

import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

const Cart =() =>{

    const test = useContext(CartContext);
    
    console.log(test);


    const createOrder = () =>{
        let order = {
            buyer :{
                email: "jona.prudencio14@hotmail.com",
                name: "Jonatan Prudencio",
                phone: "1554940493"
            },
            items: test.cartList.map((item)=>{
                return {
                    id: item.id, 
                    titulo: item.titulo,
                    cantidad: item.qty,
                    precio: item.precio
                };
            }),

            
            total: test.calcSubtotal(),
            fecha: serverTimestamp()
        };
        console.log(order);

        const createOrderInFirestore = async () =>{
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore().then(result => {alert('Tu pedido fue creado con exito: '+ result.id);
                                                test.cartList.map(async (item) => {
                                                    const itemRef = doc(db,"list",item.id);
                                                    await updateDoc(itemRef,{
                                                        stock: increment(-item.cantidad)
                                                    });
                                                }); 
                                                test.clearList();})
                               .catch(error => console.log(error));


    }

   
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
                <button className="btn--cart" onClick={()=> test.clearList()}>Borrar todos los productos</button>
                </div>

                <div className="checkout">
                    <h3 className="checkout__title">Resumen de compra</h3>
                    <span>{"Cantidad de items: " + test.calcQtyItems()}</span>
                    <span><b>SUBTOTAL:</b>{" $" + test.calcSubtotal()}</span>
                    <span><b>TOTAL:</b>{" $" + test.calcSubtotal()}</span>
                    <button onClick={createOrder} className="btn--cart">FINALIZAR COMPRA</button>
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

                    <button className="btn--cart" onClick={()=> test.removeItem(item.id)}>Borrar</button>

                </div>
                
              
                </>

               
                
            )
            
            )


            
                
            
        }
        
            
        
       
      
           
           
               
            
           
           

           
       
            
        
        
        
        </>
    )
} 

export default Cart;