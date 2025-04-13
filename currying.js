
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log("sum is",sum(1)(2)(3));

function sum(a) {
    return function(b){
      if(!b){
          return a;
      }
      return sum(a+b);
    }
  }
  console.log(sum(1)(2)(3)(4)(5)(6)()); 