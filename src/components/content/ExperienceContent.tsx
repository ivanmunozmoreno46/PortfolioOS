import React from 'react';

export default function ExperienceContent() {
  const experiences = [
    {
      role: 'Desarrollador Full Stack',
      company: 'WalkyriaApps',
      date: 'Marz 2025 - Jun 2025',
      description: 'Desarrollo e implementación de interfaces de usuario, optimización SEO y optimización de rendimiento de aplicaciones web.'
    },
    {
      role: 'Técnico Informático',
      company: 'Softtek',
      date: 'Marz 2023 - Jun 2023',
      description: 'Soporte técnico a usuarios y resolución de incidencias de hardware/software, mantenimiento de equipos informáticos y sistemas, gestión de incidencias, documentación técnica y apoyo en tareas de administración de sistemas.'
    }
  ];

  const education = [
    {
      degree: 'GS en Desarrollo de Aplicaciones Web (DAW)',
      school: 'IES Julio Verne',
      type: 'Informática'
    },
    {
      degree: 'GS en Admin. de Sistemas Informáticos en Red (ASIR)',
      school: 'IES Aldebarán',
      type: 'Informática'
    },
    {
      degree: 'Bachillerato',
      school: 'IES Alonso de Covarrubias',
      type: 'Humanidades'
    }
  ];

  return (
    <div className="p-6 h-full font-sans text-gray-800 overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-10">
        
        {/* Experience Section */}
        <section>
          <h1 className="text-2xl font-bold tracking-tight text-w98-titlebar mb-6 border-b-2 border-w98-titlebar pb-2">Experiencia Laboral</h1>
          <div className="space-y-6 relative">
            <div className="absolute left-3.5 top-2 bottom-0 w-0.5 bg-w98-titlebar/30"></div>
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-w98-titlebar rounded-full border-2 border-w98-bg"></div>
                <h2 className="text-lg font-bold text-w98-titlebar">{exp.role}</h2>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{exp.company}</span>
                  <span className="font-mono text-xs px-2 py-1 bg-w98-light border border-w98-dark text-gray-800 shadow-[1px_1px_0px_#050505]">{exp.date}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h1 className="text-2xl font-bold tracking-tight text-w98-titlebar mb-6 border-b-2 border-w98-titlebar pb-2">Educación</h1>
          <div className="grid gap-4">
            {education.map((edu, i) => (
              <div key={i} className="bg-w98-light border-2 border-t-white border-l-white border-b-w98-dark border-r-w98-dark p-4 shadow-[1px_1px_0px_#050505]">
                <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium text-w98-titlebar">{edu.school}</span>
                  <span className="text-xs bg-white px-2 py-1 border border-gray-300 font-mono">{edu.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
