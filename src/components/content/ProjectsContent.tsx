import React, { useState, useContext } from 'react';
import { Folder, FileText, ChevronLeft, Server, Code, HardDrive, Globe, Play, FileJson } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OsContext } from '../../App';

const projects = [
  {
    id: 'microspeed',
    title: 'MicroSpeed.exe',
    category: 'Web App',
    icon: <Globe className="w-16 h-16 text-blue-600 fill-blue-100 drop-shadow-md group-hover:-translate-y-1 transition-transform" />,
    description: 'Aplicación web interactiva que te permite testear y analizar la velocidad y rendimiento. Experiencia integrada navegable directamente desde el sistema IvánOS.',
    tech: ['React', 'Web Performance'],
    url: 'https://microspeed.vercel.app/'
  },
  {
    id: 'zalando-support',
    title: 'Zalando Support',
    category: 'E-commerce / Support UI',
    icon: <Globe className="w-16 h-16 text-[#FF851B] fill-[#FFECC0] drop-shadow-md group-hover:-translate-y-1 transition-transform" />,
    description: 'Plataforma Frontend inspirada en el centro de atención al cliente y soporte de Zalando. Interfaz fluida y responsive diseñada para escalar soluciones de comercio electrónico con énfasis en la experiencia de usuario.',
    tech: ['React', 'Frontend UI', 'Tailwind CSS'],
    url: 'https://zalando-support.vercel.app/'
  },
  {
    id: 'validacion-json',
    title: 'Inspector JSON',
    category: 'Web Tool / Utility',
    icon: <FileJson className="w-16 h-16 text-emerald-600 fill-emerald-100 drop-shadow-md group-hover:-translate-y-1 transition-transform" />,
    description: 'Herramienta web optimizada para la validación, formateo y visualización de estructuras de datos en formato JSON. Interfaz rápida pensada para facilitar el flujo de trabajo de los desarrolladores.',
    tech: ['React', 'JSON Parsing', 'Tooling'],
    url: 'https://validacion-datos-json.vercel.app/'
  }
];

export default function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { openWindow } = useContext(OsContext);

  const project = projects.find(p => p.id === selectedProject);

  const handleExecuteProject = () => {
    if (project?.url) {
      openWindow({
        id: `run-${project.id}`,
        title: project.title,
        icon: <Globe size={32} color="white" />,
        content: <iframe src={project.url} className="w-full h-full border-0 absolute inset-0" title={project.title} />,
        noPadding: true
      });
    }
  };

  return (
    <div className="h-full flex flex-col font-sans bg-white relative">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 h-full overflow-y-auto"
          >
            <h1 className="text-3xl font-bold tracking-tight text-w98-titlebar mb-6 border-b-2 border-w98-light pb-2">Explorador de Experiencia y Proyectos</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div 
                  key={p.id}
                  onDoubleClick={() => setSelectedProject(p.id)}
                  className="flex flex-col items-center gap-2 p-4 cursor-pointer hover:bg-gray-100 border border-transparent hover:border-gray-300 rounded transition-colors group shadow-sm"
                >
                  {p.icon}
                  <span className="text-center font-medium bg-transparent group-hover:bg-[#000080] group-hover:text-white px-2 rounded line-clamp-2">
                    {p.title}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 italic text-center">Doble clic para abrir un archivo</p>
          </motion.div>
        ) : (
          <motion.div 
             key="detail"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -20 }}
             className="flex flex-col h-full bg-white"
          >
             {/* Explorer like toolbar */}
             <div className="bg-w98-light win-border p-1 flex items-center gap-2">
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="flex items-center gap-1 px-2 py-1 active:win-border-pressed win-border bg-w98-bg text-sm font-bold"
               >
                 <ChevronLeft size={16} /> Atrás
               </button>
               <span className="text-sm font-mono text-gray-600 bg-white win-border-pressed px-2 py-0.5 flex-1">
                 C:\Proyectos\{project?.id}
               </span>
             </div>
             
             {/* Content */}
             <div className="p-8 overflow-y-auto flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-gray-100 rounded-full border border-gray-300">
                     <FileText className="w-10 h-10 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{project?.title}</h2>
                    <span className="text-xs font-mono font-bold text-w98-titlebar bg-blue-50 px-2 py-1 rounded inline-block mt-1 border border-blue-200">
                      {project?.category}
                    </span>
                  </div>
                </div>

                <div className="prose prose-blue max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project?.description}
                  </p>

                  <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-100 pb-2">Tecnologías Involucradas</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project?.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white border-2 border-b-gray-400 border-r-gray-400 border-t-gray-100 border-l-gray-100 text-gray-800 text-xs font-bold font-mono drop-shadow-sm shadow-[1px_1px_0px_#050505]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project?.url && (
                    <div className="mt-8 pt-4 border-t-2 border-w98-light">
                       <button onClick={handleExecuteProject} className="win-border bg-w98-bg px-6 py-3 active:win-border-pressed font-bold flex items-center gap-2">
                          <Play size={20} className="fill-current" />
                          Ejecutar Proyecto en Nueva Ventana
                       </button>
                    </div>
                  )}
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
