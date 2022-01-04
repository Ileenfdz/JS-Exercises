export function invert(array) {
    var newArray = []; 
  
    for (var i = 0; i < array.length; i++) {
      if(array[i] >= 0){
      newArray.push(-Math.abs(array[i]));
        }else{
          newArray.push(Math.abs(array[i]));
        }
    }
    console.log(newArray);
}