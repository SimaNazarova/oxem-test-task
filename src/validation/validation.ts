import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  price: Yup.number()
    .typeError('Введите число')
    .min(1000000, `Число должно быть не меньше 1 млн.`)
    .max(6000000, 'Число должно быть не больше 6 млн.')
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

export const applicationSchema = Yup.object().shape({
  number: Yup.string().required('Поле обязательно'),
  name: Yup.string().required('Поле обязательно').max(50, 'Имя должно быть не больше 50 символов'),
});
