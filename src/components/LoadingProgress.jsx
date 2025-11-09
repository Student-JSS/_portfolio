import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingProgressBar = () => {
  const location = useLocation(); // Detect route changes
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start loading bar on route change or page load
    setVisible(true);
    setProgress(0);

    // Animate to 80% quickly
    const timeout1 = setTimeout(() => setProgress(80), 100);

    // Then animate to 100%
    const timeout2 = setTimeout(() => setProgress(100), 500);

    // Hide after animation ends
    const timeout3 = setTimeout(() => setVisible(false), 1700);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [location]); // run effect every time route changes

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '5px',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--color-accent))',
        transition: 'width 0.4s ease',
        zIndex: 9999,
        borderRadius: '0 4px 4px 0',
        willChange: 'width',
      }}
    />
  );
};

export default LoadingProgressBar;