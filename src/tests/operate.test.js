/* eslint-disable linebreak-style */
import operate from '../logic/operate';

describe('addition', () => {
  test('add 3 to 1', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });

  test('add -1 to 0', () => {
    expect(operate(0, -1, '+')).toBe('-1');
  });

  test('add -1 to -1', () => {
    expect(operate(-1, -1, '+')).toBe('-2');
  });
});

describe('subtraction', () => {
  test('subtract 3 from 1', () => {
    expect(operate(1, 3, '-')).toBe('-2');
  });

  test('subtract -1 from 0', () => {
    expect(operate(0, -1, '-')).toBe('1');
  });

  test('subtract -1 from -1', () => {
    expect(operate(-1, -1, '-')).toBe('0');
  });
});

describe('multiplication', () => {
  test('multiply 3 by 1', () => {
    expect(operate(1, 3, 'x')).toBe('3');
  });

  test('multiply -1 by 0', () => {
    expect(operate(0, -1, 'x')).toBe('0');
  });

  test('multiply -1 by -1', () => {
    expect(operate(-1, -1, 'x')).toBe('1');
  });
});

describe('division', () => {
  test('divide 3 by 1', () => {
    expect(operate(3, 1, '÷')).toBe('3');
  });

  test('divide -1 by 0', () => {
    expect(operate(-1, 0, '÷')).toBe('Can\'t divide by 0.');
  });

  test('divide -1 by -1', () => {
    expect(operate(-1, -1, '÷')).toBe('1');
  });
});
