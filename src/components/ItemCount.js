import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemCount = ({stock = 0, initial = 1 , onAdd})=>{
    const [quantity,setQuantity]= useState(0);

    useEffect(() => {
        setQuantity(initial);
       
      },[]);
   
    
    
    const increment=()=>{
        if(quantity<stock){
            setQuantity(quantity+1);
        }
        
    }
    const reduce=()=>{
        if(quantity>initial+1){
            setQuantity(quantity-1);
        }
        
    }

    // const quantityAdd=()=>{
    //     alert('La cantidad agregada fue de: ' + quantity) 
    //     setQuantity(quantity);
    // }

   
   
    // useEffect(() => {
    //   console.log('actualizacion') 
     
    // },[quantity]);
    return(
        <>
        <div className="content-add">
            <div className="items-count">
                <button onClick={reduce}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
            </div>
            {
                stock && quantity

                ? <button className="quantityAdd-button" onClick={() => onAdd(quantity)}>Agregar</button> 
                : <button disabled>Agregar</button>
            }
              

                
            
        </div>
        
        </>
    );
}

export default ItemCount;