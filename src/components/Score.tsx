import React from 'react';

interface ScoreProps {
  height: number;
}

export const Score: React.FC<ScoreProps> = ({ height }) => {
  return (
    <div className="text-2xl font-bold">
      Высота: {height} м
    </div>
  );
};