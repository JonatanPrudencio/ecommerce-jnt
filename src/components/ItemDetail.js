import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useEffect , useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { CartContext } from "./CartContext";




export default function ItemDetail({item}){

    const [itemCount, setItemCount] = useState(0);

    const test = useContext(CartContext);
    
    const onAdd = (qty) =>{
        alert("Se agregaron " + qty + " items");
        setItemCount(qty);
        test.addItem(item, qty);
    }
     

    return (
        <>
        

        
         <section className="container sproduct  pt-5">
             <div className="row container--border">

                <div className="col-lg-6 col-md-6 col-12">

                    <img className="img-fluid w-100 pb-1" src={item.imagen}></img>

                </div>

                <div className="description col-lg-6 col-md-6 col-12">

                    <h3 className="py-4 font--7">{item.titulo}</h3>
                    <span>{item.precio}</span>

                    <select className="my-3 select--color">
               <option>Selecciona Talle</option>
               <option>S</option>
               <option>M</option>
               <option>L</option>
               <option>XL</option>
                </select>

                <div className="product-des">

               <h4 className="mt-5 mb-5 font--7">Descripción del producto</h4>

           <span>{item.descripcion}</span>

           </div>

          
          
             {

             
            itemCount === 0
            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} 
            />
            : <Link to='/cart' style={{textDecoration: "none"}}><button className="quantityAdd-button">checkout</button></Link>
                 }
        
    
         

            
                </div>

             </div>

         </section>
       
               
        </>
    )
}

