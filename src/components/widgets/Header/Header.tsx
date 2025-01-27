'use client';
import './Header.scss';
import Image from 'next/image';
import logo from '../../../assets/svg/logo.svg';
import SmallButton from '../../shared/SmallButton/SmallButton';
import { menu } from '../../../constants/mock-data';
import useWindowSize from '../../../hooks/useWindowSize';
import BurgerMenuBtn from '../../features/BurgerMenu/BurgerMenuBtn';
import Link from 'next/link';
import Dropdown from '../../shared/Dropdown/Dropdown';
import { useStore } from '../../../store/store';

function Header() {
  const { width } = useWindowSize();
  const { openDropdown, setOpenDropdown, submenuId, setSubmenuId } = useStore();

  const chosenItemList = menu.find(item => submenuId === item.id)?.submenu;

  function openDropdownMenu(id: number) {
    if (id === submenuId) {
      setOpenDropdown(false);
      setSubmenuId(null);
    } else {
      setSubmenuId(id);
      setOpenDropdown(true);
    }
  }

  return (
    <header className='header'>
      <div className='header__leftSide'>
        <Image src={logo} alt='логотип' width={width > 1439 ? 200 : 166} />
        {width > 768 && (
          <>
            <div className='header__verticalLine'></div>
            <p className='header__leftSide-subtitle'>лизинговая компания</p>
          </>
        )}
      </div>
      {width > 1023 ? (
        <div className='header__rightSide' onMouseLeave={() => openDropdownMenu(0)}>
          <ul className='header__rightSide-menu'>
            {menu.map(item => {
              return (
                <li key={item.id} className='header__rightSide-item'>
                  <Link href='#' onMouseEnter={() => openDropdownMenu(item.id)}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <SmallButton isValid={true} text='Оставить заявку' type='transparent' />
          {openDropdown && chosenItemList && <Dropdown data={chosenItemList} />}
        </div>
      ) : (
        <BurgerMenuBtn />
      )}
    </header>
  );
}

export default Header;
