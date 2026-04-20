import React from 'react';
import { motion } from 'motion/react';
import { FileText, Github, Linkedin, MapPin } from 'lucide-react';

interface StartMenuProps {
  onClose: () => void;
}

export default function StartMenu({ onClose }: StartMenuProps) {
  const items = [
    { title: 'Portfolio CV', icon: <FileText className="text-w98-titlebar" size={24} />, action: () => alert('El CV de Iván está siendo visualizado en el SO.') },
    { title: 'LinkedIn', icon: <Linkedin className="text-blue-600" size={24} />, action: () => window.open('https://www.linkedin.com/in/ivanmu%C3%B1oz2003/', '_blank') },
    { title: 'Localización', subtitle: 'Toledo, España', icon: <MapPin className="text-red-500" size={24} />, action: () => window.open('https://maps.google.com/?q=Toledo,%20España', '_blank') }
  ];

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.15 }}
        className="absolute bottom-10 left-0 w-64 win-border bg-w98-bg z-50 flex shadow-2xl"
      >
        {/* Left Side Banner */}
        <div className="w-10 bg-titlebar-gradient flex items-end py-2">
          <div className="text-white transform -rotate-90 origin-bottom-left ml-4 whitespace-nowrap font-bold tracking-widest text-lg">
            <span className="text-gray-300 mr-1 font-light">Iván</span>OS
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-1">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.action();
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#000080] hover:text-white transition-none group text-left"
            >
              <div className="group-hover:opacity-100">{item.icon}</div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">{item.title}</span>
                {item.subtitle && <span className="text-[10px] text-gray-500 group-hover:text-gray-300">{item.subtitle}</span>}
              </div>
            </button>
          ))}
          <div className="h-[2px] bg-w98-dark border-b-2 border-w98-white mx-1 my-1" />
          <button
            onClick={onClose}
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-[#000080] hover:text-white group"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 bg-red-600 rounded-sm" />
            </div>
            <span className="text-sm font-bold">Apagar el sistema...</span>
          </button>
        </div>
      </motion.div>
    </>
  );
}
