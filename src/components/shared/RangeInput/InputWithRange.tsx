'use client';
import React, { useState } from 'react';
import './InputWithRange.scss';

type IInputWithRange = {
  field: {
    id: number;
    title: string;
    start: number;
    end: number;
    sign: string;
    outlineSign: boolean;
  };
};

const InputWithRange: React.FC<IInputWithRange> = ({ field }) => {
  const { start, end, title, sign, outlineSign } = field;
  const [value, setValue] = useState<number>(start);

  // Функция для обработки изменений
  const handleChange = (newValue: string | number) => {
    const parsedValue = Number(newValue);

    // Ограничиваем значение в пределах min и max
    if (parsedValue < start) {
      setValue(start);
    } else if (parsedValue > end) {
      setValue(end);
    } else {
      setValue(parsedValue);
    }
  };

  return (
    <div className='rangeInput'>
      <label htmlFor={title} className='rangeInput__label'>
        {title}
      </label>
      {/* Текстовый инпут */}
      <input
        className='rangeInput__inputText'
        id={title}
        type='text'
        value={value}
        onChange={e => handleChange(e.target.value)}
        min={start}
        max={end}
      />
      <span className={`rangeInput__inputSign ${outlineSign && 'rangeInput__inputSign_outline'}`}>{sign}</span>
      {/* Инпут Range */}
      <input
        className='rangeInput__inputRange'
        id={title}
        type='range'
        min={start}
        max={end}
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

export default InputWithRange;
