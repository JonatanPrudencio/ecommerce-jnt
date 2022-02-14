import { useEffect, useState } from "react";

import { customFetch } from "../utils/customFetch";

import { list, getList } from "../db";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () =>{


    const [dato, setDato] = useState({});

    useEffect(() => {

        customFetch(2000, list[5])
        .then(result => setDato(result))
        .catch(err => console.log(err))
        
    }, []);

    return (
        <>
        
        <ItemDetail item={dato} />
        
        

        </>
    )
}

export default ItemDetailContainer;