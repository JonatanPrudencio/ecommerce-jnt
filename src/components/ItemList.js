

import Item from "./Item";

export default function ItemList({ lista }){


    return(

      
          lista.map((item) => (

          <>

        <Item
          key={item.id}
          titulo={item.titulo}
          precio={item.precio}
          descripcion={item.descripcion}
          imagen={item.imagen}
        />


          </>
          ))

    );
}


