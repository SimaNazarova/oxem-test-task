/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
import './SmallInputWithRange.scss';

type IField = {
  id: number;
  title: string;
  start: number;
  end: number;
  sign: string;
  name: string;
};

interface ISmallInputWithRange {
  field: IField;
  control: any;
  firstPayment: number;
  errorMessage?: string;
  error: boolean;
}

const SmallInputWithRange: React.FC<ISmallInputWithRange> = ({ field, control, firstPayment, errorMessage, error }) => {
  const { start, end, title, name } = field;

  return (
    <div className='smallRangeInput'>
      <label htmlFor={title} className='smallRangeInput__label'>
        {title}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={start}
        rules={{
          min: start,
          max: end,
          validate: value => (value >= start && value <= end) || `Value must be between ${start} and ${end}`,
        }}
        render={({ field: { onChange, value } }) => {
          const rangeBackground = `linear-gradient(to right, #FF9514 ${((value - start) / (end - start)) * 100}%, #E1E1E1 ${((value - start) / (end - start)) * 100}%)`;
          return (
            <>
              <div className='smallRangeInput__container'>
                <span className={`smallRangeInput__sum`}>{firstPayment}</span>
                <input
                  className='smallRangeInput__inputText'
                  id={title}
                  type='text'
                  value={value}
                  maxLength={2}
                  onChange={e => {
                    const inputValue = e.target.value;
                    if (/^\d*$/.test(inputValue)) {
                      onChange(inputValue);
                    }
                  }}
                />
                <span className='smallRangeInput__inputSign'>%</span>
              </div>
              <input
                className='smallRangeInput__inputRange'
                id={title}
                type='range'
                min={start}
                max={end}
                style={{ background: rangeBackground }}
                value={value}
                onChange={e => onChange(Number(e.target.value))}
              />
              {error && <span className='smallRangeInput__error'>{String(errorMessage)}</span>}
            </>
          );
        }}
      />
    </div>
  );
};

export default SmallInputWithRange;
