export function findOdd(arr) {
  console.log("El número que se repite un número de veces impar es: " + arr.find(times => arr.filter(num => num == times).length % 2 != 0));
  return arr.find(times => arr.filter(num => num == times).length % 2 != 0);
}