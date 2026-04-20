import React, { useState, createContext, useContext } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import { WindowData } from './types';
import { Briefcase, User, GraduationCap, Mail, Globe } from 'lucide-react';
import AboutContent from './components/content/AboutContent';
import ExperienceContent from './components/content/ExperienceContent';
import ProjectsContent from './components/content/ProjectsContent';
import ContactContent from './components/content/ContactContent';

const initialWindows: WindowData[] = [];

type ShortcutDef = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  noPadding?: boolean;
};

export const OsContext = createContext<{
  openWindow: (shortcut: ShortcutDef) => void;
}>({
  openWindow: () => {}
});

// App shortcuts
export const DesktopShortcuts: ShortcutDef[] = [
  { id: 'about', title: 'Sobre Mí', icon: <User size={36} color="#00A4EF" className="drop-shadow-sm" />, content: <AboutContent /> },
  { id: 'experience', title: 'Experiencia', icon: <GraduationCap size={36} color="#FFB900" className="drop-shadow-sm" />, content: <ExperienceContent /> },
  { id: 'projects', title: 'Proyectos', icon: <Briefcase size={36} color="#F24E42" className="drop-shadow-sm" />, content: <ProjectsContent /> },
  { id: 'contact', title: 'Contacto', icon: <Mail size={36} color="#80BB00" className="drop-shadow-sm" />, content: <ContactContent /> }
];

export default function App() {
  const [windows, setWindows] = useState<WindowData[]>(initialWindows);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const openWindow = (shortcut: ShortcutDef) => {
    const existing = windows.find(w => w.id === shortcut.id);
    
    if (existing) {
      // Bring to front
      focusWindow(existing.id);
      if (existing.isMinimized) {
        setWindows(prev => prev.map(w => w.id === shortcut.id ? { ...w, isMinimized: false, zIndex: highestZIndex + 1 } : w));
        setHighestZIndex(prev => prev + 1);
      }
      return;
    }

    const newZ = highestZIndex + 1;
    setHighestZIndex(newZ);
    
    const newWindow: WindowData = {
      id: shortcut.id,
      title: shortcut.title,
      isOpen: true,
      isMinimized: false,
      zIndex: newZ,
      content: shortcut.content,
      icon: shortcut.icon,
      noPadding: shortcut.noPadding
    };

    setWindows([...windows, newWindow]);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const toggleMinimize = (id: string) => {
    setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: !w.isMinimized } : w));
  };

  const focusWindow = (id: string) => {
    const newZ = highestZIndex + 1;
    setHighestZIndex(newZ);
    setWindows(windows.map(w => w.id === id ? { ...w, zIndex: newZ } : w));
  };

  return (
    <OsContext.Provider value={{ openWindow }}>
      <div className="w-full h-screen overflow-hidden flex flex-col bg-w98-desktop relative font-retro">
        <Desktop 
          shortcuts={DesktopShortcuts} 
          onOpenWindow={openWindow} 
          windows={windows}
          onCloseWindow={closeWindow}
          onMinimizeWindow={toggleMinimize}
          onFocusWindow={focusWindow}
        />
        <Taskbar 
          windows={windows} 
          onFocusWindow={focusWindow} 
          onToggleMinimize={toggleMinimize} 
        />
      </div>
    </OsContext.Provider>
  );
}
