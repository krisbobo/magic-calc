import Buttons from './Buttons';
import Display from './Display';
import style from './Calculator.module.scss';

const Calculator = () => (
  <div className={style.calculator}>
    <Display />
    <Buttons />
  </div>
);

export default Calculator;
