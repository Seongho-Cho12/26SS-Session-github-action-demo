/**
 * 간단한 계산기 모듈
 * CI/CD 실습을 위한 예제 코드입니다.
 */

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('입력값은 숫자여야 합니다.');
  }
  return a - b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('입력값은 숫자여야 합니다.');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('입력값은 숫자여야 합니다.');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('입력값은 숫자여야 합니다.');
  }
  if (b === 0) {
    throw new Error('0으로 나눌 수 없습니다.');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
