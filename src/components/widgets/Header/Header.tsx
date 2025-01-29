'use client';
import './Header.scss';
import SmallButton from '../../shared/SmallButton/SmallButton';
import { menu } from '../../../constants/mock-data';
import useWindowSize from '../../../hooks/useWindowSize';
import BurgerMenuBtn from '../../features/BurgerMenu/BurgerMenuBtn';
import Link from 'next/link';
import Dropdown from '../../shared/Dropdown/Dropdown';
import { useStore } from '../../../store/store';
import HeaderLeftBlock from './HeaderLeftBlock/HeaderLeftBlock';

function Header() {
  const { openDropdown, setOpenDropdown, submenuId, setSubmenuId } = useStore();

  const chosenItemList = menu.find(item => submenuId === item.id)?.submenu;
  const { width } = useWindowSize();
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
      <HeaderLeftBlock />
      {width > 1023 ? (
        <nav className='header__rightSide' onMouseLeave={() => openDropdownMenu(0)}>
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
        </nav>
      ) : (
        <BurgerMenuBtn />
      )}
    </header>
  );
}

export default Header;
