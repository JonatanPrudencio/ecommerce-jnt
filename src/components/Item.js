import { Link } from "react-router-dom";


export default function Item({id, titulo, imagen, precio, descripcion}){
    return(
        
        <div className="cont-product">
            
            <div className="cont-product__img">
                 <div className="product__link">
						<Link to={'/item/' + id} className='shop__btn'>Ver producto</Link>
                       
                </div>
                <img className= "cont-product__img--prod" src={imagen} alt={descripcion} />
            </div>

            <div className="cont-product__descrip">
            <h2>{titulo}</h2>
            <h4>{precio}</h4>
            </div>
            
        </div>
        
    )
}
