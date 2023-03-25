import { useState } from 'react';
import calculate from '../logic/calculate';
import style from './Calculator.module.scss';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    setState((prevState) => calculate(
      {
        total: prevState.total,
        next: prevState.next,
        operation: prevState.operation,
      },
      buttonName,
    ));
  };

  const { total, next, operation } = state;
  const result = `${total}${operation}${next}`.replace(/null/g, '');
  const adjustedResult = result.replace(/undefined/g, '');

  return (
    <div className={style.calculator}>
      <div className={style.screen}>{adjustedResult}</div>
      <div className={style.calculatorButtons}>
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button type="button" onClick={handleClick}>&divide;</button>
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button type="button" onClick={handleClick}>x</button>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button type="button" onClick={handleClick}>-</button>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button type="button" onClick={handleClick}>+</button>
        <button type="button" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
