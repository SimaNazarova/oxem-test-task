'use client';
import './MobileMenu.scss';
import Image from 'next/image';
import closeMobileMenu from '../../../assets/svg/close-mobile-menu.svg';
import { menu } from '../../../constants/mock-data';
import Link from 'next/link';
import SmallButton from '../../shared/SmallButton/SmallButton';
import { useStore } from '@/src/store/store';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MobileMenu() {
  const { openMobileMenu, setOpenMobileMenu } = useStore();

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openMobileMenu) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [openMobileMenu]);

  const closeModal = () => {
    gsap.to(mobileMenuRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => setOpenMobileMenu(false),
    });
  };

  if (!openMobileMenu) return null;
  return (
    <div className='mobileMenu' ref={mobileMenuRef}>
      <div className='mobileMenu__container' ref={mobileMenuRef}>
        <div className='mobileMenu__content'>
          <nav className='mobileMenu__nav'>
            <ul className='mobileMenu__list'>
              {menu.map(item => {
                return (
                  <li key={item.id} className='mobileMenu__item'>
                    <Link href='/'>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
            <SmallButton text={'Оставить заявку'} type='color' isValid={true} className='mobileMenu__btn' />
          </nav>
        </div>
        <button className='mobileMenu__close' onClick={closeModal}>
          <Image src={closeMobileMenu} alt='закрыть модальное окно' title='закрыть модальное окно' />
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
