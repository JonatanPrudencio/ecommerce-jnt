import { useEffect, useState } from "react";

import { customFetch } from "../utils/customFetch";

import { list, getList } from "../db";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () =>{


    const [dato, setDato] = useState({});

    const {idProd} = useParams();
    console.log(idProd);

    useEffect(() => {

        customFetch(2000, list.find(item => item.id === parseInt(idProd)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
        
    }, [idProd]);

    return (
        <>
        
        <ItemDetail item={dato} />
        
        

        </>
    )
}

export default ItemDetailContainer;