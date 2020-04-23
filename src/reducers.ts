import { CalcAction } from './actions';
import { combineReducers } from 'redux';
import { produce, Draft } from 'immer';

export interface CalcState {
  readonly computed: number;
}

const calc = produce(
  (state: Draft<CalcState>, action: CalcAction) => {
    switch (action.type) {
      case '+':
        plus(state, action.payload);
        break;
      case '-':
        minus(state, action.payload);
        break;
      case '*':
        multiply(state, action.payload);
        break;
      case '/':
        divide(state, action.payload);
        break;
    }
  },
  { computed: 0 }
);

function plus(state: Draft<CalcState>, value: number) {
  state.computed += value;
}

function minus(state: Draft<CalcState>, value: number) {
  state.computed -= value;
}

function divide(state: Draft<CalcState>, value: number) {
  state.computed /= value;
}

function multiply(state: Draft<CalcState>, value: number) {
  state.computed *= value;
}

const calcApp = combineReducers({ calc });

export default calcApp;
