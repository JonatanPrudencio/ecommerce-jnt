import { useEffect, useState } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import { list, getList } from "../db";
import { useParams } from "react-router-dom";
import { customFetch } from "../utils/customFetch";


export default function ItemListContainer (prop){

const [items, setItems] = useState([]);

const {idCategory} = useParams();



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    
    

      if(idCategory === undefined){

        customFetch(1000, list)
        .then(result => setItems(result))
        .catch(err => console.log(err)) 

      }

      else{

        customFetch(1000, list.filter(item => item.categoryId === parseInt(idCategory)))
  
        .then(result => setItems(result))
        .catch(err => console.log(err)) 
     
      }

      
    
    }, [idCategory]);

   
    return (
      
      
        
        <div>


        <h2 className="title-i">{prop.title}</h2>

        <div className="grid-products container">
        <ItemList lista={items} />
        </div>

       
        
      

        </div>
        
        
        
    );

}

{

}



