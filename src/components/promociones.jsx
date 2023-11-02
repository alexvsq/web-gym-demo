
import Subtitulo from '../assets/subtitulo.jsx';
import './css/promociones.css'
import BotonY1 from "../assets/botonY1.jsx";

function Promociones() {

    function icono() {
        return (
            <img src="/images/arrowInfo.svg" alt="flecha" />
        )
    }

    return (
        <div id='promociones'>
            <Subtitulo
                subT1="Programas y"
                subT2="Promociones"
                textSub="Descubre nuestros programas exclusivos y ofertas temporales diseñadas para acelerar tu progreso y mantenerte motivado en tu viaje hacia un estilo de vida más saludable."
            />

            <div className='container cuadroPromo'>
                <div className='imagePromo'>
                    <img src="/images/promo-banner.webp" alt="Promo" />
                </div>
                <div className='promoBotones'>
                    <p className='promoBoton'>Invita a un amigo y ambos recibirán un descuento en su membresía.</p>
                    <p className='promoBoton'>Descuentos especiales para grupos o familias que se inscriban juntos.</p>
                    <p className='promoBoton'>Ahorra al inscribirte en una membresía anual.</p>
                    <div className="infoBtn">

                        <BotonY1 texto={`Más Información`} icono={icono()} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Promociones