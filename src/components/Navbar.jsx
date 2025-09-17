import React from 'react';


const Navbar = () => {
  
  return (
    <div 
  style={{
    backgroundImage: "url('./img/programing.jpg')",
    backgroundSize: "cover",  // Ajusta la imagen para cubrir el div sin distorsión
    backgroundPosition: "center", // Centra la imagen
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
    width: "80%", // Ajusta el ancho del div
    maxWidth: "900px", // Evita que se expanda demasiado
    height: "150px", // Ajusta la altura
    borderRadius: "10px", // Agrega bordes redondeados si deseas
  }} 
  className="relative flex justify-center items-center mx-auto mb-6 shadow-lg"
>
  <h1 className="text-white text-lg font-bold">Bienvenido a Mi Landing</h1>
</div>

  );
};

export default Navbar;
