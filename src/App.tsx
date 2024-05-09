import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [previousValue, setPreviousValue] = useState<string>('');

  const handleNumberClick = (value: string) => {
    if (display === '0' && value === '0') return;

      setCurrentValue(currentValue + value);
      setDisplay(operator ? (previousValue + operator + currentValue + value) : currentValue + value);
  };

  const handleOperatorClick = (value: string) => {
    if (operator && operator !== '-' && value !== '-') {
      calculate();
    } else if (operator && value === '-' && currentValue === '') {
      setCurrentValue('-');
      setDisplay('-');
    } else {
      setOperator(value);
      setPreviousValue(currentValue);
      setDisplay(currentValue+value)
      setCurrentValue('');
    }
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.');
      setDisplay(display + '.');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
    setPreviousValue('');
  };

  const calculate = () => {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    console.log("prev, current, operator",prev,current, operator)
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setCurrentValue(result.toString());
    setPreviousValue(result.toString());
  };

  const handleEqualsClick = () => {
    calculate();
    setOperator('');
    setPreviousValue('');
  };

  return (
    <>
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClearClick}>
          AC
        </button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>
          x
        </button>
        <button id="seven" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="four" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button id="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
        <button id="one" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
        <button id="zero" onClick={() => handleNumberClick('0')}>
          0
        </button>
      </div>
    </div>
    <div className='warning-alert'> 
      <h4>This is  simple calculator which do calculation only for two numbers and one operator, Not handled all cases</h4>
    </div>
    </>
  );
}

export default App;