/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

 Example 1:
Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
Constraints:

0 <= x <= 231 - 1
 */

function mySqrt(x) {
    if (x === 0) {
      return 0;
    }
  
    let left = 0;
    let right = Math.floor(x / 2) + 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (mid * mid > x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left - 1;
  }
  
  
  console.log(mySqrt(4))
  console.log(mySqrt(8))



  