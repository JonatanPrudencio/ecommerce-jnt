export default function Item({titulo, imagen, precio, descripcion}){
    return(
        
        <div className="cont-product">
            
            <div className="cont-product__img">
                <img className= "cont-product__img--prod" src={imagen} alt={descripcion} />
            </div>

            <div className="cont-product__descrip">
            <h2>{titulo}</h2>
            <h4>{precio}</h4>
            </div>
            
        </div>
        
    )
}
