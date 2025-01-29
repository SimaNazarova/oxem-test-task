/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import './InputWithRange.scss';

type IField = {
  id: number;
  title: string;
  start: number;
  end: number;
  sign: string;
  name: string;
};

interface IInputWithRange {
  field: IField;
  percentage: number | null;
  control: Control<any>;
  errorMessage?: string;
  error: boolean;
}

const InputWithRange: React.FC<IInputWithRange> = ({ field, percentage, control, errorMessage, error }) => {
  const { start, end, title, sign, name } = field;

  return (
    <div className='rangeInput'>
      <label htmlFor={title} className='rangeInput__label'>
        {title}
      </label>

      <Controller
        name={name}
        control={control}
        defaultValue={start}
        render={({ field: { onChange, value } }) => {
          const rangeBackground = `linear-gradient(to right, #FF9514 ${((value - start) / (end - start)) * 100}%, #E1E1E1 ${((value - start) / (end - start)) * 100}%)`;

          return (
            <>
              <input
                className='rangeInput__inputText'
                id={title}
                type='text'
                value={value}
                max={10}
                onChange={e => {
                  const inputValue = e.target.value;
                  if (/^\d*$/.test(inputValue)) {
                    onChange(inputValue);
                  }
                }}
              />
              <span className='rangeInput__inputSign'>
                {percentage}
                {sign}
              </span>

              <input
                className='rangeInput__inputRange'
                id={title}
                type='range'
                min={start}
                max={end}
                value={value}
                style={{ background: rangeBackground }}
                onChange={e => {
                  onChange(Number(e.target.value));
                }}
              />
              {error && <span className='error-message'>{String(errorMessage)}</span>}
            </>
          );
        }}
      />
    </div>
  );
};

export default InputWithRange;
