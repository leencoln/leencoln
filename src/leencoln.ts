(function() {

(<any>window)._l = {

//basic

// leencoln: console.log("it's world best intuitive functional library")
// ,

itIsMe: (val: any): any => val
,

isItMe: (val: any): boolean => !!val
,

isItNotMe: (val: any): boolean => !val
,

noop: (val: any): undefined => undefined
,



//number

random: (num1: number, num2: number) => Math.floor(Math.random() * (num2 - num1 + 1)) + num1
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

    this.deepEqual(deck, resArr) ? resArr : this.shuffle(resArr);

    return resArr;
}
,

sortNumber: (numArr: number[]) => numArr.sort((num1: number, num2:number): number => num1 - num2)
,

unique: (arr: any[]) => (<any>Array).from(new Set(arr))
,


//object

// getKeyByValue: (obj: object, val: any): string => Object.keys(obj).find((key: string) => this.deepEqual((<any>obj)[key], val))
// ,

values: (obj: object): any[] => (<any>Object).values(obj)
,


//function



//etc..

deepEqual: (val1: any, val2: any): boolean => JSON.stringify(val1) === JSON.stringify(val2)


}
}());

export default (<any>window)._l