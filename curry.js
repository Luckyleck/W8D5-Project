function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  function curriedSum(count) {
    const args = [];
    console.log(args)
    // if (args.length === count){
    //     return 
    // }
    return function _curriedSum(num) {
      args.push(num);
      console.log(sum(args));
      return _curriedSum();
    } 
  }