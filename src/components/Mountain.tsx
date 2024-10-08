import React from 'react';

export const Mountain: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mountainGradient" x1="0%" y1="50%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#2d6a4f" />
            <stop offset="50%" stopColor="#40916c" />
            <stop offset="100%" stopColor="#52b788" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 C55,100 75,0 100,0 L100,100 Z"
          fill="url(#mountainGradient)"
        />
      </svg>
    </div>
  );
};