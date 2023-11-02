
import React from "react";
import './css/testimonios.css'
import Subtitulo from '../assets/subtitulo.jsx';

function Testimonios() {
    return (
        <div className="backg-logo">
            <Subtitulo
                subT1="Testimonios y "
                subT2="Opiniones de Clientes"
                textSub=""
            />
            <div className="container testimonios">
                <article className="testiCard">
                    <p>"Entrar al Gimnasio Matrix fue un cambio de juego para mí. Los entrenadores son increíblemente motivadores y siempre te desafían a superar tus límites. Gracias a ellos, he alcanzado metas que nunca pensé posibles."</p>
                    <footer className="footerCardTesti">
                        <div className="user">
                            <img src="/images/userAn.png" alt="" />
                            <p>Ana G</p>
                        </div>
                        <img src="/images/3star.svg" alt="" />
                    </footer>
                </article>

                <article className="testiCard">
                    <p>"La atención personalizada que recibí en el Gimnasio Matrix hizo toda la diferencia en mi progreso. Los entrenadores me han ayudado a superar obstáculos y a mantenerme enfocado en mis objetivos."</p>
                    <footer className="footerCardTesti">
                        <div className="user">
                            <img src="/images/userJa.png" alt="" />
                            <p>Javier M.</p>
                        </div>
                        <img src="/images/3star.svg" alt="" />
                    </footer>
                </article>

                <article className="testiCard">
                    <p>"Entrar al Gimnasio Matrix fue un cambio de juego para mí. Los entrenadores son increíblemente motivadores y siempre te desafían a superar tus límites. Gracias a ellos, he alcanzado metas que nunca pensé posibles."</p>
                    <footer className="footerCardTesti">
                        <div className="user">
                            <img src="/images/userAn.png" alt="" />
                            <p>Sofia S</p>
                        </div>
                        <img src="/images/3star.svg" alt="" />
                    </footer>
                </article>
                
            </div>


            <div className="container testimonios">
                <article className="testiCard">
                    <p>"No solo he mejorado físicamente en el Gimnasio Matrix, sino que también he encontrado una comunidad de apoyo increíble. Cada clase se siente como un logro y estoy agradecida por ser parte de este increíble ambiente." </p>
                    <footer className="footerCardTesti">
                        <div className="user">
                            <img src="/images/userLa.png" alt="" />
                            <p>Laura R.</p>
                        </div>
                        <img src="/images/3star.svg" alt="" />
                    </footer>
                </article>

                <article className="testiCard">
                    <p>"El enfoque integral de el Gimnasio Matrix hacia la salud y el fitness ha transformado mi estilo de vida. He aprendido la importancia de la nutrición y el ejercicio en conjunto, y estoy viendo resultados reales."</p>
                    <footer className="footerCardTesti">
                        <div className="user">
                            <img src="/images/userCa.png" alt="" />
                            <p>Carlos P.</p>
                        </div>
                        <img src="/images/3star.svg" alt="" />
                    </footer>
                </article>

                <article className="testiCard">
                    <p>"No solo he mejorado físicamente en el Gimnasio Matrix, sino que también he encontrado una comunidad de apoyo increíble. Cada clase se siente como un logro y estoy agradecida por ser parte de este increíble ambiente." </p>
                    <footer className="footerCardTesti">
                        <div className="user">
                            <img src="/images/userJa.png" alt="" />
                            <p>Jorge S</p>
                        </div>
                        <img src="/images/3star.svg" alt="" />
                    </footer>
                </article>

            </div>
        </div>
    )
}

export default Testimonios;