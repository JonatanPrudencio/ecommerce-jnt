
const Footer = () =>{
return(
    <>
     <footer className="footer">

<div className="footer__container">

    <div className="footer__container-content">
        <div className="column-nav">
        <h4 className="footer__title">Navegación</h4>
    
    
        <ul className="footer__menu">
        <li className="footer__menu-item"><a className="footer__menu-item--link"  href="index.html">Inicio</a></li>
        <li className="footer__menu-item"><a className="footer__menu-item--link" href="pages/productos.html">Productos</a></li>
        <li className="footer__menu-item"><a className="footer__menu-item--link" href="pages/como-comprar.html">¿Cómo comprar?</a></li>
        <li className="footer__menu-item"><a className="footer__menu-item--link" href="pages/contact.html">Contacto</a></li>
        <li className="footer__menu-item"><a className="footer__menu-item--link" href="pages/preguntas-frecuentes.html">Preguntas frecuentes</a></li>
        </ul>
    
    
        </div>

        <div className="column-contact">
        <h4 className="footer__title">Contacto</h4>
        <ul className="footer__menu">
        <li className="footer__menu-item"><img src="imagenes/icono-tel2.png" className="footer__menu-item-ico"><a className="footer__menu-item-ico--link" href="tel:1154940496">1154940496</a></img></li>

        <li className="footer__menu-item"><img src="imagenes/icono-email2.png" className="footer__menu-item-ico"><a className="footer__menu-item-ico--link" href="mailto:jnt@gmail.com">jnt@gmail.com</a></img></li>

        <li className="footer__menu-item"><img src="imagenes/dir-icono.png" className="footer__menu-item-ico"><a className="footer__menu-item-ico--link" href="#" target="_blank">Dirección</a></img></li>

        </ul>
        </div>

        <div className="column-social">
        <h4 className="footer__title">Redes Sociales</h4>

        
            <div>
                
            
        

        <a href="https://www.instagram.com" target="_blank" className="footer__link"><svg class="footer__link--ico" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="384px" height="384px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg></a>
        <a href="https://www.facebook.com" target="_blank" className="footer__link"><svg class="footer__link--ico" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="384px" height="384px">    <path d="M 5 3 C 3.897 3 3 3.897 3 5 L 3 19 C 3 20.103 3.897 21 5 21 L 11.621094 21 L 14.414062 21 L 19 21 C 20.103 21 21 20.103 21 19 L 21 5 C 21 3.897 20.103 3 19 3 L 5 3 z M 5 5 L 19 5 L 19.001953 19 L 14.414062 19 L 14.414062 15.035156 L 16.779297 15.035156 L 17.130859 12.310547 L 14.429688 12.310547 L 14.429688 10.574219 C 14.429687 9.7862188 14.649297 9.2539062 15.779297 9.2539062 L 17.207031 9.2539062 L 17.207031 6.8222656 C 16.512031 6.7512656 15.814234 6.71675 15.115234 6.71875 C 13.041234 6.71875 11.621094 7.9845938 11.621094 10.308594 L 11.621094 12.314453 L 9.2773438 12.314453 L 9.2773438 15.039062 L 11.621094 15.039062 L 11.621094 19 L 5 19 L 5 5 z"/></svg></a>
        </div>
        
        </div>

    

    </div>
    

</div>


        <div className="footer__copy">
            <div className="footer__copy-text">
                <div className="footer__copy-text--h4">
                    <h6>© 2021 JNT. Todos los derechos reservados</h6>
                </div>
    
        

            </div>
        </div>
</footer>
    </>
   

     
);

}

export default Footer;