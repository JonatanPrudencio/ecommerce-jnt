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

    const calcQtyItems = () =>{
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
        }  


        const calcTotalPorItem= (id) =>{
            let index = cartList.map(item => item.id).indexOf(id);
            return cartList[index].precio * cartList[index].qty;
            }  

        const calcSubtotal= () =>{
            let totalPerItem = cartList.map(item => calcTotalPorItem(item.id));
            return totalPerItem.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
            }  
    return(
        
        
        <CartContext.Provider value={{cartList, addItem, removeItem, clearList, calcQtyItems, calcSubtotal}}>
            {children}
        </CartContext.Provider>
        
    );
}

export default CartContextProvider;