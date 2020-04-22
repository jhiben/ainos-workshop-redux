import React, { useState } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { CalcState } from './reducers';
import { plus, minus, divide, multiply } from './actions';

interface CalcProps {
  result: number;
  plus: (arg: number) => void;
  minus: (arg: number) => void;
  divide: (arg: number) => void;
  multiply: (arg: number) => void;
}

const Calc: React.FC<CalcProps> = ({ result, plus, minus, divide, multiply }) => {
  const [arg, setArg] = useState(0);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 100,
      }}
    >
      <input
        type="text"
        value={arg}
        onChange={e => setArg(+(e.target as HTMLInputElement).value)}
        style={{ width: 100, marginBottom: 20 }}
      />
      <div>
        <Button text="+" onClick={() => plus(arg)} />
        <Button text="-" onClick={() => minus(arg)} />
      </div>
      <div>
        <Button text="*" onClick={() => multiply(arg)} />
        <Button text="/" onClick={() => divide(arg)} />
      </div>
      <div style={{ marginTop: 20 }}>{result}</div>
    </div>
  );
};

const mapStateToProps = (state: { calc: CalcState }) => ({
  result: state.calc.computed,
});

const mapDispatchToProps = {
  plus,
  minus,
  multiply,
  divide,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
