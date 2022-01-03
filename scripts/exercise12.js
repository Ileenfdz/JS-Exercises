export function squareSum(numbers){

  var total = 0;
  
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i] * numbers[i]; 
    }
  
  console.log(total);
}

export function noSpace(x){
  console.log(x.split(' ').join(''));
}