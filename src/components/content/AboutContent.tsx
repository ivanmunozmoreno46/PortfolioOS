import React from 'react';

export default function AboutContent() {
  return (
    <div className="p-6 h-full font-sans text-gray-800 leading-relaxed overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-w98-titlebar mb-4 border-b-2 border-w98-titlebar pb-2">Sobre Mí</h1>
        
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="win-border p-1 bg-w98-light w-48 h-48 shadow-md">
              <img 
                src="/profile.jpg" 
                alt="Iván Muñoz Moreno" 
                className="w-full h-full object-cover win-border-pressed"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg">
              ¡Hola! Soy <strong className="text-w98-titlebar">Iván Muñoz Moreno</strong>.
            </p>
            
            <p>
              Soy un <strong>Desarrollador Full Stack Junior y Técnico Informático</strong> radicando en Toledo, España.
            </p>

            <p>
              Soy un profesional del sector tecnológico caracterizado por mi capacidad de aprendizaje, orden y una sólida base técnica en todo el ciclo de vida de las aplicaciones.
            </p>
          </div>
        </div>
        
        <p>
          Mi formación académica combina un <strong>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</strong> con un <strong>Grado Superior en Administración de Sistemas Informáticos en Red (ASIR)</strong>. Esta doble vertiente me permite entender y controlar a la perfección tanto la creación rigurosa de software, como la infraestructura y redes que lo sostienen.
        </p>

        <div className="bg-w98-light p-4 border-l-4 border-w98-titlebar mt-6 shadow-[1px_1px_0px_#050505]">
          <h3 className="font-bold text-w98-titlebar mb-4 text-lg">Habilidades Técnicas</h3>
          <div className="flex flex-wrap gap-2">
            {['HTML5', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'Symphony', 'SQL', 'MySQL', 'MongoDB', 'Java', 'Linux', 'Shell Script', 'Reparación de Hardware', 'Excel', 'Inglés C1'].map(skill => (
              <span key={skill} className="bg-white border-2 border-b-w98-dark border-r-w98-dark border-t-white border-l-white px-2 py-1 text-xs font-bold text-gray-700 shadow-[1px_1px_0px_#808080]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
