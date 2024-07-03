
// NUMBER.isInteger(<num>) - to check weather a num is integer or not 
// given a array with muliple numbers only square the integers and greater than 0 numbers 

var arr1 = [-1, -2, 3, -4, 5, 1.2, 3.5];

const square1 = (arr1) => {
    var square_ans = arr1.filter(num => num > 0 && Number.isInteger(num)).map(num => num * num);
    return square_ans;
}

console.log(Number.isInteger(arr1[0]));
var ans = square1(arr1);
console.log(ans);