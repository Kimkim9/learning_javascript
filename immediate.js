function verifyIncreasingArray (array) {
    return array.reduce((num1, num2) => num1 < num2 ? false : true, array[0])
}
console.log(verifyIncreasingArray([1,2,3]))