import car1 from '../assets/png/car1.png';
import car2 from '../assets/png/car2.png';
import car3 from '../assets/png/car3.png';
import car4 from '../assets/png/car4.png';
import car5 from '../assets/png/car5.png';
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
    image: car1,
    button: {
      text: 'Оставить заявку',
      link: './link',
    },
  },
  {
    title: null,
    subtitle: null,
    id: 2,
    image: car2,
    button: null,
  },
  {
    title: '100 лет качества Quadrifoglio',
    subtitle: 'Уникальные опции лизинга',
    id: 3,
    image: car3,
    button: {
      text: 'оставить заявку',
      link: './link',
    },
  },
  {
    title: 'Дань уважения классике!',
    subtitle: 'Успейте оформить лизинг на Lancer X Evolution - Final Edition',
    id: 4,
    image: car4,
    button: {
      text: 'оставить заявку',
      link: './link',
    },
  },
  {
    title: 'RAM 1500 TRX',
    subtitle: 'ДНК УСПЕШНОГО БИЗНЕСА',
    id: 5,
    image: car5,
    button: {
      text: 'оставить заявку',
      link: './link',
    },
  },
];

export const LEASING_RATE = 21 / (100 * 12); //Ключевая ставка Банка России на 26.01
