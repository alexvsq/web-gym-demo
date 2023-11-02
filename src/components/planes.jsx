import { React, useState } from 'react';
import './css/planes.css'
import SubtituloCentro from '../assets/subtituloCentro.jsx';

function Planes() {

    const [menu1, setMenu1] = useState(false);

    function menuToggle1() {
        setMenu1(!menu1)
    }

    const [menu2, setMenu2] = useState(false);

    function menuToggle2() {
        setMenu2(!menu2)
    }

    return (
        <div className='' id='planes'>
            <SubtituloCentro
                subT1="Elige tu"
                subT2="Plan"
                textSub="Explora nuestros planes de suscripción diseñados para adaptarse a tus necesidades. Desde opciones flexibles hasta compromisos a largo plazo, encuentra el plan que te llevará más cerca de tus metas de salud y fitness."
            />

            <div className='container tabla'>

                {/* row 1 */}
                <div className='rowTabla tituloPlan' >
                    <div className='rowTabla1'></div>
                    <div>Plan Básico</div>
                    <div>Plan Avanzado</div>
                    <div className='premiun'>Plan Premium</div>
                </div>

                {/* row 2 */}
                <div className='rowTabla'  >
                    <div className='rowTabla1'>Acceso ilimitado a todas las áreas de entrenamiento.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

                <div className='lineaDiv'></div>

                {/* row 3 */}
                <div className='rowTabla' >
                    <div className='rowTabla1'>Participación en clases grupales.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

                <div className='lineaDiv'></div>

                {/* row 4   */}
                <div className='rowTabla' >
                    <div className='rowTabla1'>Entrenamiento personalizado semanal.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

                <div className='lineaDiv'></div>

                {/* row 5   */}
                <div className='rowTabla' >
                    <div className='rowTabla1'>Asesoramiento nutricional personalizado y seguimiento constante.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

                <div className='lineaDiv'></div>

                {/* row 6   */}
                <div className='rowTabla' >
                    <div className='rowTabla1'>Evaluación de progreso semanal.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

                <div className='lineaDiv'></div>

                {/* row 7   */}
                <div className='rowTabla' >
                    <div className='rowTabla1'>Descuento del 15% en productos de la tienda de suplementos.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

                <div className='lineaDiv'></div>

                {/* row 8   */}
                <div className='rowTabla' >
                    <div className='rowTabla1'>Sesiones de masajes mensuales.</div>
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                    <img src="/images/check.svg" alt="check" />
                </div>

            </div>

            {/* 
            --------------------------------------
                        MOBILE VIEW 
            ------------------------------------*/}

            <div className='container view-mobile'>
                <div className='cuadro-tablaP'>
                    <p className=' tituloPlan premiun'>Plan Premium</p>
                    <div>
                        <div className='rowTabla'>
                            <div>Acceso ilimitado a todas las áreas de entrenamiento.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Participación en clases grupales.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Entrenamiento personalizado semanal.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Asesoramiento nutricional personalizado y seguimiento constante.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Evaluación de progreso semanal.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Descuento del 15% en productos de la tienda de suplementos.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Sesiones de masajes mensuales.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                    </div>
                </div>

                {/* tabla 2 */}

                <div className={`cuadro-tabla2  ${menu1 ? 'enableCuadro' : ''}`} >
                    <div onClick={menuToggle1} className='rowTabla2'>
                        <div className='tituloPlan'>Plan Avanzado</div>
                        <img src={`/images/${menu1? 'arrowU.svg' : 'arrowD.svg'}`} alt="check" />
                    </div>
                    <div>
                        <div className='rowTabla'>
                            <div>Acceso ilimitado a todas las áreas de entrenamiento.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Participación en clases grupales.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Entrenamiento personalizado semanal.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Asesoramiento nutricional personalizado y seguimiento constante.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Evaluación de progreso semanal.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                    </div>
                </div>


                  {/* tabla 3 */}

                  <div className={`cuadro-tabla2  ${menu2 ? 'enableCuadro' : ''}`} >
                    <div onClick={menuToggle2} className='rowTabla2'>
                        <div className='tituloPlan'>Plan Básico</div>
                        <img src= {`/images/${menu2? 'arrowU.svg' : 'arrowD.svg'}`} alt="check" />
                    </div>
                    <div>
                        <div className='rowTabla'>
                            <div>Acceso ilimitado a todas las áreas de entrenamiento.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Participación en clases grupales.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                        <div className='lineaDiv'></div>

                        <div className='rowTabla'>
                            <div>Entrenamiento personalizado semanal.</div>
                            <img src="/images/check.svg" alt="check" />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Planes