'use client';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { slides } from '@/src/constants/mock-data';
import Image from 'next/image';
import SmallButton from '../../shared/SmallButton/SmallButton';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Swiper as SwiperType } from 'swiper';
import SliderArrows from '../../features/SliderArrows/SliderArrows';

function Slider() {
  const whiteCircleRef = useRef<SVGCircleElement | null>(null);
  const swiperRef = useRef<SwiperType>(null);

  const tl = gsap.timeline();
  useEffect(() => {
    const whiteCircle = whiteCircleRef.current;
    if (whiteCircle) {
      const radius = whiteCircle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      whiteCircle.style.strokeDasharray = `${circumference}`;
      whiteCircle.style.strokeDashoffset = `${circumference}`;

      tl.to(whiteCircle, {
        strokeDashoffset: 0,
        duration: 10,
        ease: 'linear',
        onComplete: () => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
            tl.restart();
          }
        },
      });
    }
    return () => {
      tl.kill();
    };
  }, []);

  function restartTl() {
    tl.restart();
  }

  return (
    <div className='gallery'>
      <h1 className='gallery__seoTitle'>Авто в лизинг для физических лиц </h1>
      <Swiper
        navigation={{
          nextEl: '.arrows__arrow-right',
          prevEl: '.arrows__arrow-left',
        }}
        modules={[Navigation, Pagination]}
        className='swiper'
        slidesPerView={1}
        pagination={true}
        loop={true}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='gallery__slider'>
                <Image
                  src={slide.img}
                  alt='пример автомобиля'
                  className='gallery__image'
                  priority={true}
                  title='пример автомобиля'
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className='gallery__contentContainer'>
                  <div className='gallery__content'>
                    {slide.title && <p className='gallery__title'>{slide.title}</p>}
                    {slide.subtitle && <p className='gallery__text'>{slide.subtitle}</p>}

                    <SmallButton text={'Оставить заявку'} type='color' isValid={true} className='gallery__btn' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderArrows animation={restartTl} svgRef={whiteCircleRef} />
    </div>
  );
}

export default Slider;
