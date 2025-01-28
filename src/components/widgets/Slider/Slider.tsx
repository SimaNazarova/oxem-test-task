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
    <div className='slider'>
      <Swiper
        navigation={{
          nextEl: '.arrows__arrow-right',
          prevEl: '.arrows__arrow-left',
        }}
        modules={[Navigation, Pagination]}
        className='swiper'
        slidesPerView={1}
        spaceBetween={30}
        cssMode={true}
        pagination={true}
        loop={true}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='slider'>
                <Image src={slide.image} alt='пример автомобиля' className='slider__image' />
                <div className='slider__content'>
                  {slide.title && <p className='slider__title'>{slide.title}</p>}
                  {slide.subtitle && <p className='slider__text'>{slide.subtitle}</p>}
                  {slide.button && (
                    <SmallButton text={slide.button.text} type='color' isValid={true} className='slider__btn' />
                  )}
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
