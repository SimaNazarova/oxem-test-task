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
    start: 1,
    end: 600000,
    sign: '₽',
    outlineSign: false,
  },
  {
    id: 2,
    title: 'Первоначальный взнос',
    start: 10,
    end: 60,
    sign: '13%',
    outlineSign: true,
  },
  {
    id: 3,
    title: 'Срок лизинга',
    start: 1,
    end: 60,
    sign: 'мес.',
    outlineSign: false,
  },
];
