import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { WindowData } from '../types';
import { Minus, Square, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WindowProps {
  key?: React.Key;
  data: WindowData;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
}

export default function OsWindow({ data, onClose, onMinimize, onFocus }: WindowProps) {
  const nodeRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [position, setPosition] = useState({ 
    x: Math.max(0, (window.innerWidth - 600) / 2), 
    y: Math.max(0, (window.innerHeight - 400) / 2) 
  });

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleDrag = (e: any, ui: any) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  if (data.isMinimized) return null;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-titlebar"
      bounds="parent"
      position={isFullScreen ? {x: 0, y: 0} : position}
      onDrag={handleDrag}
      onStart={onFocus}
      disabled={isFullScreen}
    >
      <div 
        ref={nodeRef} 
        className={`absolute top-0 left-0 ${isFullScreen ? 'w-full h-full' : 'w-[600px] h-[400px]'}`}
        style={{ zIndex: data.zIndex }}
        onMouseDownCapture={onFocus}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`flex flex-col bg-w98-bg win-border overflow-hidden w-full h-full resize overflow-auto`}
        >
        {/* Title Bar */}
        <div 
          className="window-titlebar bg-titlebar-gradient text-white h-[22px] px-1 py-0.5 flex justify-between items-center cursor-move text-[13px] font-bold"
          onDoubleClick={toggleFullScreen}
        >
          <div className="flex items-center gap-2 tracking-wide pointer-events-none">
            {/* The icon in titlebar could just be a small square or the passed icon but rendered tiny */}
            <span className="opacity-90">{data.title}</span>
          </div>
          
          {/* Controls */}
          <div className="flex gap-1">
            <button 
              onClick={(e) => { e.stopPropagation(); onMinimize(); }}
              className="w-[18px] h-[18px] win-border bg-w98-bg text-black flex items-center justify-center active:win-border-pressed text-[10px]"
            >
              _
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); toggleFullScreen(); }}
              className="w-[18px] h-[18px] win-border bg-w98-bg text-black flex items-center justify-center active:win-border-pressed text-[12px] font-normal"
            >
              □
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="w-[18px] h-[18px] win-border bg-w98-bg text-black flex items-center justify-center active:win-border-pressed text-[10px]"
            >
              X
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-auto bg-w98-bg win-border-window m-0.5 font-sans relative">
           <div className={`absolute inset-0 ${data.noPadding ? 'p-0' : 'p-4'}`}>
             {data.content}
           </div>
        </div>
        
        {/* Resizer Handle */}
        {!isFullScreen && (
           <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize pointer-events-none opacity-50">
             <svg width="100%" height="100%" viewBox="0 0 10 10">
               <polygon points="10,0 10,10 0,10" fill="#808080" />
               <polygon points="10,2 10,10 2,10" fill="#dfdfdf" />
             </svg>
           </div>
        )}
        </motion.div>
      </div>
    </Draggable>
  );
}
