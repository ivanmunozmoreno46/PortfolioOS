import React from 'react';
import Draggable from 'react-draggable';
import { WindowData } from '../types';
import OsWindow from './Window';
import clsx from 'clsx';
import { motion } from 'motion/react';

interface DesktopProps {
  shortcuts: any[];
  onOpenWindow: (shortcut: any) => void;
  windows: WindowData[];
  onCloseWindow: (id: string) => void;
  onMinimizeWindow: (id: string) => void;
  onFocusWindow: (id: string) => void;
}

const DesktopIcon = ({ shortcut, onOpenWindow }: { key?: React.Key, shortcut: any, onOpenWindow: (s: any) => void }) => {
  const nodeRef = React.useRef(null);
  const dragStartPos = React.useRef({ x: 0, y: 0 });

  return (
    <Draggable 
      nodeRef={nodeRef} 
      bounds="parent"
      onStart={(e, data) => {
        dragStartPos.current = { x: data.x, y: data.y };
      }}
      onStop={(e, data) => {
        const dx = Math.abs(data.x - dragStartPos.current.x);
        const dy = Math.abs(data.y - dragStartPos.current.y);
        
        // If movement is less than 5 pixels, it's a click/tap, not a drag
        if (dx < 5 && dy < 5) {
          const isMobile = window.innerWidth < 640 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
          if (isMobile) {
            onOpenWindow(shortcut);
          }
        }
      }}
    >
      <div 
        ref={nodeRef}
        className="w-[80px] flex flex-col items-center gap-1 cursor-pointer p-2 hover:bg-white/10 hover:border hover:border-dotted hover:border-white/50 border border-transparent"
        onDoubleClick={(e) => {
            const isMobile = window.innerWidth < 640 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
            if (!isMobile) {
                onOpenWindow(shortcut);
            }
        }}
      >
        <div className="win-border w-12 h-12 bg-gray-100 flex items-center justify-center shrink-0">
          {shortcut.icon}
        </div>
        <span className="text-white text-xs drop-shadow-md text-center line-clamp-2">
          {shortcut.title}
        </span>
      </div>
    </Draggable>
  );
};

export default function Desktop({ shortcuts, onOpenWindow, windows, onCloseWindow, onMinimizeWindow, onFocusWindow }: DesktopProps) {
  return (
    <div className="flex-1 w-full relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="p-4 flex flex-col gap-6 items-start h-full flex-wrap content-start">
        {shortcuts.map((shortcut) => (
          <DesktopIcon key={shortcut.id} shortcut={shortcut} onOpenWindow={onOpenWindow} />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win) => {
        if (!win.isOpen) return null;
        return (
          <OsWindow 
            key={win.id}
            data={win}
            onClose={() => onCloseWindow(win.id)}
            onMinimize={() => onMinimizeWindow(win.id)}
            onFocus={() => onFocusWindow(win.id)}
          />
        );
      })}
    </div>
  );
}
