/* eslint-disable linebreak-style */
import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate', () => {
  test('calcultate with button AC', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('calcultate with button =', () => {
    const obj = {
      total: '10',
      next: '0',
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: null,
    });
  });

  test('calcultate with button . ', () => {
    const obj = {
      total: null,
      next: '4',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '4.',
      operation: null,
    });
  });
});
