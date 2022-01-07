export function makeUpperCase(str) {
    console.log(str.toUpperCase());
}

export function fakeBin(x){
    let fakeBinary = "";
    for(let i = 0;i < x.length;i++){
      if(x[i] < 5){
        fakeBinary += 0;
      }else{
        fakeBinary += 1;
      }
    }
    console.log(fakeBinary);
}