export default function Item({titulo, imagen, precio, descripcion}){
    return(
        
        <article>
            <h2>{titulo}</h2>
            <div>
                <img src={imagen} alt={descripcion} />
            </div>
            <h4>{precio}</h4>
        </article>
        
    )
}
