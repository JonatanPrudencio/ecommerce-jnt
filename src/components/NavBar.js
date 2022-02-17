import logo from '../images/JNT LOGO.png'
import CardWidge from './CardWidge';
import { BrowserRouter, Route , Routes , Link } from 'react-router-dom';

const NavBar = () =>{
return(
    <div className = "head-navBar">

        <div className = "cont-img">
            <img className = "cont-img--cfg" src = {logo}></img>
        </div>

        <div className = "content-navBar">
            <ul className = "navBar-list">
                <li className= "navBar-list__item"><Link to='/'>Inicio</Link></li>
                <li className= "navBar-list__item"><Link to='/category/2'>Remeras</Link></li>
                <li className= "navBar-list__item"><Link to='/category/3'>Camperas</Link></li>
                <li className= "navBar-list__item"><Link to='/category/4'>Buzos</Link></li>
                <li className= "navBar-list__item"><Link to='/category/5'>Pantalones</Link></li>
            </ul>

            <CardWidge />
        </div>


    
       
    </div>

     
);

}

export default NavBar;