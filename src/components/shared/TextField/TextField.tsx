/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { InputMask, InputMaskProps } from '@react-input/mask';
import './TextField.scss';

interface TextField {
  control: any;
  errorMessage?: string;
  error: boolean;
  name: string;
  placeholder: string;
  register?: any;
  type: string;
}

const TextField: React.FC<TextField> = ({ control, errorMessage, error, name, placeholder, register, type }) => {
  // eslint-disable-next-line react/display-name
  const ForwardedInputMask = forwardRef<HTMLInputElement, InputMaskProps>((props, forwardedRef) => {
    return <InputMask ref={forwardedRef} mask='_(___)___-__-__' replacement={{ _: /\d/ }} {...props} />;
  });

  return (
    <div className='textField'>
      <Controller
        name={name}
        control={control}
        defaultValue={''}
        render={({ field: { onChange, value } }) => (
          <>
            {type === 'tel' ? (
              <ForwardedInputMask
                className={`textField__inputText ${error ? 'error-border' : ''}`}
                type='text'
                value={value}
                maxLength={55}
                onChange={e => {
                  const inputValue = e.target.value;
                  onChange(inputValue);
                }}
              />
            ) : (
              <input
                name={name}
                ref={register}
                className={`textField__inputText ${error ? 'error-border' : ''}`}
                type='text'
                value={value}
                maxLength={55}
                onChange={e => {
                  const inputValue = e.target.value;
                  onChange(inputValue);
                }}
              />
            )}
            <label className={`textField__inputLabel ${value && 'textField__inputLabel_filled'}`} htmlFor={name}>
              {placeholder}
            </label>
            {error && <span className='textField__error'>{String(errorMessage)}</span>}
          </>
        )}
      />
    </div>
  );
};

export default TextField;
