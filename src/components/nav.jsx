import { React, useState } from "react";
import './css/nav.css'
import BotonY1 from "../assets/botonY1.jsx";

function Nav() {

    const [menu, setMenu] = useState(false);
    
    function menuToggle() {
        setMenu(!menu)
    }

    return (

        <nav className="navFondo">
            <div className="container">

                <div className="nav">

                    <div className="navLogo">
                        <img src="/images/logo2.png " alt="" />
                    </div>

                    <div className={`listaBotones ${menu? 'enable': ''}`}>
                        <ul>
                            <li><a href="#servicios"> Servicios</a></li>
                            <div className="lineaNav"></div>
                            <li><a href="#promociones"> Promociones</a></li>
                            <div className="lineaNav"></div>
                            <li><a href="#planes">Planes</a> </li>
                            <div className="lineaNav"></div>
                            <li><a href="#nosotros"> Nosotros</a></li>
                            <div className="lineaNav"></div>
                            <li><a href="#contacto">Contacto</a> </li>
                        </ul>
                    </div>

                    <div className="botonesNav">
                        <p>Registrarse</p>
                        <BotonY1 texto="Ingresar"/>
                    </div>
                    <div className="iconNav" onClick={menuToggle}>
                        <img src={`/images/${ menu? 'menuClose.svg': 'menu-h.svg'}`} alt="" />
                    </div>
                </div>

            </div>
        </nav >

    )
}

export default Nav;