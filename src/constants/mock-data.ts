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

export const LEASING_RATE = 21 / (100 * 12); //Ключевая ставка Банка России на 26.01
