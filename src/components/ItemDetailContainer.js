import { useEffect, useState } from "react";

import { customFetch } from "../utils/customFetch";
import { firestoreFetch, firestoreFetchFind } from "../utils/customFetch";

import ItemDetail from "./ItemDetail";

import db from "../utils/firebaseConfig";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{


    const [dato, setDato] = useState([]);

    const {idProd} = useParams();
    console.log(idProd);

    useEffect(() => {

        firestoreFetchFind(idProd)
            .then(result => setDato(result))
            .catch(error => console.log(error))
        
    }, [idProd]);

    console.log(dato);

    return (
        <>
        
        <ItemDetail item={dato} />
        
        

        </>
    )
}

export default ItemDetailContainer;