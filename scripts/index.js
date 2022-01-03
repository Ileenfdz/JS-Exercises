import { basicOp, reverseWords } from './exercise.js';
export function app(){
    // console.log("Connected to app");
    basicOp('+', 4, 7)//Result should be = 11
    basicOp('-', 15, 18)//Result should be = -3

    reverseWords("hello world!")//Result should be = "world! hello"
    reverseWords("yoda doesn't speak like this")//Result should be = "this like speak doesn't yoda"
}
app();