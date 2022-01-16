function findOutlier(array){
    let counterOods=0, counterEvens=0, evenNum=0, oodNum=0;
    
    for(let i = 0;i < array.length; i++){
      if(array[i] % 2 == 0){
        evenNum = array[i];
        counterEvens++;
      }else{
        oodNum = array[i];
        counterOods++;
      }
    }
  
    if(counterEvens > counterOods){
      return oodNum;
    }else{
      return evenNum;
    }
  }  
  
module.exports= findOutlier;