# GitHub Actions CI/CD 실습 프로젝트

GitHub Actions를 이용한 CI/CD 파이프라인 실습용 프로젝트입니다.

## 빠른 시작

```bash
npm install
npm test       # 테스트 실행
npm run lint   # 린트 실행
```

## 파일 구조

```
.
├── .github/workflows/
│   ├── ci.yml          # CI: 자동 테스트 & 린트
│   ├── cd.yml          # CD: 자동 배포
│   └── pr-check.yml    # PR 형식 검사
├── src/
│   ├── calculator.js   # 계산기 모듈
│   └── app.js          # 앱 진입점
├── tests/
│   └── calculator.test.js  # 테스트 파일
└── 실습_가이드.md       # 단계별 실습 안내
```

## 실습 진행

**[실습_가이드.md](./실습_가이드.md)** 파일을 참고하세요.

4가지 시나리오를 통해 GitHub Actions의 핵심 기능을 체험합니다:

1. **CI 자동 실행** - push 하나로 자동 테스트
2. **버그 자동 감지** - 테스트 실패 시 머지 차단
3. **CD 자동 배포** - 머지 후 자동 배포 파이프라인
4. **Branch Protection** - 품질 기준 미달 코드 차단
