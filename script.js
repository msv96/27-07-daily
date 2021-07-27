let myNum = [10, 21, 32, 43, 54, 65];

// 1).forEach()
for (let key of myNum) {
    console.log('forEach :', key);
}

// 2).concat()
let num2 = '';
for (let key of myNum) {
    num2 = num2 + key + ' ';
} console.log('cancat :', num2);

// 3).reduce()
let num3 = 0;
for (let key of myNum) {
    num3 = num3 + key;
} console.log('reduce :', num3);

// 4).join()
let num4 = '';
for (let i of myNum) {
    num4 = num4 + i + '-';
} console.log(num4.slice(0,17));

// 5).last()
let num5;
let n = myNum.length - 1;
console.log('last :', myNum[n]);

// 6).filter()
let num6 = [];
for (let i in myNum) {
    if (myNum[i] % 2 === 0) {
        num6.push(myNum[i]);
    }
} console.log('filter :', num6);

// 7).remove()
let num7 = [];
for (let el of myNum) {
    if (el % 2 == 1) {
        num7.push(el);
    }
} console.log('remove :', num7);

// 8).indexOf()
let num8;
for (let i in myNum) {
    if (myNum[i] == 54) {
        num8 = i;
    }
} console.log('indexOf :', num8);

// 9).reverse()
let num9 = [];
for (let i = myNum.length - 1; i >= 0; i--) {
    num9.push(myNum[i]);
} console.log('reverse :', num9);

// 10).map()
let num10 = [];
for (let key of myNum) {
    num10.push(key * key);
} console.log('map :', num10);