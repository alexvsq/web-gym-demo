import React from "react"
import './css/nosotros.css'
import Subtitulo from '../assets/subtitulo.jsx';

function Nosotros() {
    return (
        <div className="backg-logo2" id="nosotros">
            <Subtitulo
                subT1="Acerca de"
                subT2="Nosotros"
                textSub=""
            />

            <div className="container nosotros">

                <article>
                    <p className="NosotrosTextoPrincipal">Bienvenido a Gimnasio Matrix, donde transformamos vidas a través del fitness y el bienestar. Nuestra misión es clara: promover un estilo de vida activo y saludable para que nuestros miembros alcancen sus objetivos de fitness de manera efectiva y sostenible. Con un equipo de entrenadores altamente capacitados y programas de entrenamiento innovadores, creamos un ambiente acogedor y motivador para tu viaje hacia la mejor versión de ti mismo.</p>
                    <div className="nosotrosImagenes">
                        <img src="/images/nosotros1.png" alt="nosotros1" />
                        <img src="/images/nosotros2.png" alt="nosotros2" />
                    </div>
                </article>

                <aside>
                    <div>
                        <p className="NosotrosSubtitulo"> <span className="circuloNosotrosTitulo"></span> Misión</p>
                        <p className="NosotrosTexto">En Gimnasio Matrix, nos dedicamos a brindar a nuestros miembros mucho más que un lugar para hacer ejercicio. Nuestra misión es ser el catalizador de tu transformación hacia un estilo de vida más activo y saludable. Ofrecemos programas de entrenamiento diseñados para desafiarte y clases de alta calidad que te inspirarán a superar tus límites. Nuestro equipo de entrenadores está comprometido con tu éxito y bienestar.</p>
                    </div>
                    <div>
                        <p className="NosotrosSubtitulo"> <span className="circuloNosotrosTitulo"></span> Visión</p>
                        <p className="NosotrosTexto">Nos visualizamos como líderes en la industria del fitness, reconocidos por la excelencia en nuestros programas de entrenamiento. Buscamos ir más allá, expandiendo nuestra presencia para llegar a un público aún más amplio y promover una cultura de bienestar y fitness a nivel nacional. Estamos comprometidos con la innovación y la tecnología, brindando experiencias transformadoras que te inspiren a alcanzar tu máximo potencial en salud y vitalidad.</p>
                    </div>
                </aside>

            </div>
        </div>
    )
}

export default Nosotros