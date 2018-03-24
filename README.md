# Leencoln.ts #

Intuitive functional library

## Intro

> 타입스크립트로 작성된 함수형 라이브러리입니다. underscore, lodash, partial 등 여러 라이브러리를 참고하였으며, 많은 함수가 앞에서 언급한 라이브러리들의 기능과 동일합니다. 알고리즘 훈련페이지인 codewars에서 활용도가 높다고 판단 되어지는 함수들을 본인의 코드 작성 스타일로 재구성하였습니다. 현재는 20여개의 함수로 구성되어 있습니다. 

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

## Documentation


### Number

#### _l.random()()
> 최소값과 최대값을 받아 범위내에서 임의의 정수값을 반환합니다.

```
_l.random(1)(10) // 7

let min10randomValue = _l.random(10);
min10randomValue(20) // 13
```

#### _l.nDecimalPoint()()()
> n번째의 소수점아래에서 입력받은 로직을 실행하여 결과를 반환합니다.

```
_l.nDecimalPoint('ceil')(100.12345)(3) // 100.124
_l.nDecimalPoint('round')(100.12345)(3) // 100.123
_l.nDecimalPoint('floor)(100.34567)(3) // 100.345
_l.nDecimalPoint('trunc)(-100.34567)(3) // -100.345

let nDecimalCeilPoint = _l.nDecimalPoint('ceil');
nDecimalCeilPoint(100.12345)(3) // 100.123
```


### String

#### _l.camelCase()
> 입력받은 문자열을 camelCase 형태로 반환합니다.

```
_l.camelCase('ABC-DEF') // AbcDef
_l.camelCase('__abc def--') // AbcDef
```

#### _l.capitalize()
> 문자열의 첫 번재 값을 대문자로 하는 값을 반환합니다.

```
_l.capitalize('abcdef') // Abcdef
_l.capitalize('ABCDEF') // Abcdef
```

#### _l.kebabCase()
> 입력받은 문자열을 kebabCase 형태로 반환합니다.

```
_l.kebabCase('abcDefGhi') // abc-def-ghi
_l.kebabCase('abc_Def Ghi') // abc-def-ghi
```

#### _l.repeat()()
> 입력받은 문자열을 숫자 받은 반복하여 반환합니다.

```
_l.repeat('abc')(3) // 'abcabcabc'
```

#### _l.toLower()
> 입력받은 문자열을 소문자로 반환합니다.

```
_l.toLower('ABCDEF') // 'abcdef'
_l.toLower('_Abc Def--GHI---) // 'abcdefghi'
```

#### _l.toUpper()
> 입력받은 문자열을 대문자로 반환합니다.

```
_l.toUpper('abcdef') // 'ABCDEF'
_l.toUpper('_Abc Def--ghi---') // 'ABCDEFGHI'
```


### Array

#### _l.compact()
> 배열의 값중 truthy 한 값들만 추출하여 반환합니다.

```
let array = [1, 0, -1, 'a', true, false, null, undefined, [], [4, 5, 6], {}, {d: 5, e: 6}]

_l.compact(array) // [1, -1, 'a', true, [], [4, 5, 6], {}, {d: 5, e: 6}]
```

#### _l.contains()
> 배열 값중 해당값의 유무 여부를 판단합니다.

```
_l.contains([1,2,3], 1) // true
_l.contains([1,2,3], 4) // false
```

#### _l.deepSort() // 코드 수정이 필요합니다!
> json 형태같은 배열내에 object들의 집합이 동일한 키값의 할당되어 있는 숫자값으로 sort됩니다.

```
let people = [
    {name: 'Jone', age: 24},
    {name: 'Simons', age: 18},
    {name: 'Fizz', age: 19}
]

_l.deepSort(people, age) //

[
    {name: 'Simons', age: 18},
    {name: 'Fizz', age: 19},
    {name: 'Jone, age: 24}
]
```

#### _l.every()
> 배열의 값들중 함수의 조건을 하나라도 만족하지 못하면 false 모두 만족하면 true를 반환합니다.

```
_l.every([1,3,5,7,9], ((num) => num % 2 === 1 ? true : false)) // true
_l.every([1,3,6,7,9], ((num) => num % 2 === 1 ? true : false)) // false
```

#### _l.reduceReverse()
> 기존의 reduce의 순서를 배열 끝부터 거꾸로 실행합니다.

```
_l.reduceReverse([1,2,3,4,5], ((num1, num2) => num1 - num2), 6) // (((((6 - 5) - 4) - 3) - 2) - 1)
```

#### _l.reject()
> 입력받은 함수의 조건에 맞을 경우 거부됩니다.

```
_l.reject([1,2,3,4,5], ((num) => num % 2 === 1 ? true : false)) // [2,4]
```

#### _l.sample()
> 배열중 임의의 n개를 반환합니다.

```
_l.sample([1,2,3,4,5], 3) // [1,3,4]
```

#### _l.shuffle()
> 배열의 순서를 임의로 변경하여 반환합니다(동일한 순서를 반환하지 않습니다)

```
_l.shuffle([1,2,3,4]) // [4,2,3,1]
```

#### _l.some()
> 배열의 값들중 하나라도 함수의 조건을 만족할 경우 true를 반환합니다.

```
_l.some([1,3,6,7,9], ((num) => num % 2 === 1 ? true : false)) // true
```

#### _l.sortNumber()
> 숫자들로 이루어진 배열을 내림차순 반환합니다.

```
_.l.sortNumber([4,2,5,3,1]) // [1,2,3,4,5]
```

#### _l.sortNumberR()
> 숫자들로 이루어진 배열을 오름차순 반환합니다.

```
_l.sortNumberR([4,2,5,3,1]) // [5,4,3,2,1]
```

#### _l.unique()
> 배열중 중복값을 제외한 값들로만 반환합니다.

```
_l.unique([4,1,1,2,2,2,3,3,3,1]) // [4,1,2,3]
_l.unique(['a', 'a', 'b', 'b', 'b', 'c', 'c' ,'d']) // ['a', 'b', 'c', 'd']
```

#### _l.withoutValue()
> 배열중 특정값을 제외한 배열을 반환합니다.

```
_l.withoutValue([1,2,3,4,5], 3) // [1,2,4,5]
```


### Object

#### _l.getKeyByValue()
> value값을 통하여 key값의 배열을 반환합니다.

```
let obj = {a: 'x', b: 'y', c:'z', d:'x'};

_l.getKeyByValue('y', obj) // ['b']
_l.getKeyByValue('x', obj) // ['a', 'd']
```

#### _l.values()
> object의 value 값들을 배열로 반환합니다.

```
let obj = {a:'x', b:'y', c:'z'}

_l.values(obj) // ['x', 'y', 'z']
```


### etc..

#### _l.deepEqual()()
> 두 값의 일치 여부를 확인합니다.

```
let arr1 = [1,2,3]
let arr2 = [1,2,3]

arr1 === arr2 // false
_l.deepEqual(arr1)(arr2) // true
```

#### _l.howOldAmI()()
> 생년월일을 통해 나이를 구합니다(한국의 계산방식과 외국의 계산방식 분류)

```
_l.howOldAmI('korea')(990101) // 20
_l.howOldAmI('america')(990101) // 19
```

#### _l.whatTimeIsItNow()
> 현재 시간을 한국식 표기법으로 제공합니다.

```
_l.whatTimeIsItNow() // ex) '2018년 12월 25일 14시 30분 45초 금요일'
```