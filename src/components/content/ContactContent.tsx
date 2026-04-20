import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactContent() {
  return (
    <div className="p-6 h-full font-sans text-gray-800 overflow-y-auto bg-w98-light/30 flex items-center justify-center">
      <div className="max-w-md w-full pb-10">
        <h1 className="text-3xl font-bold tracking-tight text-w98-titlebar mb-4 border-b-2 border-w98-titlebar pb-2 text-center">Datos de Contacto</h1>
        
        <p className="text-center text-gray-600 mb-8">
          Puedes comunicarte conmigo a través de cualquiera de los siguientes medios:
        </p>

        <div className="bg-white win-border-pressed p-6 space-y-6 text-base font-medium">
          <a 
            href="mailto:ivanmunozmoreno46@gmail.com" 
            className="flex items-center gap-4 text-gray-700 hover:text-blue-700 transition-colors p-2 hover:bg-gray-50 -mx-2 rounded"
          >
            <Mail size={24} className="text-w98-titlebar flex-shrink-0" />
            <span className="hover:underline break-all">ivanmunozmoreno46@gmail.com</span>
          </a>
          
          <div className="flex items-center gap-4 text-gray-700 p-2 -mx-2">
            <Phone size={24} className="text-w98-titlebar flex-shrink-0" />
            <span>+34 655 22 72 55</span>
          </div>
          
          <div className="flex items-center gap-4 text-gray-700 p-2 -mx-2">
            <MapPin size={24} className="text-w98-titlebar flex-shrink-0" />
            <span>Toledo, España</span>
          </div>
        </div>

        <div className="mt-8 bg-w98-bg win-border p-4 text-center text-sm text-gray-700 font-bold shadow-sm">
          <p>Abierto a nuevas oportunidades y proyectos de desarrollo web.</p>
        </div>
      </div>
    </div>
  );
}
