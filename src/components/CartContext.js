import { createContext, useState } from "react";




export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
   
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) =>{

        const isInCart = cartList.find((itemD) =>itemD.id === item.id);

        if(isInCart){
            setCartList(
                cartList.map((itemPlant) =>
                itemPlant.id === item.id ?  {
                    ...itemPlant, qty: itemPlant.qty + qty
                } : itemPlant
            )
            )
        }

        else{

            setCartList([
                ...cartList,
                {
                id: item.id,
                titulo: item.titulo,
                imagen: item.imagen,
                precio: item.precio,
                qty: qty,
            }])
        

        }

            
       
    }

    const clearList = () =>{
        setCartList([]);
    }

    const removeItem = (id) => {
       
        setCartList(cartList.filter((item) => item.id !== id));
      };
    return(
        
        
        <CartContext.Provider value={{cartList, addItem, removeItem, clearList}}>
            {children}
        </CartContext.Provider>
        
    );
}

export default CartContextProvider;