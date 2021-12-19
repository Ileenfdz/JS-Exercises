export function elevatorDistance(array) {
    let distance = 0;
    let sum = 0;
    
    for(let i = 1;i < array.length;i++){
      sum = array[i] - array[i-1];
      distance += Math.abs(sum);
    }
    console.log("Total de distancia de un piso a otro en el recorrido " + array + "=" + " " + distance);
    return distance;
}