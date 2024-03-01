
/* 
  AWAIT : 
  -> MORE READIBLE   
   -> only can be written inside async function 
 */
  function createAndReturnPromise(){

    const prom = new Promise(function(resolve){

        setTimeout(() => {
            console.log("time up and the promise is ready");
        }, 5000);

        resolve("hi there");
    })
    return prom ; 
  }
   
//   ASYN FUCNTION 
  async function main(){
    let a = await createAndReturnPromise();
    // console.log(a);             
  }

  main();

