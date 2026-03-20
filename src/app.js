const { add, subtract, multiply, divide } = require('./calculator');

/**
 * 계산기 앱 메인 진입점
 * 실제 서비스라면 여기서 서버를 시작하거나 기능을 노출합니다.
 */
function calculate(operation, a, b) {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      throw new Error(`알 수 없는 연산: ${operation}`);
  }
}

// 직접 실행 시 예시 출력
if (require.main === module) {
  console.log('=== 계산기 앱 ===');
  console.log(`10 + 5 = ${calculate('add', 10, 5)}`);
  console.log(`10 - 5 = ${calculate('subtract', 10, 5)}`);
  console.log(`10 * 5 = ${calculate('multiply', 10, 5)}`);
  console.log(`10 / 5 = ${calculate('divide', 10, 5)}`);
}

module.exports = { calculate };
