(function() {

(<any>window)._l = {

//basic

// leencoln: console.log("it's world best intuitive functional library")
// ,

itIsMe : (val: any): any => val
,

itIsNotMe: (val: any): any => !val
,

noop: (val: any): undefined => undefined
,



//number






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


//object



//function



//etc..

deepEqual: (val1: any, val2: any): boolean => JSON.stringify(val1) === JSON.stringify(val2)


}
}());

export default (<any>window)._l