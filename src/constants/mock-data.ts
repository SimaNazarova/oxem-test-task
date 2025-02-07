import car1 from '../assets/png/car1/car1.png';
import car2 from '../assets/png/car2/car2.png';
import car3 from '../assets/png/car3/car3.png';
import car4 from '../assets/png/car4/car4.png';
import car5 from '../assets/png/car5/car5.png';
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
    title: 'Дань уважения классике!',
    subtitle: 'Успейте оформить лизинг на Lancer X Evolution',
    id: 4,
    img: car4,
  },
  {
    title: 'LAST CALL',
    subtitle: 'Успей купить последний V8',
    id: 2,
    img: car2,
  },
  {
    title: '100 лет качества Quadrifoglio',
    subtitle: 'Уникальные опции лизинга',
    id: 3,
    img: car3,
  },

  {
    title: 'RAM 1500 TRX',
    subtitle: 'ДНК УСПЕШНОГО БИЗНЕСА',
    id: 5,
    img: car5,
  },
  {
    title: 'JAGUAR XFR-S',
    subtitle: "It's good to be bad",
    id: 1,
    img: car1,
  },
];

export const LEASING_RATE = 21 / (100 * 12); //Ключевая ставка Банка России на 26.01

export const SUCCESS_MESSAGE = 'Заявка успешно отправлена';
