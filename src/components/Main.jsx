import Proyects from './Proyects';




const tech = [
  { id: 1, src: "https://img.icons8.com/color/48/javascript--v1.png", alt: "javascript", nombre: "JavaScript", info: "Es un lenguaje de programación que permite crear interactividad en páginas web, como animaciones, formularios dinámicos y manipulación del DOM. Se usa en el desarrollo frontend y backend con Node.js." },
  { id: 2, src: "https://img.icons8.com/color/48/css3.png", alt: "css", nombre: "CSS", info: "Es un lenguaje de estilos que define la apariencia de los elementos HTML, permitiendo cambios en colores, fuentes, tamaños y posicionamiento. Facilita diseños responsivos y atractivos para diversas pantallas." },
  { id: 3, src: "https://img.icons8.com/color/48/html-5--v1.png", alt: "html", nombre: "HTML", info: "Es el lenguaje de marcado que estructura el contenido web mediante etiquetas, organizando texto, imágenes y enlaces. Es la base de cualquier sitio web y trabaja junto a CSS y JavaScript."},
  { id: 4, src: "https://img.icons8.com/color/48/tailwind_css.png", alt: "tailwind", nombre: "tailwind", info: "Es el lenguaje de marcado que estructura el contenido web mediante etiquetas, organizando texto, imágenes y enlaces. Es la base de cualquier sitio web y trabaja junto a CSS y JavaScript."},
  { id: 5, src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-graphql-an-open-source-data-query-and-manipulation-language-for-api-logo-color-tal-revivo.png", alt: "graphql", nombre: "graphql", info: "Es el lenguaje de marcado que estructura el contenido web mediante etiquetas, organizando texto, imágenes y enlaces. Es la base de cualquier sitio web y trabaja junto a CSS y JavaScript."},
  { id: 6, src: "https://img.icons8.com/color/48/nextjs.png", alt: "next", nombre: "NEXT", info: "Es el lenguaje de marcado que estructura el contenido web mediante etiquetas, organizando texto, imágenes y enlaces. Es la base de cualquier sitio web y trabaja junto a CSS y JavaScript."},
  { id: 7, src: "https://img.icons8.com/color/48/mongo-db.png", alt: "MONGO", nombre: "MONGO", info: "Es el lenguaje de marcado que estructura el contenido web mediante etiquetas, organizando texto, imágenes y enlaces. Es la base de cualquier sitio web y trabaja junto a CSS y JavaScript."},
];

// const colorPorTech = {
//   JavaScript: "border-yellow-500 bg-yellow-200 text-black",
//   HTML: "border-red-500 bg-red-200 text-black",
//   CSS: "border-indigo-500 bg-indigo-200 text-black",
// }

const Main = () => {


  return (
    <main className='text-white bg-gradient-to-t from-gray-700 to-gray-500 font-extrabold'>
        <div style={{boxShadow:'0 5px 14px #ffffff42'}} className='grid min-h-96 sm:w-full sm:grid-cols-2 grid-cols-1 gap-2 border-x-amber-600 items-center ml-0 border-solid border-amber-30
        0'>
          <div className='flex self-center flex-col-reverse justify-center sm:justify-normal items-center sm:items-end pr-2 pt-10 bg-amber-200 border-x-amber-500 h-full text-6xl text-black sm:flex-col sm:my-0 my-10'>
            <h2 className='mb-2'>Soy</h2>
            <img className='w-auto h-24 rounded-4xl' src="./img/perfil.jpeg" alt='foto de Perfil Ezequiel'/>
          </div>
          <div className='bg-neutral-800 sm:flex pl-2 pt-10 items-start text-6xl text-white h-full flex-col sm:my-0 my-10'>
            <div className='flex gap-2 flex-col'>
              <h2 className='text-center'>Ezequiel Reyes</h2>
              <div className='flex flex-row gap-2 items-center justify-center'>
                <a href="https://www.linkedin.com/services/page/7146943198a877803b/" className='hover:shadow-md' target="_blank" title="linkedin iconos"><img width="30" height="30" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/></a>
                <a href="https://www.instagram.com/ezequi3l_reyes" className='hover:shadow-md' target="_blank" title="instagram iconos"><img width="30" height="30" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                <a href="https://wa.me/2236689525" className='hover:shadow-md' target="_blank" title="whatsapp iconos"><img width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/></a>
                <a href="https://github.com/EzeReyes" className='hover:shadow-md' target="_blank" title="github iconos"><img width="30" height="30" src="https://img.icons8.com/ios/50/github--v1.png" alt="github--v1"/></a>
              </div>
            </div>
            <div className='text-2xl rounded w-max bg-amber-300 text-black mt-7 p-4 hover:bg-black hover:text-white cursor-pointer'>
            <p className='text-center'>Desarrollador web</p>
            </div>
          </div>
      </div>


      <div className='flex flex-col gap-20 items-center justify-center my-10 text-3xl text-white'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <hr className="w-20" style={{color:'#fee685'}}></hr>
          <p className='text-lg'>Stack de programación</p>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 items-center gap-2.5'>
        {tech.sort((a, b) => b.id - (a.id))
        .map((tecnologia) => (
            <div key={tecnologia.id} className='flex flex-col items-center rounded bg-neutral-900 p-10 h-40 w-40 hover:bg-amber-200 hover:brightness-90'>
              <img className="h-10 w-10" title={tecnologia.alt} src={tecnologia.src} alt={tecnologia.alt} />
              <p>{tecnologia.nombre}</p>
            </div>
        ))}
        </div>
      </div>
      
    
      <div className='sm:grid sm:grid-cols-4 sm:grid-rows-4 sm:items-center sm:justify-center sm:rounded-xl sm:gap-10 sm:p-6 sm:h-40 sm:w-40'>
      {[...Array(16)].map((_, i) => {
        // console.log(`creando ${i}`);
        return <div key={i} className='bg-amber-100 h-1 w-1' style={{borderRadius:'50%'}}></div>;
      })}
      </div>

      <div className='flex flex-row  items-center justify-center gap-2 my-10'>
          <hr className="w-20" style={{color:'#fee685'}}></hr>
          <h3 className='text-center text-lg uppercase '>Mis proyectos</h3>
      </div>
      <div className='sm:flex sm:w-auto flex flex-col justify-center gap-20 items-center sm:p-10 w-full'>
        <Proyects />
      </div>
    </main>

  );
};

export default Main;
