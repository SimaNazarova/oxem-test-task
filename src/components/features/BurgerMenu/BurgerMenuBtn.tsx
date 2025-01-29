import './BurgerMenuBtn.scss';
import Image from 'next/image';
import burgerBtn from '../../../assets/svg/burgerBtn.svg';
import burgerBtnWhite from '../../../assets/svg/burgerBtn-white.svg';
import useWindowSize from '@/src/hooks/useWindowSize';
import { useStore } from '@/src/store/store';

function BurgerMenuBtn() {
  const { width } = useWindowSize();
  const { setOpenMobileMenu } = useStore();
  return (
    <div className='burgerBtn' onClick={() => setOpenMobileMenu(true)}>
      <Image src={width > 767 ? burgerBtn : burgerBtnWhite} alt='Открыть меню' />
    </div>
  );
}

export default BurgerMenuBtn;
