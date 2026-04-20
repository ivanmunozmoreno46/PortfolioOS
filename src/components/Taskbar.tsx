import React, { useState, useEffect } from 'react';
import { WindowData } from '../types';
import StartMenu from './StartMenu';
import { motion, AnimatePresence } from 'motion/react';

interface TaskbarProps {
  windows: WindowData[];
  onFocusWindow: (id: string) => void;
  onToggleMinimize: (id: string) => void;
}

export default function Taskbar({ windows, onFocusWindow, onToggleMinimize }: TaskbarProps) {
  const [time, setTime] = useState<Date>(new Date());
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleTabClick = (win: WindowData) => {
    if (win.isMinimized) {
      onToggleMinimize(win.id);
      onFocusWindow(win.id);
    } else {
      // If clicking the active window, minimize it?
      // Simple behavior: just focus if it's not minimized
      onFocusWindow(win.id);
    }
  };

  return (
    <div className="h-8 bg-w98-bg border-t-2 border-white absolute bottom-0 w-full flex items-center px-1 gap-1 relative z-50">
      <div className="flex items-center gap-1 h-full w-full">
        {/* Start Button */}
        <button
          onClick={() => setStartOpen(!startOpen)}
          className={`font-bold px-2 py-0.5 flex items-center gap-1.5 text-[13px] ${startOpen ? 'win-border-pressed' : 'win-border'}`}
        >
          <div className="w-3 h-3 bg-red-500 rounded-full"></div> 
          <span>Inicio</span>
        </button>

        {/* Start Menu Popup */}
        <AnimatePresence>
          {startOpen && (
            <StartMenu onClose={() => setStartOpen(false)} />
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="h-6 w-px bg-white/50 mx-1" />

        {/* Window Tabs */}
        <div className="flex gap-1 h-full py-1">
          {windows.map((win) => {
            const isActive = !win.isMinimized;
            return (
              <button
                key={win.id}
                onClick={() => handleTabClick(win)}
                className={`flex items-center justify-start px-3 py-0.5 text-xs font-bold gap-2 text-left truncate ${isActive ? 'win-border-pressed bg-gray-100' : 'win-border bg-w98-bg'}`}
              >
                <span className="truncate">{win.title}</span>
              </button>
            )
          })}
        </div>

        {/* Clock Area */}
        <div className="ml-auto win-border-pressed px-2 py-0.5 text-xs flex gap-1.5 items-center font-mono">
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </div>
  );
}
