import React from "react"
import './css/ubicacion.css'
import Subtitulo from '../assets/subtitulo.jsx';
import BotonY1 from "../assets/botonY1.jsx";

import { MyMap } from "./map"; './map.jsx'


function Ubicacion() {
    return (
        <>
            <Subtitulo
                subT1="Nuestra"
                subT2="Ubicación"
                textSub=""
            />

            <div className='container ubicacion'>
                <div className="mapaCuadro">

                    <MyMap />

                    <div className="textoUbicacion">
                        <p className="textoUbicacionTitulo">Cómo Llegar?</p>
                        <p className="textoUbicacionParrafo">Para facilitar tu llegada, hemos proporcionado un mapa detallado con indicaciones precisas. Sigue las instrucciones a continuación para encontrar el camino hacia nuestro gimnasio y comenzar tu viaje hacia una vida más saludable y activa.</p>
                        <div className="ubicacionInputs">
                            <div className="ubicacionInputsTexto">
                                <input type="text" placeholder="Tu Ubicación" />
                            </div>
                            <div>
                                <BotonY1 texto="Como llegar?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ubicacion