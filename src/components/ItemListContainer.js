import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { firestoreFetch, firestoreFetchFilter} from "../utils/customFetch";
import { useParams } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";

import db from "../utils/firebaseConfig";
import { async } from "@firebase/util";


export default function ItemListContainer (prop){

const [items, setItems] = useState([]);

const {idCategory} = useParams();

  useEffect(() => {

    if (idCategory === undefined) {

      firestoreFetch()
    .then(result => setItems(result))
    .catch(error => console.log(error));
      
    }
    
    else{

      firestoreFetchFilter("categoryId", parseInt(idCategory))
                        .then(result => setItems(result))
                        .catch(error => console.log(error))

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



