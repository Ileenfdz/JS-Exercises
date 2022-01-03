import {splitStrings} from './exercise1.js';
import {findOutlier} from './exercise2.js';
import {finalGrade} from './exercise3.js';
import {uniTotal, elevatorDistance, addBinary} from './exercise4.js';
import {findOdd} from './exercise5.js';
import {saleHotdogs} from './exercise6.js';
import { paperwork } from './exercise7.js';
import { opposite } from './exercise8.js';
import { positiveSum, twiceAsOld,hero } from './exercise9.js';
import { makeNegative } from './exercise10.js';
import { numberToString, removeChar, findSmallestInt, summation } from './exercise11.js';
import { squareSum, noSpace} from './exercise12.js';
import { litres } from './exercise13.js';
import { century } from './exercise14.js';
import { isDivisible, greet, digitize, maps } from './exercise15.js';
import { shortcut } from './exercise16.js';
import { shortcut } from './exercise17.js';
import { basicOp, reverseWords } from './exercise18.js';


export function app1(){
    // console.log("Connected to app");
    splitStrings("abcdef");
    splitStrings("abcdefg");
    splitStrings("");
}
app1();

export function app2(){
    // console.log("Connected to app");
    findOutlier([0, 1, 2]);
    findOutlier([1, 2, 3]);
    findOutlier([2,6,8,10,3]);
    findOutlier([0,0,3,0,0]);
    findOutlier([1,1,0,1,1]);
}
app2();

export function app3(){
    // console.log("Connected to app");
    finalGrade(100, 12);
    finalGrade(85, 5);
}
app3();

export function app4(){
    // console.log("Connected to app");
    uniTotal("a"); //Result should be = 97
    uniTotal("b"); //Result should be = 98
    uniTotal("c"); //Result should be = 99
    uniTotal("d"); //Result should be = 100
    uniTotal("e"); //Result should be = 101

    elevatorDistance([5,2,8]); //Result should be = 9
    elevatorDistance([1,2,3]); //Result should be = 2
    elevatorDistance([7,1,7,1]); //Result should be = 18

    addBinary(1,1); //Result should be = 10
    addBinary(5,9); //Result should be = 1110
}
app4();

export function app5(){
    // console.log("Connected to app");
    findOdd([1,1,2,3,4,2,3,4,5,6,6,7,6,6,7]); //Result should be = 5
}
app5();

export function app6(){
    // console.log("Connected to app");
    saleHotdogs(1);//Result should be = 100
    saleHotdogs(4);//Result should be = 400
    saleHotdogs(5);//Result should be = 475
    saleHotdogs(9);//Result should be = 855
    saleHotdogs(10);//Result should be = 900
    saleHotdogs(100);//Result should be = 9000
}
app6();

export function app7(){
    // console.log("Connected to app");
    paperwork(5,5)//Result should be = 25
    paperwork(0,5)//Result should be = 0
    paperwork(5,0)//Result should be = 0
    paperwork(2,5)//Result should be = 10
}
app7();

export function app8(){
    // console.log("Connected to app");
    opposite(1)//Result should be = -1
    opposite(14)//Result should be = -14
    opposite(50)//Result should be = -50
}
app8();

export function app9(){
    // console.log("Connected to app");
    positiveSum([1,2,3,4,5])//Result should be = 15
    positiveSum([1,-2,3,4,5])//Result should be = 13
    positiveSum([-1,2,3,4,-5])//Result should be = 9

    twiceAsOld(36,7)//Result should be = 22
    twiceAsOld(55,30)//Result should be = 5
    twiceAsOld(42,21)//Result should be = 0

    hero(10,5)//Result should be = true
    hero(8,2)//Result should be = true
    hero(7,5)//Result should be = false
}
app9();

export function app10(){
    // console.log("Connected to app");
    makeNegative(42)//Result should be = -42
    makeNegative(-5)//Result should be = -5
    makeNegative(0)//Result should be = 0
}
app10();

export function app11(){
    // console.log("Connected to app");
    numberToString(42)//Result should be = "42"
    numberToString(5)//Result should be = "5"
    numberToString(20)//Result should be = "20"

    removeChar("hello")//Result should be = "ell"
    removeChar("Goodbye")//Result should be = "oodby"
    removeChar("Happy")//Result should be = "app"

    findSmallestInt([20,3,500,2,1])//Result should be = "1"
    findSmallestInt([20,10,62,9,12])//Result should be = "9"
    findSmallestInt([21,31,5,23,14])//Result should be = "5"

    summation(20)//Result should be = "210"
    summation(2)//Result should be = "3"
    summation(8)//Result should be = "36"
}
app11();


export function app12(){
    // console.log("Connected to app");
    squareSum([1,2])//Result should be = "5"
    squareSum([0,3,4,5])//Result should be = "50"
    
    noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')//Result should be = '8j8mBliB8gimjB8B8jlB'
    noSpace('8aaaaa dddd r     ')//Result should be = '8aaaaaddddr'
}
app12();

export function app13(){
    // console.log("Connected to app");
    litres(2)//Result should be = "1"
    litres(12.3)//Result should be = "6"
}
app13();

export function app14(){
    // console.log("Connected to app");
    century(1780)//Result should be = "18"
    century(1970)//Result should be = "20"
}
app14();

export function app15(){
    // console.log("Connected to app");
    isDivisible(3, 1, 3)//Result should be = true
    isDivisible(12, 2, 6)//Result should be = true
    isDivisible(100, 5, 3)//Result should be = false

    greet("Riven")//Result should be = "Hello, Riven how are you doing today?"

    digitize(35231)//Result should be = "[1,3,2,5,3]"

    maps([1, 2, 3])//Result should be = "[2, 4, 6]"
}
app15();

export function app16(){
    // console.log("Connected to app");
    shortcut('hello')//Result should be = 'hll'
    shortcut('how are you today?')//Result should be = 'hw r y tdy?
}
app16();

export function app17(){
    // console.log("Connected to app");
    shortcut('hello')//Result should be = 'hll'
    shortcut('how are you today?')//Result should be = 'hw r y tdy?
}
app17();

export function app18(){
    // console.log("Connected to app");
    basicOp('+', 4, 7)//Result should be = 11
    basicOp('-', 15, 18)//Result should be = -3

    reverseWords("hello world!")//Result should be = "world! hello"
    reverseWords("yoda doesn't speak like this")//Result should be = "this like speak doesn't yoda"
}
app18();