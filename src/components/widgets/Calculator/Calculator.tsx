'use client';
import { calcData } from '@/src/constants/mock-data';
import InputWithRange from '../../shared/RangeInput/InputWithRange';
import './Calculator.scss';
import LargeButton from '../../shared/LargeButton/LargeButton';

function Calculator() {
  return (
    <div className='calc'>
      <h2 className='calc__title'>
        Рассчитайте стоимость
        <br /> автомобиля в&nbsp;лизинг
      </h2>
      <div className='calc__inputs'>
        {calcData.map(item => {
          return <InputWithRange key={item.id} field={item} />;
        })}
      </div>
      <div className='calc__sum'>
        <div className='calc__sumRes'>
          <p className='calc__sumLabel'>Сумма договора лизинга</p>
          <p className='calc__sumNum'>1 215 455 ₽</p>
        </div>
        <div className='calc__sumRes'>
          <p className='calc__sumLabel'>Ежемесячный платеж от</p>
          <p className='calc__sumNum'>1 215 455 ₽</p>
        </div>
        <LargeButton text='Оставить заявку' />
      </div>
    </div>
  );
}

export default Calculator;
