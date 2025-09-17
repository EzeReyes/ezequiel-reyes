import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const OBTENER_PROYECTOS = gql`
query obtenerProyectos {
  obtenerProyectos {
    id
    nombre
    pagina
    imagen
    descripcion
    tecnologias {
      id
      logo
      nombre
    }
  }
}
`;

const Proyects = () => {
    const { data, loading, error } = useQuery(OBTENER_PROYECTOS);

    if (loading) return 'Cargando ....';
    if (error) return `Error: ${error.message}`;

    console.log(data);
    const proyectos = data?.obtenerProyectos || [];

    return (
        <>
            {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="w-full text-xs sm:text-lg">
                    <a href={proyecto.pagina} target="_blank" rel="noopener noreferrer" title={proyecto.nombre}>
                        <div className="shadow-sm hover:shadow-amber-200 hover:transition duration-300 brightness-50 hover:brightness-100 sm:rounded-2xl rounded bg-gray-00 flex sm:flex-row flex-col gap-10 items-center justify-center hover:bg-zinc-950 sm:p-4">
                                {proyecto.imagen && (
                                <img
                                    className="rounded-2xl w-[150px] h-[150px] object-contain transition-transform hover:scale-105"                                    
                                    title={proyecto.nombre}
                                    src={proyecto.imagen}
                                    alt={proyecto.nombre}
                                />
                                )}                            
                            <div className="flex flex-col text-center pr-4 sm:pr-0 text-sm">
                                <h3 className="text-center mb-3 uppercase">{proyecto.nombre}</h3>
                                <p className="mb-1 text-center">{proyecto.descripcion}</p>
                                <p>Tecnologías utilizadas:</p>

                                {/* Renderizar tecnologías si existen */}
                                {proyecto.tecnologias?.length > 0 && (
                                    <div className="flex items-center justify-center gap-2 sm:justify-around mt-2">
                                        {[...proyecto.tecnologias] // Clonamos antes de ordenar
                                            .sort((a, b) => a.nombre.localeCompare(b.nombre))
                                            .map((tecnologia) => (
                                                <div key={tecnologia.id} className="flex flex-col text-center items-center">
                                                    <img src={tecnologia.logo} alt={tecnologia.nombre} title={tecnologia.nombre} className="w-3 h-3 sm:w-8 sm:h-8" />
                                                    <p>{tecnologia.nombre}</p>
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </a>
                    <a href={proyecto.pagina} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center pt-4" title={proyecto.nombre}>Ver Repositorio</a>
                </div>
            ))}
        </>
    );
};

export default Proyects;
