function getSum() {
  let a = 0;
  return function(num) {
    return a += num; 
  };
};

let sum = getSum();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28
