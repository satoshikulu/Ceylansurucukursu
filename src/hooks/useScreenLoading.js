import { useEffect, useState } from 'react';

/** Brief skeleton flash on screen transitions — premium perceived performance */
export function useScreenLoading(screenKey, delayMs = 380) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), delayMs);
    return () => window.clearTimeout(timer);
  }, [screenKey, delayMs]);

  return loading;
}
