import { squareSum} from './exercise.js';
export function app(){
    // console.log("Connected to app");
    squareSum([1,2])//Result should be = "5"
    squareSum([0,3,4,5])//Result should be = "50"
    squareSum([0])//Result should be = "0"
}
app();