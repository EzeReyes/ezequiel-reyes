import { useState } from 'react';
import Carrusel from './Carrusel';

const redes = [
    { id: 1, imagen: "https://img.icons8.com/color/48/linkedin.png", nombre: "linkedin", url: "https://www.linkedin.com/services/page/7146943198a877803b/"},
    { id: 2, imagen: "https://img.icons8.com/ios-filled/50/228BE6/github.png", nombre: "github", url: "https://github.com/EzeReyes"}
]


const SobreMi = () => {
  const [estado, setEstado ] = useState(false)


  const bajarSeccion = () => {
    estado === false ? setEstado(true) : setEstado(false)
    console.log(estado)
  }



  return (
  <>
  <div className='text-amber-300 bg-gradient-to-t from-gray-900 to-gray-700 font-extrabold flex flex-col items-center justify-around gap-20 py-20'>
    <div className='flex flex-row items-center justify-center gap-10'>
      <hr className="w-20" style={{color:'#fee685'}}></hr>
      <h3 className='text-3xl text-white text-center'>SOBRE MI</h3>
    </div>
    <div className='flex gap-3 items-center justify-center'>
      <button onClick={() => bajarSeccion()} >
        <img width="50" height="24" className={`bg-gray-300 rounded-4xl ${estado === true ? 'hidden' : 'block' }`} src="https://img.icons8.com/ios/50/circled-chevron-down.png" alt="circled-chevron-down"/> </button>
        <button onClick={() => bajarSeccion()} >
        <img width="50" height="24" className={`bg-gray-300 rounded-4xl ${estado === true ? 'block' : 'hidden' }`}  src="https://img.icons8.com/ios/50/circled-chevron-up.png"/></button>
      <p>Estudios y certificaciones</p>
    </div>

    <div className={`${estado === true ? 'flex flex-col items-center justify-center gap-2' : 'hidden' }`}>
      <Carrusel />
    </div>

        
      <div className='sm:flex flex-col sm:mx-120 gap-10 sm:p-0 ml-0 p-10'>
        <div className='sm:flex flex-col items-start justify-center text-white'>
            <p>Mis redes de trabajo</p>
            <div className='flex flex-row gap-4'>
            {redes.map((red) => (
                <div key={red.id} className='flex flex-col gap-1'>
                    <p>{red.nombre}</p>
                    <a href={red.url} target='_blank'> <img src={red.imagen} title={red.nombre} alt={red.nombre} /> </a>
                </div>
                )
            )}
            </div>
        </div>
        <div className='sm:flex flex-col text-white rounded p-4'>
              <p>Sobre mí</p>
                <p>Soy desarrollador web autodidacta, especializado en crear soluciones digitales eficientes y personalizadas. Mi enfoque combina técnica, creatividad y estrategia para responder con precisión a las necesidades de cada cliente, optimizando procesos y potenciando su presencia online.</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default SobreMi;
