/**
 * Returns negative version of a given number.
 * @param {number} n - number 
 * @returns {number} the negative coeficient of n
 */

function asNegative(n) {
  if (n > 0){
  return n * -1;
  } else {
    return n;
  }
}

//test cases
console.log("asNegative(3): ", asNegative(3), " should equal 3");
console.log("asNegative(0): ", asNegative(0), " should equal 0");
console.log("asNegative(-52): ", asNegative(-52), " should equal -52");


