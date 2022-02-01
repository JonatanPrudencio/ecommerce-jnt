import logo from '../images/JNT LOGO.png'

const NavBar = () =>{
return(
    <div className = "head-navBar">

        <div className = "cont-img">
            <img className = "cont-img--cfg" src = {logo}></img>
        </div>

        <div className = "content-navBar">
            <ul className = "navBar-list">
                <li className= "navBar-list__item"><a href ="#">Inicio</a></li>
                <li className= "navBar-list__item"><a href ="#">Productos</a></li>
                <li className= "navBar-list__item"><a href ="#">¿Como comprar?</a></li>
                <li className= "navBar-list__item"><a href ="#">Contacto</a></li>
                <li className= "navBar-list__item"><a href ="#">Preguntas frecuentes</a></li>
            </ul>
        </div>
    </div>
);

}

export default NavBar;