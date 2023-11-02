import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/header.jsx';
import Bienvenidos from './components/bienvenidos.jsx';
import Servicios from './components/servicios.jsx';
import Promociones from './components/promociones.jsx';
import Planes from './components/planes.jsx';
import Testimonios from './components/testimonios.jsx';
import Preguntas from './components/preguntas.jsx';
import Ubicacion from './components/ubicacion.jsx';
import Nosotros from './components/nosotros.jsx';
import Blog from './components/blog.jsx';
import Contacto from './components/contacto.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      alert('Hola, Esta página web ha sido creada con fines demostrativos y educativos para un proyecto de investigación. No representa un sitio real y no está funcional. Agradecemos tu comprensión y te invitamos a explorar el contenido a modo de ejemplo. ¡Disfruta de tu visita!');
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <>
      <div className='botonUpFloat'>
        <a href="#header">
          <img src="/images/arrowU2Black.svg" alt="" />
        </a>
      </div>
      <Header />
      <Bienvenidos />
      <Servicios />
      <Promociones />
      <Planes />
      <Testimonios />
      <Preguntas />
      <Ubicacion />
      <Nosotros />
      <Blog />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
