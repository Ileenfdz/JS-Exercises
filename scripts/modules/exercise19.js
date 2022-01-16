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

export function howMuchILoveYou(nbPetals) {
    console.log(nbPetals % 6 == 1?"I love you":
        nbPetals % 6 ==  2?"a little":
        nbPetals % 6 ==  3?"a lot":nbPetals % 6 ==  4?"passionately":
        nbPetals % 6 ==  5?"madly":"not at all")
}