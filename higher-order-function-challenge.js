//invocation: any([8,9,10,11]) expected output: true

function greaterThan10(array) {
  for(x=0;x<array.length;x++) {
    if(array[x] > 10) {
      return true;
    }
  }
  return false;
}

function any(array, callbackFn) {
    return callbackFn(array);
}
console.log(any([8,9,10,11], greaterThan10));

console.log("====================");

//invocation: surprise()() expected output: 'surprise!'

function surprise() {
  return function() {
    return 'surprise!';
  }
}
console.log(surprise()());

console.log("====================");

//invocation: filter([1,2,3,4], onlyOdd) expected output: [1,3]

function filter(array, callbackFn) {
  return callbackFn(array);
}

function onlyOdd(array) {
  result = [];
  for(x=0;x<array.length;x++) {
    if(array[x] % 2 !== 0) {
      result.push(array[x]);
    }
  }
  return result;
}

console.log(filter([1,2,3,4], onlyOdd));

console.log("====================");

//invocation: sumTwoNumbers(3)(9) expected output: 12

function sumTwoNumbers(num) {
  return function(input) {
    return input + num;
  }
}

console.log(sumTwoNumbers(3)(9));
