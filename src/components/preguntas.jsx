import { useState } from 'react';
import './css/preguntas.css'
import Subtitulo from '../assets/subtitulo.jsx';

function Preguntas() {
    const [preguntas, setPreguntas] = useState([
        {
            id: 1,
            pregunta: '¿Cuáles son los horarios de apertura del gimnasio?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 2,
            pregunta: '¿Puedo agendar una visita para conocer las instalaciones?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 3,
            pregunta: '¿Ofrecen asesoramiento nutricional?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 4,
            pregunta: '¿Qué tipos de clases grupales ofrecen?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 5,
            pregunta: '¿Cuál es la política de cancelación y reembolso?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 6,
            pregunta: '¿Puedo pausar o cancelar mi membresía en algún momento?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 7,
            pregunta: '¿Cómo puedo reservar una clase o sesión de entrenamiento personal?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 8,
            pregunta: '¿Hay instalaciones de vestuarios y duchas disponibles? ',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 9,
            pregunta: '¿Ofrecen opciones de estacionamiento para los miembros?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        {
            id: 10,
            pregunta: '¿Cuál es la política de invitados y acceso de no miembros?',
            respuesta: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quibusdam eligendi? Expedita ipsam fugiat pariatur cupiditate ipsa obcaecati asperiores vitae qui et dolor. Debitis alias nostrum officia ea sint laborum.',
            mostrando: false
        },
        // ... Agrega las demás preguntas de manera similar
    ]);

    function toggleRespuesta(id) {
        setPreguntas(prevPreguntas => prevPreguntas.map(pregunta => {
            if (pregunta.id === id) {
                return {
                    ...pregunta,
                    mostrando: !pregunta.mostrando
                };
            }
            return pregunta;
        }));
    }

    return (
        <div className='backg-logo'>
            <Subtitulo
                subT1="Preguntas"
                subT2="Frecuentes (FAQ)"
                textSub=""
            />
            <div className='container preguntas'>
                {preguntas.map(pregunta => (
                    <div key={pregunta.id}>
                        <div onClick={() => toggleRespuesta(pregunta.id)} className='rowTabla'  >
                            <div className='rowTabla1'>{pregunta.pregunta}</div>
                            <img src="/images/arrowD2.svg" alt="check" />
                        </div>
                        {pregunta.mostrando && <p className='respuesta'>{pregunta.respuesta}</p>}
                        <div className='lineaDiv'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Preguntas;
