export function getAverage(marks){
    console.log(Math.floor(marks.reduce((x, y) => x + y) / marks.length));
}