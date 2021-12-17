export function splitStrings(str) {
    let index = 0;
    let result = [];
    
    if(str.length % 2 !== 0){
      str += "_";
    }
    while(index < str.length){
      result.push(str[index] + str[index + 1]);
      index += 2;
    }
    
    console.log(result);
    return result;
}