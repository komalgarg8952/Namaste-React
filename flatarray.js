
// const arr = [];

// const flatArray = (arr2)=>{
//     for(let i=0;i<arr2.length;i++){
//         if(Array.isArray(arr2[i])){
//            return flatArray(arr2[i]);
//         }
//         arr.push(arr2[i])
//     }
//     return arr;
// }
const arr2 = [0, 1, [2, [3, [4, 5]]]];

const flatArray = (arr2)=> arr2.reduce((accumulator,currentValue)=>{
    return accumulator.concat(Array.isArray(currentValue)?flatArray(currentValue):currentValue)

},[])



console.log("flatArray",flatArray(arr2))
// const arr = [[1],[2],[3],[[4,5],[6,7],[[8,9],[10,11],[12,13]]]];
// const initialValue = [];
// const flatten = (arr) => arr.reduce((flattened,toFlatten) => {
//   return flattened.concat(Array.isArray(toFlatten) ? flatten(toFlatten): toFlatten);    
// }, []); 
// console.log(flatten(arr));

