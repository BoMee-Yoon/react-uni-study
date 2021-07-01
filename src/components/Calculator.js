import React, { useState } from 'react';

const ACTION = {
  ADD: 'add',
  MINUS: 'minus'
};

const NUMBER_TYPE = {
  LEFT: 'left',
  RIGHT: 'right'
};

export default function Calculator() {
  const defaultNumber = {
    [NUMBER_TYPE.LEFT]: 0,
    [NUMBER_TYPE.RIGHT]: 0
  }

  const [number, setNumber] = useState({ ...defaultNumber });

  const { left, right } = number;

  const resetNumbers = () => setNumber({ ...defaultNumber })

  const updateNumber = ({ target: { name, value }}) => {
    setNumber({
      ...number,
      [name]: Number(value)
    });
  }

  const clickButton = ({ target: { dataset }}) => {
    if (!dataset.action) return;
    switch(dataset.action) {
      case ACTION.ADD:
        alert(left + right);
        break;

      case ACTION.MINUS:
        alert(left - right);
        break;

      default:
        break;
    }
    resetNumbers();
  }

  return (
    <>
      <input type='number' name={ NUMBER_TYPE.LEFT } value={ left } onChange={ updateNumber } />
      <input type='number' name={ NUMBER_TYPE.RIGHT } value={ right } onChange={ updateNumber } />
      <button data-action={ ACTION.ADD } onClick={ clickButton }>+</button>
      <button data-action={ ACTION.MINUS } onClick={ clickButton }>-</button>
    </>
  )
}