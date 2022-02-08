import { useEffect , useState } from "react";

const ItemCount = ()=>{
    const stock=20;
    const [quantity,setQuantity]= useState(1);
    
    const increment=()=>{
        if(quantity<stock){
            setQuantity(quantity+1);
        }
        
    }
    const reduce=()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
        
    }

    const quantityAdd=()=>{
        alert('La cantidad agregada fue de: ' + quantity) 
        
    }


    useEffect(() => {
      console.log('actualizacion') 
     
    },[quantity]);
    return(
        <>
        <div className="content-add">
            <div className="items-count">
                <button onClick={reduce}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
            </div>
            <button className="quantityAdd-button" onClick ={quantityAdd}>Agregar</button>
        </div>
        
        </>
    );
}

export default ItemCount;