export function findOutlier(integers){
  let counterOods=0, counterEvens=0, oodNum=0, evenNum=0;

  for(let i = 0;i < integers.length; i++){
    const num = integers[i];

    if(num % 2 == 0){
      evenNum = num;
      counterEvens++;
    }else{
      oodNum = num;
      counterOods++;
    }
  }
    if(counterEvens>counterOods){
      console.log(oodNum);
    }else{
      console.log(evenNum);
    }
}
