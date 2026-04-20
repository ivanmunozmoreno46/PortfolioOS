import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactContent() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1500);
  };

  if (status === 'sent') {
     return (
       <div className="flex flex-col items-center justify-center p-12 h-full text-center bg-w98-light/30">
          <CheckCircle2 className="w-16 h-16 text-[#008080] mb-4" />
          <h2 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h2>
          <p className="text-gray-600 mb-6 font-sans">Gracias por contactar. Te responderé lo antes posible.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="win-border bg-w98-bg px-6 py-2 active:win-border-pressed font-bold"
          >
             Enviar otro mensaje
          </button>
       </div>
     );
  }

  return (
    <div className="p-6 h-full font-sans text-gray-800 overflow-y-auto bg-w98-light/30">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-w98-titlebar mb-2">Contacto</h1>
        
        <div className="mb-6 bg-white win-border-pressed p-3 space-y-2 text-sm font-medium">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={16} className="text-w98-titlebar" />
            <a href="mailto:ivanmunozmoreno46@gmail.com" className="hover:underline">ivanmunozmoreno46@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone size={16} className="text-w98-titlebar" />
            <span>+34 655 22 72 55</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin size={16} className="text-w98-titlebar" />
            <span>Toledo, España</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              required
              className="w-full win-border-pressed bg-white px-3 py-2 outline-none focus:bg-blue-50 transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full win-border-pressed bg-white px-3 py-2 outline-none focus:bg-blue-50 transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje</label>
            <textarea 
              required
              rows={4}
              className="w-full win-border-pressed bg-white px-3 py-2 outline-none focus:bg-blue-50 transition-colors resize-none"
              placeholder="¿En qué puedo ayudarte?"
            />
          </div>

          <div className="pt-4 text-right">
             <button 
                type="submit" 
                disabled={status === 'sending'}
                className="win-border bg-w98-bg px-6 py-2 flex items-center gap-2 ml-auto active:win-border-pressed disabled:opacity-50 font-bold text-sm"
             >
                {status === 'sending' ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
