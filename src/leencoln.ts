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
//array
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
sortNumber: (numArr: number[]) => numArr.sort((num1: number, num2:number): number => num1 - num2)
,
unique: (arr: any[]) => (<any>Array).from(new Set(arr))
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

}

}());

export default (<any>window)._l