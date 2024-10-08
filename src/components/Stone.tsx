import React from 'react';

interface StoneProps {
  progress: number;
}

export const Stone: React.FC<StoneProps> = ({ progress }) => {
  const xPosition = progress * 100;
  const yPosition = xPosition * xPosition / 100;
  
  return (
    <div 
      className="absolute w-8 h-8 bg-gray-600 rounded-full"
      style={{
        bottom: `${yPosition}%`,
        left: `${xPosition}%`,
        transform: 'translate(-50%, 50%)',
      }}
    />
  );
};