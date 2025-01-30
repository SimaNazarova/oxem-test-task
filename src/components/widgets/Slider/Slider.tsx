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
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Swiper as SwiperType } from 'swiper';
import SliderArrows from '../../features/SliderArrows/SliderArrows';
import useWindowSize from '@/src/hooks/useWindowSize';
function Slider() {
  const whiteCircleRef = useRef<SVGCircleElement | null>(null);
  const swiperRef = useRef<SwiperType>(null);
  const { width } = useWindowSize();

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

  const [currentWidth, setCurrentWidth] = useState(320);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setCurrentWidth(1440);
    } else if (window.innerWidth > 768) {
      setCurrentWidth(1024);
    } else if (window.innerWidth > 321) {
      setCurrentWidth(768);
    } else {
      setCurrentWidth(320);
    }
  }, [width]);

  return (
    <div className='gallery'>
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
          const imageSrc =
            currentWidth >= 1025
              ? slide.img1440
              : currentWidth >= 769
                ? slide.img1024
                : currentWidth >= 321
                  ? slide.img768
                  : slide.img320;
          return (
            <SwiperSlide key={index}>
              <div className='gallery__slider'>
                <Image
                  src={imageSrc}
                  alt='пример автомобиля'
                  className='gallery__image'
                  priority={true}
                  title='пример автомобиля'
                />
                <div className='gallery__content'>
                  {slide.title && <p className='gallery__title'>{slide.title}</p>}
                  {slide.subtitle && <p className='gallery__text'>{slide.subtitle}</p>}

                  <SmallButton text={'Оставить заявку'} type='color' isValid={true} className='gallery__btn' />
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
