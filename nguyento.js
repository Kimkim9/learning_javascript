function nguyenTo(number) {


    if (number < 2) return false;
    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i == 0) return false;
    }
    return true;
    }
    console.log(nguyenTo(11))

function palindrome(string) {
    const str = string.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const revervedStr = str.split('').reverse().join('');
    // if(str === revervedStr) return true;
    return str == revervedStr;
}
// console.log(palindrome("A man a plan a canal Panama"));
console.log(palindrome("A man a plan a canal "));

Array =[2, 4, 700, 77, 9]
function maxNum(array) {
    let max = array[0];
    for(let i = 0; i < array.length; i++) {
        if(max < array[i]) max = array[i]
    } return max;
}
console.log(maxNum(Array));

function maxNum(array) {
    return array.reduce( (num, max) => (num > max) ? num : max, array[0]);
}

 function respectiveString (string, char) {
    let count = 0
    for(let i = 0; i < string.length; i ++) {
        if(string[i] === char) count ++
    } return count;
 }
c2
 function countChar (string, char) {
    const count = string.split(char).length - 1
    return count;
 }
 console.log(countChar("hellooo","l"))

let a = 0; let b = 1
array =[a, b]
function next (limit)  {
    for(let i = 2; i < limit; i++) {
        let nextValue = a + b;
        console.log(nextValue);
        array.push(nextValue);
        a = b;
        b = nextValue;
    } return array;
}
console.log(next(10))