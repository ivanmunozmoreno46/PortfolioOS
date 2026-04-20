import React from 'react';

export type WindowData = {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  content: React.ReactNode;
  icon: React.ReactNode;
  noPadding?: boolean;
};
