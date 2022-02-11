import { useEffect, useState } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import { list, getList } from "../db";


export default function ItemListContainer (prop){

const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(async () => {
        setLoading(true);
        
        try {
          const data = await getList(list, 2000);
          console.log(data);
          setItems(data);
          setLoading(false);
        } catch (e) {
          
        }
      }, []);

    return (
      
      
        
        <div>


        <h2>{prop.title}</h2>

        <div className="grid-products">
        <ItemList lista={items} />
        </div>

       
        
      

        </div>
        
        
        
    );

}

{

}



