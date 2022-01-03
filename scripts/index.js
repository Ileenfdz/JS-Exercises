import {splitStrings} from './exercise1.js';
import {findOutlier} from './exercise2.js';
import {finalGrade} from './exercise3.js';

export function app1(){
    splitStrings()
}

export function app2(){
    console.log("Connected to app");
    findOutlier([0, 1, 2]);
    findOutlier([1, 2, 3]);
    findOutlier([2,6,8,10,3]);
    findOutlier([0,0,3,0,0]);
    findOutlier([1,1,0,1,1]);
}

export function app3(){
    console.log("Connected to app");
    finalGrade(100, 12);
    finalGrade(85, 5);
}

app1();
app2();
app3();