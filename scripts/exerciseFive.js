function elevatorDistance(array) {
    let distance = 0, sum = 0;
    
    for(let i = 1;i < array.length;i++){
      sum = array[i] - array[i-1];
      distance += Math.abs(sum);
    }
    return distance;
}

module.exports = elevatorDistance;