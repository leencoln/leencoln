# Leencoln.ts #

Intuitive functional library

## Intro

> 타입스크립트 문법을 활용하여 작성된 라이브러리입니다. underscore, lodash, partial 등 여러 라이브러리를 참고하였으며, 많은 함수가 앞에서 언급한 라이브러리들의 기능과 동일합니다. 알고리즘 훈련페이지인 codewars에서 활용도가 높다고 판단 되어지는 함수들을 본인의 코드 작성 스타일로 재구성하였습니다. _l이 window 객체에 할당되어 _l.itIsMe('abc') --> 'abc' 처럼 사용 가능합니다. 

## Installation

```
cd leencoln
npm install
```

## Link
`index.html`

## Using Stack

>- Typescript 2.7
>- Webpack 3.11
>- Mocha 5.0
>- Chai 4.1

## File Structure
>- 라이브러리의 모든 로직은 src 폴더 내에 leencoln.ts 파일내에 작성되었습니다.
>- build 폴더 내에 leencoln.ts를 자바스크립트 파일로 컴파일한 결과를 확인 할 수 있습니다.(index.html은 build폴더만 참조하고 있습니다)
>- test.js 파일 내에서 작성된 테스트 로직이 확인 가능하며, index.html에서 test case를 통해 라이브러리의 용도가 대략적으로 확인 가능합니다.

## Command

```
npm run compile : src 폴더내에 위치한 타입스크립트 라이브러리를 build폴더내에 자바스크립트로 컴파일합니다.

npm run build : 컴파일된 라이브러리파일과 테스트파일을 웹팩으로 dist 폴더 내에 번들링합니다.

npm run open : mocha chai로 작성된 테스트목록을 브라우져에서 확인합니다.

```
위의 커멘드라인을 순서대로 실행시켜 주세요.

## ISSUE

>- tsconfig default 값은 window object에 대한 접근을 허용하지 않음
>- object 생성시 dot notation syntax를 통한 object 접근 및 활용이 올바르게 작동되지 않음
>- 간헐적으로 Array.prototype.push() 함수가 정상적으로 작동되지 않음(argument type이 추론되지 않을 경우로 추측됨)

## Reference

>- http://underscorejs.org/
>- https://lodash.com/
>- https://www.codewars.com/
>- https://github.com/marpple/partial.js
>- http://book.naver.com/bookdb/book_detail.nhn?bid=12800140
>- underbar.js

## Documnet

