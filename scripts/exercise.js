export function positiveSum(arr) {
    let result = 0;
    for(let i = 0;i < arr.length;i++){
      if(arr[i] >= 0){
        result += arr[i];
      }
    }
    console.log(result);
}

export function twiceAsOld(dadYearsOld, sonYearsOld) {
    console.log(Math.abs(dadYearsOld - 2 * sonYearsOld));
}

export function hero(bullets, dragons){
  console.log(bullets >= 2 * dragons?true:false);
}