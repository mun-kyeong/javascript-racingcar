/* eslint-disable */
import {
  validateLimitLength,
  validatePositiveLength,
  validatePositiveNumber,
  validateNumeric,
  validateInteger,
} from '../src/view/validators/validator.js';

describe('validate 테스트', () => {
  test.each([
    ['aaaa', true],
    ['aaaaa', true],
    ['aaaaaa', false],
    ['aaaaaaaaaa', false],
  ])('차 이름의 길이가 5자 이하인지 확인한다.', (raceCarName, result) => {
    if (result) {
      expect(() => validateLimitLength(raceCarName)).not.toThrow();
    } else {
      expect(() => validateLimitLength(raceCarName)).toThrow();
    }
  });

  test('차 이름이 빈값이 아닌지 확인한다', () => {
    expect(() => validatePositiveLength('')).toThrow();
    expect(() => validatePositiveLength('aa')).not.toThrow();
  });

  test('실행횟수가 양수인지 확인한다', () => {
    expect(() => validatePositiveNumber(-1)).toThrow();
    expect(() => validatePositiveNumber(1)).not.toThrow();
  });

  test('실행횟수가 숫자인지 확인한다', () => {
    expect(() => validateNumeric(2)).not.toThrow();
    expect(() => validateNumeric(NaN)).toThrow();
  });

  test('실행횟수가 정수수인지 확인한다', () => {
    expect(() => validateInteger(1.1)).toThrow();
    expect(() => validateInteger(2)).not.toThrow();
  });
});
