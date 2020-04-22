export const PLUS = '+';
export const MINUS = '-';
export const DIVIDE = '/';
export const MULTIPLY = '*';

interface PlusAction {
  type: typeof PLUS;
  payload: number;
}

export function plus(payload: number): PlusAction {
  return {
    type: PLUS,
    payload,
  };
}

interface MinusAction {
  type: typeof MINUS;
  payload: number;
}

export function minus(payload: number): MinusAction {
  return {
    type: MINUS,
    payload,
  };
}

interface DivideAction {
  type: typeof DIVIDE;
  payload: number;
}

export function divide(payload: number): DivideAction {
  return {
    type: DIVIDE,
    payload,
  };
}

interface MultiplyAction {
  type: typeof MULTIPLY;
  payload: number;
}

export function multiply(payload: number): MultiplyAction {
  return {
    type: MULTIPLY,
    payload,
  };
}

export type CalcAction = PlusAction | MinusAction | DivideAction | MultiplyAction;
