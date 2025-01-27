import Calculator from '../components/widgets/Calculator/Calculator';

import Slider from '../components/widgets/Slider/Slider';
import './page.scss';

export default function Home() {
  return (
    <div className='page'>
      <Slider />
      <Calculator />
    </div>
  );
}
