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
  percentage: number | null;
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

      {/* Controller для текстового инпута */}
      <Controller
        name={name}
        control={control}
        defaultValue={start}
        rules={{
          min: start,
          max: end,
          validate: value => (value >= start && value <= end) || `Value must be between ${start} and ${end}`,
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <div className='smallRangeInput__container'>
              <span className={`smallRangeInput__inputSign`}>{firstPayment}</span>
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
            </div>
            <input
              className='smallRangeInput__inputRange'
              id={title}
              type='range'
              min={start}
              max={end}
              value={value}
              onChange={e => onChange(Number(e.target.value))}
            />
            {error && <span className='error-message'>{String(errorMessage)}</span>}
          </>
        )}
      />
    </div>
  );
};

export default SmallInputWithRange;
