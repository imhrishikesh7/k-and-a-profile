import { useState, useEffect } from 'react';

export const useSlideCache = (slideId) => {
  const [cached, setCached] = useState(false);
  
  useEffect(() => {
    const cache = new Set();
    if (!cache.has(slideId)) {
      cache.add(slideId);
      setCached(true);
    }
    return () => {
      // Keep last 3 slides in cache
      if (cache.size > 3) {
        const firstItem = cache.values().next().value;
        cache.delete(firstItem);
      }
    };
  }, [slideId]);

  return cached;
}; 