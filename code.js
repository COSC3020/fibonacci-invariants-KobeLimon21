function fib(n) {
 // base case for 0, returns "0" 
  if (n === 0) {
    return [0];
  }
// base case for 1, returns 0 element and 1 element 
  if (n === 1) {
    return [0, 1];
  }
// if base cases not met, proceed
else {
var array = fib(n-1)
array.push(array[n - 1] + array[n - 2]);
// pushes next fibonacci number onto the array
return array;
}

}
