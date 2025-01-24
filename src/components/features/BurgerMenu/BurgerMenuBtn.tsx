import './BurgerMenuBtn.scss';
import Image from 'next/image';
import burgerBtn from '../../../assets/svg/burgerBtn.svg';
import burgerBtnWhite from '../../../assets/svg/burgerBtn-white.svg';
import useWindowSize from '@/src/hooks/useWindowSize';
function BurgerMenuBtn() {
  const { width } = useWindowSize();
  return (
    <div className='burgerBtn'>
      <Image src={width > 768 ? burgerBtn : burgerBtnWhite} alt='Открыть меню' />
    </div>
  );
}

export default BurgerMenuBtn;
