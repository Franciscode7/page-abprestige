import imagenFondo from '/images/Cimg1.webp'; 

const Hero = () => {
  return (
    /* 1. Contenedor externo: Este da el margen real a los lados (mx-auto y px) */
    <div className="w-full py-8 bg-white px-2 md:px-10 lg:px-0">
      
      {/* 2. El Hero con la imagen: Aquí limitamos el ancho y redondeamos */}
      <section 
        className="hero min-h-[70vh] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-full" 
        style={{ 
          backgroundImage: `url(${imagenFondo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay bg-gray-900 bg-opacity-60"></div>

        {/* Contenido */}
        <div className="hero-content text-center text-white p-6 md:p-12">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Limpieza Profesional <br className="hidden md:block" /> 
              que Refleja <span className="text-pink-400">Prestigio</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-90">
              Servicios de limpieza residencial, comercial y post-construcción 
              con estándares profesionales y atención al detalle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/mensajes" 
                className="btn btn-primary btn-lg px-12 bg-pink-600 border-none text-white transition-colors duration-300 hover:bg-pink-800">
                Obtener Cotización
              </a>
              <a href="/servicios" className="btn btn-outline btn-lg text-white border-white/40">
                Ver Servicios
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;