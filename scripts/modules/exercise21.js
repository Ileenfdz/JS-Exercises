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

export function bmi(weight, height) {
    let bmi = weight/(height*height);
    console.log(bmi <= 18.5?"Underweight":bmi <= 25.0?"Normal":bmi <= 30.0?"Overweight":"Obese");
}

export function findAverage(array) {
  let total = 0;
  array.forEach(x => total += x)
  console.log(total > 0?total / array.length:total);
}

export function arrayPlusArray(arr1, arr2) {
  let reducedFirstArray = arr1.reduce((a, b) => a + b);
  let reducedSecondArray = arr2.reduce((x, y) => x + y);
  console.log(reducedFirstArray + reducedSecondArray);
}

export function check(a, x) {
  console.log(a.find(i => i == x)?true:false);
}