import React from "react"
import './css/blog.css'
import SubtituloCentro from '../assets/subtituloCentro.jsx';

function Blog() {
    return (
        <>
            <SubtituloCentro
                subT1="Nuestro"
                subT2="Blog"
                textSub="¡Bienvenido a nuestro blog en Gimnasio Matrix! Aquí encontrarás valiosos consejos y guías para potenciar tu fitness y bienestar. Nuestro equipo de expertos está comprometido en brindarte la información más actualizada y práctica para ayudarte a alcanzar tus objetivos. ¡Juntos, alcanzaremos nuevas alturas en tu salud y vitalidad!"
            />

            <div className="container blog">

                <div className="parent">
                    <div className="div1 cardBlogPrincipal">
                        <p>10 Ejercicios para Tonificar y Fortalecer tu Cuerpo</p>
                    </div>
                    <div className="div2 cardBlog">
                        <p>Cómo Mantener la Motivación en tu Rutina de Ejercicios</p>

                    </div>
                    <div className="div3 cardBlog">
                        <p>Alimentos que Debes Evitar Antes de tu Sesión de Ejercicio</p>

                    </div>
                    <div className="div4 cardBlog">
                        <p>Los Beneficios de una Dieta Equilibrada para tu Rendimiento Fitness</p>

                    </div>
                    <div className="div5 cardBlog">
                        <p>Consejos para una Recuperación Efectiva Post Entrenamiento</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog