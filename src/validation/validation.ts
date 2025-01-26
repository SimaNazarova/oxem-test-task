import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  price: Yup.number()
    .typeError('Введите число')
    .min(100000, `Число должно быть не меньше 1000000`)
    .max(6000000, 'Число должно быть не больше 6000000')
    .required('Поле обязательно'),
  payment: Yup.number()
    .typeError('Введите число')
    .min(1, `Число должно быть не меньше 10`)
    .max(60, 'Число должно быть не больше 60')
    .required('Поле обязательно'),
  term: Yup.number()
    .typeError('Введите число')
    .min(1, `Число должно быть не меньше 1`)
    .max(60, 'Число должно быть не больше 60')
    .required('Поле обязательно'),
});
