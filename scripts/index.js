import {findOutlier} from './exercise2.js';

export function app2(){
    console.log("Connected to app");
    findOutlier([0, 1, 2]);
    findOutlier([1, 2, 3]);
    findOutlier([2,6,8,10,3]);
    findOutlier([0,0,3,0,0]);
    findOutlier([1,1,0,1,1]);
}

app();