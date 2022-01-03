import { squareSum, noSpace} from './exercise12.js';
export function app12(){
    // console.log("Connected to app");
    squareSum([1,2])//Result should be = "5"
    squareSum([0,3,4,5])//Result should be = "50"
    
    noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')//Result should be = '8j8mBliB8gimjB8B8jlB'
    noSpace('8aaaaa dddd r     ')//Result should be = '8aaaaaddddr'
}
app();