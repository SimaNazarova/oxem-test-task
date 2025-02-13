'use client';
import { createPortal } from 'react-dom';
import './Modal.scss';
import Image from 'next/image';
import close from '../../../assets/svg/close.svg';
import whatsup from '../../../assets/svg/whatsup.svg';
import tg from '../../../assets/svg/tg.svg';
import SmallButton from '../../shared/SmallButton/SmallButton';
import Link from 'next/link';
import { IApplicationData } from '@/src/types/types';
import { applicationSchema } from '@/src/validation/validation';
import { yupResolver } from '@hookform/resolvers/yup';

import InputWithText from '../../shared/TextField/TextField';
import { useForm } from 'react-hook-form';
import { useStore } from '@/src/store/store';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useOnClickOutside } from '@/src/hooks/useOnClickOutside';
import { SUCCESS_MESSAGE } from '@/src/constants/mock-data';

function Modal() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(applicationSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
  });
  const { openModal, setOpenModal, setOpenMobileMenu, setOpenTooltip, setTooltipMessage } = useStore();

  const onSubmit = (data: IApplicationData) => {
    console.log('Form Data:', data);
    setTooltipMessage(SUCCESS_MESSAGE);
    setOpenTooltip(true);
    setTimeout(() => {
      closeModal();
      reset();
    }, 1000);
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openModal) {
      gsap.to(modalRef.current, {
        opacity: 1,

        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [openModal]);

  const closeModal = () => {
    setOpenMobileMenu(false);
    gsap.to(modalRef.current, {
      opacity: 0,

      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => setOpenModal(false),
    });
  };

  useOnClickOutside(modalContainerRef, closeModal);

  if (!openModal) return null;
  return createPortal(
    <div className='modal' ref={modalRef}>
      <div className='modal__container' ref={modalContainerRef}>
        <div className='modal__content'>
          <h2 className='modal__title'>Онлайн-заявка</h2>
          <p className='modal__text'>
            Заполните форму, и&nbsp;мы&nbsp;вскоре свяжемся с&nbsp;вами, чтобы ответить на&nbsp;все вопросы
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
            <InputWithText
              name='number'
              control={control}
              error={Boolean(errors.number)}
              errorMessage={errors.number?.message}
              placeholder='Телефон'
              type='tel'
            />
            <InputWithText
              name='name'
              control={control}
              error={Boolean(errors.name)}
              errorMessage={errors.name?.message}
              placeholder='Имя'
              type='string'
            />

            <div className='modal__btnContainer'>
              <p className='modal__btnText'>
                Нажимая на&nbsp;кнопку &laquo;Оставить заявку&raquo;, я&nbsp;даю согласие{' '}
                <Link href='/' className='modal__btnLink'>
                  на&nbsp;обработку персональных данных
                </Link>
              </p>
              <SmallButton text='Оставить заявку' type='color' isValid={isValid} />
            </div>
          </form>

          <div className='modal__socials'>
            <Link href='/' className='modal__socialIcon'>
              <Image src={whatsup} alt='whatsup' title='whatsup' />
            </Link>
            <Link href='/' className='modal__socialIcon'>
              <Image src={tg} alt='telegram' title='telegram' />
            </Link>
          </div>
        </div>
        <button className='modal__close' onClick={closeModal}>
          <Image src={close} alt='закрыть модальное окно' title='закрыть модальное окно' />
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
