//Concat pollyfill

// Array.prototype.mConcat = function(newArray){
//     const concatedArray = [];
//     for (let i = 0; i < this.length; i++) {
//         concatedArray.push(this[i]);
//     }
//     for(let i=0;i<arguments.length;i++){
//         if(Array.isArray(arguments[i])){
//             const dummyArr = arguments[i];
//             for (let i = 0; i < dummyArr.length; i++) {
//                 concatedArray.push(dummyArr[i]);
//             }
//         }
//         concatedArray.push(arguments[i]);
//     }

//     return concatedArray;
// }


// console.log([[1]].mConcat([5,[6]],1))
//map polyfill

// Array.prototype.newmap = function(callback){
//     const newArray = [];
//     for(let i=0;i<this.length;i++){
//         newArray.push(callback(this[i],i,this));
//     }
//     return newArray;
// }


//filter polyfill


// Array.prototype.mfilter = function(callback){
//     const filtedArray = [];
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             filtedArray.push(this[i]);
//         }
//     }
//     return filtedArray;
// }

// console.log("filter array",[2,4,1,6].mfilter((item)=>{
//     return item%2===0
// }))


Array.prototype.mReduce = function(callback,initialValue){
    let accumulator = initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=callback(accumulator,this[i]);
    }
    return accumulator;

}


console.log("reduce",[1,2,3,4].mReduce((accumulator,item)=>{
    return accumulator+item
},0))


//promise.all polyfill


   Promise.prototype.mAll = function promiseAll(arr){
    const newArr = [];
    let resolvedPromise = 0;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i])
    // }
    return new Promise((resolve,reject)=>{
     
            arr.forEach((promise,index) => {
                promise.then((response)=>{
                    newArr[index] =  response
                    resolvedPromise++
                    if(resolvedPromise===arr.length){
                        return resolve(newArr)
                    }
                }).catch(err=>{
                    reject(err)
                })
            });
        
        
    })
}