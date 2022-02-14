import ItemCount from "./ItemCount";

export default function ItemDetail({item}){

    return (
        <>

    {/* <div className="cont-product">
            
            <div className="cont-product__img">
                <img className= "cont-product__img--prod" src={item.imagen} alt={item.descripcion} />
            </div>

            <div className="cont-product__descrip">
            <h2>{item.titulo}</h2>
            <h4>{item.precio}</h4>
            </div>
            
        </div>
        
      


         */}

         <section className="container sproduct  pt-5">
             <div className="row container--border">

                <div className="col-lg-6 col-md-6 col-12">

                    <img className="img-fluid w-100 pb-1" src={item.imagen}></img>

                </div>

                <div className="description col-lg-6 col-md-6 col-12">

                    <h3 className="py-4 font--7">{item.titulo}</h3>
                    <span>{item.precio}</span>

                    <select class="my-3 select--color">
               <option>Selecciona Talle</option>
               <option>S</option>
               <option>M</option>
               <option>L</option>
               <option>XL</option>
                </select>

                <div class="product-des">

               <h4 class="mt-5 mb-5 font--7">Descripción del producto</h4>

           <span>{item.descripcion}</span>

           </div>

           <ItemCount />

            
                </div>

             </div>

         </section>
        

        </>
    )
}

