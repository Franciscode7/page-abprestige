import React from 'react';
// import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Opcional: si usas heroicons

const detailedServices = [
  {
    title: "Construction Cleaning",
    img: "./images/Cimg1.webp",
    description: "Limpieza profunda tras finalizar obras o remodelaciones, garantizando que el espacio esté listo para habitar.",
    points: ["Remoción de polvo fino en techos y paredes", "Limpieza de marcos y cristales", "Eliminación de restos de pintura y adhesivos", "Aspirado industrial de escombros"]
  },
  {
    title: "Janitorial Services",
    img: "./images/Cimg2.webp",
    description: "Servicio recurrente basado en confianza para mantener oficinas y edificios comerciales impecables.",
    points: ["Limpieza de estaciones de trabajo", "Gestión de residuos y reciclaje", "Desinfección de baños y áreas comunes", "Reposición de insumos sanitarios"]
  },
  {
    title: "Pressure Washing",
    img: "./images/Cimg3.webp",
    description: "Uso de agua a alta presión para restaurar superficies exteriores y eliminar suciedad difícil.",
    points: ["Lavado de fachadas y paredes", "Limpieza de parkings y aceras", "Remoción de moho y manchas de aceite", "Tratamiento de áreas de piscina"]
  },
  {
    title: "Tile and Grout",
    img: "./images/Cimg4.webp",
    description: "Restauración de pisos cerámicos y juntas para devolverles su brillo y color original.",
    points: ["Tallado profundo de juntas (grout)", "Sellado protector antimanchas", "Tratamiento de baldosas cerámicas", "Eliminación de sarro y grasa"]
  },
  {
    title: "Stripping and Waxing",
    img: "./images/Cimg5.webp",
    description: "Cuidado especializado para pisos de vinilo, madera o cemento que requieren brillo espejo.",
    points: ["Remoción de capas de cera vieja", "Aplicación de selladores premium", "Pulido de alta velocidad", "Capas de cera antideslizante"]
  },
  {
    title: "Carpet Cleaning",
    img: "./images/Cimg6.webp",
    description: "Tratamiento profundo para alfombras que elimina manchas, olores y alérgenos.",
    points: ["Lavado con vapor a alta temperatura", "Extracción de suciedad profunda", "Tratamiento especial para manchas", "Neutralización de olores de mascotas"]
  }
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Título Principal */}
        <div className="text-center mb-16">
          <p className="text-pink-600 font-bold tracking-widest uppercase text-sm mb-2">Excelencia en cada detalle</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 italic">
            IN HOUSE <span className="text-pink-600 font-normal not-italic">Cleaning Services</span>
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-500 font-medium italic">All services are 100% in house.</p>

<h1 className='text-4xl'>servicios comerciales</h1>
          <hr className="border-pink-600 my-8" />
        </div>

        {/* Grid de Servicios Detallados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {detailedServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Imagen Circular con borde Prestige */}
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-100 shadow-xl">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Elemento decorativo circular */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pink-600 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Texto Detallado */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed px-4">
                  {service.description}
                </p>
                
                {/* Lista de aspectos detallados */}
                <ul className="text-left inline-block space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2 shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la acción simple */}
        <div className="mt-20 p-10 bg-gray-50 rounded-3xl text-center border-2 border-dashed border-pink-200">
          <h4 className="text-xl font-bold text-gray-800 mb-4">¿Necesitas un plan de limpieza a medida?</h4>
          <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none px-8 rounded-full">
            <a href="/mensajes">Solicitar Cotización Gratis</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;