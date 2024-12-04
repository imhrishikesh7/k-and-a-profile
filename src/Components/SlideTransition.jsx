import { useEffect } from 'react';
import { SlideTransition } from '../components/SlideTransition';
import { useSlideCache } from '../hooks/useSlideCache';

const SlideTemplate = ({ id, onMount }) => {
  const isCached = useSlideCache(id);

  useEffect(() => {
    onMount?.();
  }, [onMount]);

  if (!isCached) {
    return <div>Loading...</div>;
  }

  return (
    <SlideTransition>
      {/* Your slide content */}
    </SlideTransition>
  );
};

export default SlideTemplate; 