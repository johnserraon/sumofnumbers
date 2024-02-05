const numbers = [1, 2, 3, 4];

// 1: sum with for-loop
function sumFor(list) {
  let sum = 0;
  for (const n of list) {
    sum += n;
  }
  return sum;
}

// 2: sum with while-loop
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

// 3: sum with recursion
function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

// 4: sum with Underscore
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, sum) { return memo + sum; });
}

console.log(`1st: ${sumFor(numbers)}`);
console.log(`2nd: ${sumWhile(numbers)}`);
console.log(`3rd: ${sumRecursion(numbers)}`);
console.log(`4th: ${sumTheSimpleWay(numbers)}`);
