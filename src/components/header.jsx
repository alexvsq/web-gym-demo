import  React  from "react";
import './css/header.css'
import Nav from './nav.jsx'
import BotonY1 from "../assets/botonY1";
import BotonB1 from "../assets/botonB1";

function Header() {
    return (
        <>
            <header className="header1" id="header">
                <Nav />
                <div className=" container headerDiv">
                    <div className="headerDiv1">
                        <p className="hd1p1">EMPIEZA HOY EL</p>
                        <p className="hd1p2">CAMBIO</p>
                        <p className="hd1p3">HACIA UNA MEJOR VERSIÓN DE TI</p>
                    </div>
                    <div className="headerDiv2">

                        <div className="headerDiv2CuadroFondo">
                            <div className="headerDiv2Cuadro">
                                <p>Únete a nosotros hoy y comienza tu viaje hacia una vida más saludable y activa</p>
                                <div className="headerDiv2Botones">
                                    <BotonB1 texto="Clase Gratis" />
                                    <BotonY1 texto="Inscríbete" />
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>

            </header>

        </>
    )
}

export default Header;