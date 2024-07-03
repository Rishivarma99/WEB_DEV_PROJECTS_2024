
// A MAP FUNCTION RETURN THE VALUES AND INSERT THEM INTO AN ARRAY 

var arr1 = [2, 3, 4, 5, 6];

const two_mul = arr1.map((number => number * 2));

console.log(arr1.map(function (num) {
    num = num * 2;
    num = num - 1;
    return num;
}))

console.log(two_mul);
