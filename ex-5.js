function sum(...input) {
  // Start coding here !
  let result = input.reduce((a,b) => a + b,0)
  return result
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
