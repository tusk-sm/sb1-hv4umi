import React from 'react';

interface SisyphusProps {
  progress: number;
}

export const Sisyphus: React.FC<SisyphusProps> = ({ progress }) => {
  const xPosition = progress * 100 - 2; // Немного левее камня
  const yPosition = xPosition * xPosition / 100;
  
  return (
    <div 
      className="absolute w-4 h-6 bg-yellow-700"
      style={{
        bottom: `${yPosition}%`,
        left: `${xPosition}%`,
        transform: 'translate(-50%, 50%)',
      }}
    />
  );
};