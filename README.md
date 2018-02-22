# Leencoln.ts #

Intuitive functional library

## Intro

> 웹 개발시 자주 사용하는 함수로직들을 모아 만든 라이브러리입니다. underscore와 lodash를 참고 하였으며, 알고리즘 훈련페이지인 codewars등에서 활용도가 높다고 판단 되어지는 함수들을 모아 제작하였습니다. 테스트로직에서 타입체크등의 케이스를 줄이고, 최신 문법을 효과적으로 제작하기 위해 타입스크립트로 제작되었으며 컴파일된 자바스크립트 버전도 이용이 가능합니다.

## Installation

```
cd leencoln
npm install
```

## Link
npm run leencoln" -> `index.html`"

## Using Stack

>- Typescript 2.7
>- Webpack 3.11
>- Mocha 5.0
>- Chai 4.1

## File Structure
>- src 폴더 내에 leencoln.ts 파일내에서 라이브러리 로직이 작성되었습니다.
>- build 폴더 내에 leencoln.ts를 자바스크립트 파일로 컴파일한 결과를 확인 할 수 있습니다.
>- main.js 파일 내에서 작성된 테스트 로직과 라이브러리 파일을 바벨로 트랜스파일링 한 후, 번들링하여 dist 폴더 내에 작성되었습니다.
>- 최종 결과물은 index.html 에서 확인 가능하고 TDD 방식으로 제작되었습니다.

## Command

```
npm run compile : src 폴더내에 위치한 타입스크립트 라이브러리를 build폴더내에 자바스크립트로 컴파일합니다.

npm run build : 컴파일된 라이브러리파일과 테스트파일을 웹팩으로 dist 폴더 내에 번들링합니다.

npm run open : mocha, chai로 작성된 테스트목록을 브라우져에서 확인합니다.

npm run watch : 실시간으로 컴파일후 번들링한 결과를 보여주여 새로운 로직 작성 중에 사용합니다.

npm run leencoln : 테스트 파일을 실행하여 라이브러리에 대한 개요를 알 수 있습니다.

npm run start : npm run leencoln과 동일
```

## Reference

>- http://underscorejs.org/
>- https://lodash.com/
>- https://www.codewars.com/