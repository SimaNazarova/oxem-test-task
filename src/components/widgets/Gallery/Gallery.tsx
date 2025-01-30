import { Suspense } from 'react';
import Slider from '../Slider/Slider';

const ServerComponent = () => {
  return (
    <div>
      <h1>Авто в лизинг для физических лиц </h1>
    </div>
  );
};

const Gallery = () => {
  return (
    <Suspense fallback={<ServerComponent />}>
      <Slider />
    </Suspense>
  );
};

export default Gallery;
