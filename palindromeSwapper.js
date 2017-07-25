// /**
//  * @function palindromeSwapper
//  * menukar 2 huruf berurutan dari n = 0 sampai n-1
//  * contoh: makan => amkan, mkaan, maakn, makna
//  * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
//  * @returns {boolean} true bila kata yang di-swap adalah palindrom
//  */
function palindromeSwapper(str) {
  let ori = str;
  let i = str.length-1
  let z = i-1
  let temp = 0;
  let result =[];
  for (y=0 ; y<z; y++) {
    result.push(str[y]);
  }
  temp = str[i]
  result[i] = str[z]
  result[z]=temp;
  if (isPalindrome(result) == true) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(arr) {
  var ar = arr.join('')
  var strr = arr.reverse().join('');
  if (strr == ar) {
    return true;
  } else {return false;}
}

console.log(palindromeSwapper('recacre')); // true
console.log(palindromeSwapper('racecar')); // false
console.log(palindromeSwapper('arcecar')); // true

// /**
//  * @function isPalindrome
//  * Cek apabila kata merupakan palindromeSwapper
//  * @param {string} str - input kata yang dicek bila palindrom
//  * @returns {boolean} true bila kata adalah palindrom
//  */
// function isPalindrome(str) {
//   if (str.split('').reverse().join() === str) return console.log(true);
//   return console.log(false);
// }
