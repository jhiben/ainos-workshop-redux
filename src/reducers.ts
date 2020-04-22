import { CalcAction } from './actions';
import { combineReducers } from 'redux';

export interface CalcState {
  computed: number;
}

function calc(state: CalcState = { computed: 0 }, action: CalcAction): CalcState {
  switch (action.type) {
    case '+':
      return plus(state, action.payload);
    case '-':
      return minus(state, action.payload);
    case '*':
      return multiply(state, action.payload);
    case '/':
      return divide(state, action.payload);
    default:
      return state;
  }
}

function plus({ computed, ...state }: CalcState, value: number): CalcState {
  return { ...state, computed: computed + value };
}

function minus({ computed, ...state }: CalcState, value: number): CalcState {
  return { ...state, computed: computed - value };
}

function divide({ computed, ...state }: CalcState, value: number): CalcState {
  return { ...state, computed: computed / value };
}

function multiply({ computed, ...state }: CalcState, value: number): CalcState {
  return { ...state, computed: computed * value };
}

const calcApp = combineReducers({ calc });

export default calcApp;
