import React from "react"
import './css/contacto.css'
import Subtitulo from '../../src/assets/subtitulo.jsx';
import BotonY1 from "../assets/botonY1.jsx";

function Contacto() {
    return (
        <div id="contacto">
            <Subtitulo
                subT1=""
                subT2="Contáctenos"
                textSub=""
            />
            <div className="container ">
                <div className="contacto">
                    <div className="ubicacionInputsTexto contactoCuadroInputs">
                        <div className="contactoCuadroInputsTextos">
                    
                            <input type="text" placeholder="Nombre" />

                            <input type="text" placeholder="Correo Electrónico" />

                            <input type="text" placeholder="Teléfono" />

                            <input type="text" placeholder="Mensaje" />

                        </div>

                        <aside className="contactoBoton">

                            <BotonY1 texto="Enviar" />
                        
                        </aside>
                    
                    </div>

                    <article className="contactoRedes">
                        <p>Nuestras Redes</p>
                        <div className="contactoRedesImages">
                            <img src="/images/fbIcon.svg" alt="fb" />
                            <img src="/images/wsIcon.svg" alt="ws" />
                            <img src="/images/igIcon.svg" alt="ig" />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Contacto