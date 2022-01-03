import {splitStrings} from './exercise1.js';
import {findOutlier} from './exercise2.js';
import {finalGrade} from './exercise3.js';
import {uniTotal, elevatorDistance, addBinary} from './exercise4.js';

export function app1(){
    splitStrings()
}
app1();

export function app2(){
    console.log("Connected to app");
    findOutlier([0, 1, 2]);
    findOutlier([1, 2, 3]);
    findOutlier([2,6,8,10,3]);
    findOutlier([0,0,3,0,0]);
    findOutlier([1,1,0,1,1]);
}
app2();

export function app3(){
    console.log("Connected to app");
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

