function splitStrings(str) {

  let index = 0;
  let result = [];
    
  if(str.length % 2 !== 0){
    str += "_";
  }

  while(index < str.length){
    result.push(str[index] + str[index + 1]);
    index += 2;
  }
  return result;
}

module.exports= splitStrings;