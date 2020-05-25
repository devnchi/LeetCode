/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

var countPrimes = function(n) {
  const map = []
  for (let i = 2; i < n; i++) {
    map[i] = true
  }
  for (let i = 2; i * i < n; i++) {
    if (map[i]) {
      for (let j = i * i; j < n; j += i) {
        map[j] = false
      }
    }
  }
  return map.filter(num => num === true).length
}


var countPrimes = function(n) {
    var hash = {};
    var count = 0;
    for (var i=2; i<n; i++) {
        if (hash[i])continue;
         
        count++;
        for (var j=i; j<n; j=j+i)
            hash[j] = true;
    }
     
    return count;
};
