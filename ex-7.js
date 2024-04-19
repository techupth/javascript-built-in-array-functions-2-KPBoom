function isPalindrome(string) {
  // Start coding here
  if (string == revStr(string)){
    return true;
  } else {
    return false;
  }
}
let char;
let rechar;
let reword;
function revStr(a){
  char = a.split("");
  rechar = char.reverse();
  reword = rechar.join("");
  return reword;
}
//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

