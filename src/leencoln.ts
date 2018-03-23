(function() {

(<any>window)._l = {

//basic

leencoln: console.log("it's world best intuitive functional library")
,
itIsMe: (val: any): any => val
,
isItMe: (val: any): boolean => !!val
,
isItNotMe: (val: any): boolean => !val
,
noop: (val: any): undefined => undefined
,
//number
random: (minNum: number) => (maxNum: number) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
,

nDecimalPoint: function(method: string) {
    let methods: string[] = ["ceil", "round", "floor", "trunc"];
    let correctMethod: boolean = methods.includes(method);

    if(correctMethod) {
        return function(value: number) {
            return function(n: number): number {
                let decuple: number = Math.pow(10, n);
                return Math[method](value * decuple) / decuple;
            }
        }
    } else {
        return function(value: number) {
            return function(n : number): string {
                return "It is not correct method, Please enter the correct method([ceil, round, floor, trunc])";
            }
        }
    }
}
,

//string
camelCase: function(str: string): string {
    let strArr: string[] = str.toLowerCase().split("");
    let length: number = strArr.length;

    for(let i = 0; i < length - 1; i++) {
        if((strArr[i].charCodeAt(0) === 95 || strArr[i].charCodeAt(0) === 45 || strArr[i].charCodeAt(0) === 32) && (strArr[i + 1].charCodeAt(0) !== 95 || strArr[i + 1].charCodeAt(0) !== 45 || strArr[i + 1].charCodeAt(0) !== 32)) {
            strArr[i + 1] = str[i + 1].toUpperCase();
        }
    }

    for(let i = length - 1; i >= 0; i--) {
        if(strArr[i].charCodeAt(0) === 95 || strArr[i].charCodeAt(0) === 45 || strArr[i].charCodeAt(0) === 32) {
            strArr.splice(i, 1);
        }
    }

    strArr[0] = strArr[0].toUpperCase();
    strArr[strArr.length - 1] = strArr[strArr.length - 1].toLowerCase();
    let result: string = strArr.join("");
    return result;
}
,
capitalize: function(str: string): string {
    let result: string = this.camelCase(str)[0] + this.camelCase(str).slice(1, str.length).toLowerCase();
    return result;
}
,
kebabCase: function(str: string): string {
    let camelCaseArr: string[] = this.camelCase(str).split("");
    let length: number = camelCaseArr.length;
    
    for(let i = 1; i < length; i++) {
        let uniCodeNum: number = camelCaseArr[i].charCodeAt(0)
        if(uniCodeNum >= 65 && uniCodeNum <= 90) {
            camelCaseArr[i] = `-${camelCaseArr[i].toLowerCase()}`;
        }
    }

    let result: string = camelCaseArr.join("");
    return result;
}
,
repeat: function(str: string, n: number): string {
    let result: string = "";

    for(let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
,
toLower: function(str: string): string {
    return this.camelCase(str).toLowerCase();
}
,
toUpper: function(str: string): string {
    return this.camelCase(str).toUpperCase();
}
,
//array
compact: function(collection: any[]) {
    let result: any[] = []
    collection.forEach(function(element) {
        if(element) {
            result.push(element)
        }
    })
    return result;
}
,
contains: function(collection: (number | string)[], value) {
    collection.forEach(function(element) {
        if(element === value) {
            return true;
        }
    })
    return false;
}
,
// deepSort: function(collection, key) {
//     let result = [];

//     let length: number = collection.length;
//     let keys: number[] = [];
//     collection.forEach((element: object) => keys.push(element[key]));
//     keys = this.sortNumber(keys);
    
//     keys.forEach(function(element: number) {
//         for(let i = 0; i < length; i++) {
//             if(collection[i][key] === element) {
//                 result.push(collection[i]);
//             }
//         }
//     })
    
//     result = this.unique(result);
//     return result;
// }
// ,
every: function(collection, predicate): boolean {
    for(let i = 0; i < collection.length; i++) {
        if(!predicate(collection[i])) {
            return false;
        }
    }
    return true;
}
,
// filter: function(collection: (number | string)[], predicate) {
//     let result = [];
//     for(let i = 0; i < collection.length; i++) {
//         if(predicate(collection[i])) {
//             result.push(collection[i]);
//         }
//     }
//     return result;
// }
// ,
reduceReverse: function(collection, callback, initialValue) {
    //collection -> number[], string[]
    //initialValue -> number, string
    collection = collection.reverse();
    let firstValue = initialValue ? initialValue : collection[0];
    if(initialValue) {
        let firstValue = initialValue;
    } else {
        let firstValue = collection.splice(0, 1); // collection.length -> collection.length - 1
    }

    let accumulator = callback(firstValue, collection[0]);
    
    for(let i = 1; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i])
    }

    let result = accumulator ? accumulator : undefined;

    return result;
}
,
reject: function(collection: number[], predicate) {
    let result: number[] = [];
    collection.forEach((element: number) => !predicate(element) ? result.push(element) : false)
    return result;
}
,
sample: function(collection, n: number) {
    let length: number = collection.length;
    if(!n) {
        let i: number = this.random(0)(length);
        return collection[i];
    }

    let result: any[] = [];

    while(!(result.length === n)) {
        let i = this.random(0)(length);
        result.push(collection.splice(i, 1));
        length = collection.length;
    }

    return result;
}
,
shuffle: function(deck: any[]) {
   
    let len: number = deck.length;
    let resArr : any[] = deck.slice();

    deck.forEach(
        function(card: any, idx: number): void {
            let ranIdx: number = Math.floor(Math.random() * len);
            let temp : any = resArr[idx];
            resArr[idx] = resArr[ranIdx];
            resArr[ranIdx] = temp;
        }
    )

    this.deepEqual(deck)(resArr) ? this.shuffle(resArr) : undefined; // do not return original deck

    return resArr;
}
,
some: function(collection, predicate): boolean {
    let result: boolean = true;
    collection.forEach(function(element) {
        if(predicate(element)) {
            result = true;
        } 
    })

    return result ? result : false;
}
,
sortNumber: (numArr: number[]): number[] => numArr.sort((num1: number, num2:number): number => num1 - num2)
,
sortNumberR: function(numArr: number[]): number[] {
    return this.sortNumber(numArr).reverse();
}
,
unique: (arr: any[]) => (<any>Array).from(new Set(arr))
,
withoutValue: function(collection, value) {
    let length: number = collection.length;
    for(let i = length; i > 0; i--) {
        if(collection[i - 1] === value) {
            collection.splice(i, 1);
        }
    }

    return collection;
}
,
//object
getKeyByValue: function(requestedValue: any, obj: object): string[] {
    
    let resArr: string[] = [];

    Object.keys(obj).forEach((key: string, idx: number) => JSON.stringify(obj[key]) === JSON.stringify(requestedValue) ? resArr.push(key) : undefined)

    return resArr;
}
,
values: (obj: object): any[] => (<any>Object).values(obj)
,


//function
//etc..

deepEqual: (val1: any) => (val2: any): boolean => JSON.stringify(val1) === JSON.stringify(val2)
,
howOldAmI: function(country: string) {
    return function(birthday: number) {

        let today = new Date();
        let nowYear: number = today.getFullYear();
        let oldCalculrator: number = Number((nowYear + "").slice(2, 4)) - Number((birthday + "").slice(0, 2));
        let old: number =  (oldCalculrator >= 0) ? oldCalculrator : (oldCalculrator + 100);
        
        if(country === "korea" || country === "korean") {
            let koreanOld: number = old + 1;
            return koreanOld;

        } else if(country === "america" || country === "american" || country === "USA") {
            let monthCalculrator: number = today.getMonth() - Number((birthday + "").slice(2, 4));
            
            if(monthCalculrator < 0) {
                let americanOld: number = old;
                return americanOld;
            
            } else if(monthCalculrator > 0) {
                let americanOld: number = old + 1;
                return americanOld;
            
            } else if(!monthCalculrator) {
                let dateCalculrator: number = today.getDate() - Number((birthday + "").slice(4, 6));
                
                if(dateCalculrator >= 0) {
                    let americanOld: number = old + 1;
                    return americanOld;
                
                } else if(dateCalculrator < 0) {
                    let americanOld: number = old;
                    return americanOld;
                }
            }
        }
    }
}
, 
whatTimeIsItNow: function(): string {
    let nowTime: string = Date(); // 'Mon Mar 23 2018 15:55:26 GMT+0900 (대한민국 표준시)'

    let days: object = {
        1: '월요일',
        2: '화요일',
        3: '수요일',
        4: '목요일',
        5: '금요일',
        6: '토요일',
        7: '일요일'
    }
    let today = new Date();
    let year: number = today.getFullYear();
    let month: number = today.getMonth();
    let date: number = today.getDate();
    let day: string = days[today.getDay()];
    let hours: number = today.getHours();
    let minutes: number = today.getMinutes();
    let seconds: number = today.getSeconds();

    let result: string = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초 ${day}`;
    return result;
}

}

}());

export default (<any>window)._l