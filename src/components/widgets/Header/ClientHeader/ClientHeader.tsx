'use client';
import '../Header.scss';
import SmallButton from '../../../shared/SmallButton/SmallButton';
import { menu } from '../../../../constants/mock-data';
import useWindowSize from '../../../../hooks/useWindowSize';
import BurgerMenuBtn from '../../../features/BurgerMenu/BurgerMenuBtn';
import Link from 'next/link';
import Dropdown from '../../../shared/Dropdown/Dropdown';
import { useStore } from '../../../../store/store';
import HeaderLeftBlock from '../HeaderLeftBlock/HeaderLeftBlock';
import useScroll from '@/src/hooks/useScroll';
import { useEffect, useState } from 'react';

function ClientHeader() {
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

  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    if (scrollY >= 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, [scrollY]);
  return (
    <header className={`header ${hasScrolled ? 'header_border' : ''}`}>
      <div className='header__container'>
        <HeaderLeftBlock />
        {width > 1023 ? (
          <nav className='header__rightSide' onMouseLeave={() => openDropdownMenu(0)}>
            <ul className='header__rightSide-menu'>
              {menu.map(item => {
                return (
                  <li key={item.id} className='header__rightSide-item' onMouseEnter={() => openDropdownMenu(item.id)}>
                    <Link href='#'>{item.title}</Link>
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
      </div>
    </header>
  );
}

export default ClientHeader;
