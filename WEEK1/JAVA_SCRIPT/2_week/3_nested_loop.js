
function multiplyALL(arr){

    var product =1; 

    for(var i = 0 ;i< arr.length;i++){
        for(var j = 0 ;j<arr[i].length;j++){
          
            product *= arr[i][j];

            
        }
    }
    return product;
  

}


var product = multiplyALL([[1,2],[3,4],[5,6,7]]);
console.log(product);

// DO WHILE LOOP : 
// FIRST ECECUTE AND CHECK CONDITION 

var i1 =10
 do {
  
    console.log(i1);

 }while (i1<5)

