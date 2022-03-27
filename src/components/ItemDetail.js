import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import iconCamion from '../images/icon-camion.png';
import iconDev from '../images/icon-dev.png';

import iconQuestion from '../images/question.png';
import { useContext, useEffect , useState } from "react";
import swal from "sweetalert";
import { CartContext } from "./CartContext";




export default function ItemDetail({item}){

    const [itemCount, setItemCount] = useState(0);

    const test = useContext(CartContext);
    
    const onAdd = (qty) =>{
        swal("Se agregaron " + qty + " items");
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
                    <span>{"$ "+ item.precio}</span>

                    <select className="my-3 select--color">
               <option>Selecciona Talle</option>
               <option>S</option>
               <option>M</option>
               <option>L</option>
               <option>XL</option>
                </select>

                {

             
itemCount === 0
? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} 
/>
: <Link to='/cart' style={{textDecoration: "none"}}><button className="quantityAdd-button">checkout</button></Link>
     }

                
                <div className="product-shipping">
           <div className="btn btn--cfg" data-bs-toggle="modal" data-bs-target="#exampleModal">

           <div className="product-shipping__free">
   
               <div className="product-shipping__free-icon">
   
                   <img src={iconCamion} alt="" className="product-shipping__icon"></img>
               </div>
   
               <div className="product-shipping__free-info">
   
                   <div className="product-shipping__free-info-title">
                       Envío Gratuito
                       <img src={iconQuestion} alt="" className="product-shipping__free-info__title-icon"></img>
                   </div> 
                   <div className="product-intro__freeshipping-desc"><span>Envío normal gratuito para pedidos de más de $5.000</span>
   
                   </div>
   
               </div>
   
           </div>
   
   
   
     </div>

     <div type="button" className="btn btn--cfg" data-bs-toggle="modal" data-bs-target="#exampleModal2">
     <div className="product-shipping__dev">

                   <div className="product-shipping__dev-icon">
                       <img src={iconDev} alt="" className="product-shipping__icon"></img>
                   </div>

                   <div><div className="product-shipping__dev-title">
                       Devoluciones
                       <img src={iconQuestion} alt="" className="product-shipping__dev-title__icon"></img>
                   </div> <div className="product-intro__freeshipping-desc">
                       Más información
                   </div></div>

                   

               </div>
  
    </div>

               
           </div>

       

                <div className="product-des">

               <h4 className="mt-5 mb-5 font--7">Descripción del producto</h4>

               <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Material y Detalles
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Envíos, Cambios y Devoluciones
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
</div>

          

           </div>

           

          
         

            
                </div>

             </div>

         </section>
       
               
        </>
    )
}

