import React, { useState, useEffect, useCallback } from 'react';
import { Mountain } from './components/Mountain';
import { Stone } from './components/Stone';
import { Sisyphus } from './components/Sisyphus';
import { Score } from './components/Score';

function App() {
  const [progress, setProgress] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const maxHeight = 1000; // Максимальная высота горы

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
   
    if (event.deltaY < 0) {
      setIsRolling(true);
      setProgress((prevProgress) => Math.min(prevProgress + 0.005, 1));
    } else {
      setIsRolling(false);
    }
  }, []);

 

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // if (!isRolling && progress > 0) {
        const rollSpeed = 0.001 + 0.002 * progress; // Скорость увеличивается с высотой
        setProgress((prevProgress) => Math.max(prevProgress - rollSpeed, 0));
      // }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRolling, progress]);

  const height = Math.round(progress * maxHeight);

  return (
    <div className="h-screen bg-sky-200 flex flex-col items-center justify-center overflow-hidden pl-4">
      <h1 className="text-4xl font-bold mb-8">Сизиф</h1>
      <div className="relative w-full h-[60vh]">
        <Mountain />
        <Stone progress={progress} />
        <Sisyphus progress={progress} />
      </div>
      <Score height={height} />
      <p className="mt-4 text-lg">Крутите колесико мыши вверх, чтобы катить камень</p>
    </div>
  );
}

export default App;