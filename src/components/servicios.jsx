import React, { useState, useEffect } from 'react';
import './css/servicios.css'
import Subtitutlo from '../assets/subtitulo.jsx';
import BotonY1 from "../assets/botonY1.jsx";

const Servicios = () => {
    return (
        <div className='backg-logo' id='servicios'>
            <Subtitutlo
                subT1="Nuestros"
                subT2= "Servicios"
                textSub="En Matrix, creemos en el poder de un enfoque personalizado hacia la salud y el fitness. Desde clases en grupo dinámicas hasta entrenamiento personalizado y asesoramiento nutricional, estamos comprometidos a guiarte en tu camino hacia una vida más saludable y activa."
            />

            <div className='container cards'>

                <div className='card'>
                    <div className='imageCard'><img src="/images/servicios1.jpg" alt="servicio1" /></div>
                    <p className='tituCard'>Asesoramiento Nutricional</p>
                    <p className='textCard'>Contamos con expertos en nutrición que te brindarán orientación personalizada sobre hábitos alimenticios saludables y te ayudarán a desarrollar un plan nutricional adaptado a tus preferencias y necesidades individuales.</p>
                    <BotonY1 texto={`Más Información`} />
                </div>

                <div className='card2'>
                    <div className='imageCard'><img src="/images/servicios2.webp" alt="servicio2" /></div>
                    <p className='tituCard'>Clases</p>
                    <p className='textCard'>Descubre una amplia gama de clases diseñadas para satisfacer tus necesidades y preferencias. Desde la serenidad del yoga hasta la adrenalina del spinning y la funcionalidad del entrenamiento de fuerza, nuestras clases ofrecen algo para todos.</p>
                    <BotonY1 texto={`Más Información`} />
                </div>

                <div className='card'>
                    <div className='imageCard'><img src="/images/servicios3.webp" alt="servici3" /></div>
                    <p className='tituCard'>Entrenamiento Personalizado</p>
                    <p className='textCard'>Nuestros programas de entrenamiento personalizado están diseñados para maximizar tus resultados. Trabajando uno a uno con nuestros entrenadores expertos, recibirás un plan de ejercicio específicamente adaptado a tus objetivos y preferencias.</p>
                    <BotonY1 texto={`Más Información`} />
                </div>

                <div className='card2'>
                    <div className='imageCard'><img src="/images/servicios4.webp" alt="servicio4" /></div>
                    <p className='tituCard'>Tienda de Suplementos</p>
                    <p className='textCard'>Explora nuestra selección de suplementos premium diseñados para optimizar tu rendimiento y mejorar tus resultados, nos asociamos con marcas de confianza para ofrecerte productos de alta calidad que complementarán tu régimen de entrenamiento.</p>
                    <BotonY1 texto={`Más Información`} />
                </div>


            </div>

            </div>
    )

};

export default Servicios;
