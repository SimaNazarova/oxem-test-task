'use client';
import { calcData } from '@/src/constants/mock-data';
import InputWithRange from '../../shared/InputWithRange/InputWithRange';
import './Calculator.scss';
import LargeButton from '../../shared/LargeButton/LargeButton';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { calcFirstPayment, calcFullPayment, calcMonthlyPayment } from '../../../tools/_calc_functions';
import SmallInputWithRange from '../../shared/SmallInputWithRange/SmallInputWithRange';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from '@/src/validation/validation';
import { ICalcData } from '@/src/types/types';
import { formatNumberWithSpaces } from '@/src/tools/_format_number_with_spaces';

function Calculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [fullPayment, setFullPayment] = useState<number>(0);
  const [firstPayment, setFirstPayment] = useState<number>(0);
  console.log(firstPayment, 'firstPayment');
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = (data: ICalcData) => {
    console.log('Form Data:', data);
  };

  const priceWatch = watch('price');
  const percentageWatch = watch('payment');
  const termWatch = watch('term');
  console.log(priceWatch, 'priceWatch');
  //первоначальный взнос
  useEffect(() => {
    if (priceWatch && percentageWatch) {
      const res = calcFirstPayment(priceWatch, percentageWatch);
      setFirstPayment(res);
    }
  }, [priceWatch, percentageWatch]);

  //Ежемесячный платёж
  useEffect(() => {
    const res = calcMonthlyPayment(priceWatch, firstPayment, termWatch);
    setMonthlyPayment(res);
  }, [priceWatch, firstPayment, termWatch]);

  //сумма договора
  useEffect(() => {
    const res = calcFullPayment(firstPayment, termWatch, monthlyPayment);
    setFullPayment(res);
  }, [firstPayment, termWatch, monthlyPayment]);

  return (
    <div className='calc'>
      <h2 className='calc__title'>
        Рассчитайте стоимость
        <br /> автомобиля в&nbsp;лизинг
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='calc__inputs'>
          <InputWithRange
            field={calcData[0]}
            percentage={null}
            control={control}
            error={Boolean(errors.price)}
            errorMessage={errors.price?.message}
          />
          <SmallInputWithRange
            field={calcData[1]}
            control={control}
            firstPayment={firstPayment}
            error={Boolean(errors.payment)}
            errorMessage={errors.payment?.message}
          />
          <InputWithRange
            field={calcData[2]}
            percentage={null}
            control={control}
            error={Boolean(errors.term)}
            errorMessage={errors.term?.message}
          />
        </div>
        <div className='calc__sum'>
          <div className='calc__sumRes'>
            <p className='calc__sumLabel'>Сумма договора лизинга</p>
            <p className='calc__sumNum'>{formatNumberWithSpaces(fullPayment)} ₽</p>
          </div>
          <div className='calc__sumRes'>
            <p className='calc__sumLabel'>Ежемесячный платеж от</p>
            <p className='calc__sumNum'>{formatNumberWithSpaces(monthlyPayment)} ₽</p>
          </div>
          <LargeButton text='Оставить заявку' />
        </div>
      </form>
    </div>
  );
}

export default Calculator;
