/**
 * [실습용 버그 파일]
 *
 * 이 파일은 실습 시나리오 2에서 사용합니다.
 * 아래 calculator.js의 내용을 이 버전으로 교체하고,
 * CI가 자동으로 버그를 잡아내는 것을 확인하세요.
 *
 * 버그: subtract 함수가 뺄셈이 아닌 덧셈을 수행합니다!
 */

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('입력값은 숫자여야 합니다.');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('입력값은 숫자여야 합니다.');
  }
  return a + b;  // 🐛 버그: - 가 아닌 + 입니다!
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
