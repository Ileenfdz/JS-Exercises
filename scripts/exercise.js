export function saleHotdogs(n){
  console.log(n*(n<5?100:n>=10?90:95));
  return n*(n<5?100:n>=10?90:95);
}