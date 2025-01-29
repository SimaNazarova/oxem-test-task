import car1_1440 from '../assets/png/car1/car1-1440.png';
import car2_1440 from '../assets/png/car2/car2 - 1440.png';
import car3_1440 from '../assets/png/car3/car3 - 1440.png';
import car4_1440 from '../assets/png/car4/car4 - 1440.png';
import car5_1440 from '../assets/png/car5/car5 - 1440.png';
import car1_1024 from '../assets/png/car1/car1-1024.png';
import car2_1024 from '../assets/png/car2/car2 - 1024.png';
import car3_1024 from '../assets/png/car3/car3 - 1024.png';
import car4_1024 from '../assets/png/car4/car4 - 1024.png';
import car5_1024 from '../assets/png/car5/car5 - 1024.png';
import car1_768 from '../assets/png/car1/car1-768.png';
import car2_768 from '../assets/png/car2/car2 - 768.png';
import car3_768 from '../assets/png/car3/car3 - 768.png';
import car4_768 from '../assets/png/car4/car4 - 768.png';
import car5_768 from '../assets/png/car5/car5 - 768.png';
import car1_320 from '../assets/png/car1/car1-320.png';
import car2_320 from '../assets/png/car2/car2 - 320.png';
import car3_320 from '../assets/png/car3/car3 - 320.png';
import car4_320 from '../assets/png/car4/car4 - 320.png';
import car5_320 from '../assets/png/car5/car5 - 320.png';
export const menu = [
  {
    id: 1,
    title: 'Лизинг',
    submenu: [
      { id: 4, title: 'Для личного пользования' },
      { id: 5, title: 'Для юридический лиц' },
      { id: 6, title: 'Калькулятор' },
    ],
  },
  { id: 2, title: 'Каталог', submenu: null },
  { id: 3, title: 'О нас', submenu: null },
];

export const calcData = [
  {
    id: 1,
    title: 'Стоимость автомобиля',
    start: 1000000,
    end: 6000000,
    sign: '₽',
    name: 'price',
  },
  {
    id: 2,
    title: 'Первоначальный взнос',
    start: 10,
    end: 60,
    sign: '%',
    name: 'payment',
  },
  {
    id: 3,
    title: 'Срок лизинга',
    start: 1,
    end: 60,
    sign: 'мес.',
    name: 'term',
  },
];

export const slides = [
  {
    title: 'Авто в лизинг для физических лиц',
    subtitle: 'Получите машину за 5 дней',
    id: 1,
    img1440: car1_1440,
    img1024: car1_1024,
    img768: car1_768,
    img320: car1_320,
  },
  {
    title: 'LAST CALL',
    subtitle: 'Успей купить последний V8',
    id: 2,
    img1440: car2_1440,
    img1024: car2_1024,
    img768: car2_768,
    img320: car2_320,
  },
  {
    title: '100 лет качества Quadrifoglio',
    subtitle: 'Уникальные опции лизинга',
    id: 3,
    img1440: car3_1440,
    img1024: car3_1024,
    img768: car3_768,
    img320: car3_320,
  },
  {
    title: 'Дань уважения классике!',
    subtitle: 'Успейте оформить лизинг на Lancer X Evolution - Final Edition',
    id: 4,
    img1440: car4_1440,
    img1024: car4_1024,
    img768: car4_768,
    img320: car4_320,
  },
  {
    title: 'RAM 1500 TRX',
    subtitle: 'ДНК УСПЕШНОГО БИЗНЕСА',
    id: 5,
    img1440: car5_1440,
    img1024: car5_1024,
    img768: car5_768,
    img320: car5_320,
  },
];

export const LEASING_RATE = 21 / (100 * 12); //Ключевая ставка Банка России на 26.01
