// const thenable = {
//     then: function(callback){
//         setTimeout(()=>callback(2),200)
//     }
// }

// const value = await thenable;
// console.log(value)


const promise = new Promise((resolve,reject)=>{
     return reject(Error("new error occured"));
});

promise.catch((error)=>{
    console.log("error message",error.message)
})
promise.then((response)=>{
    console.log("error message",error.message)
})


// if a catch handles the error then next then block is called becuase catch has handled the error
// function job(){
//     return new Promise((resolve,reject)=>{
//          return reject();
//    });
// }

// let promise = new Promise((resolve,reject)=>{
//     return reject();
// });;


// promise.then(()=>{
//     console.log('success 1')
// }).then(()=>{
//     console.log('success 2')
// }).then(()=>{
//     console.log('success 3')
// }).catch(()=>{
//     console.log('error 1')
// }).then(()=>{
//     console.log('success 4')
// })


function job(state){
        return new Promise((resolve,reject)=>{
            if(state){
                resolve('success')
            }
            else{
                 reject('error');

            }
       });
}


let promise = job(true);


promise.then().catch((error)=>{
    console.log('success 2',error);
    return 'error caught';
}).then((data)=>{
    console.log('success 3',data)
    return new Error("new error")
}).then((data)=>{
    console.log('success 4',data)
    return new Error("new error")
}).catch((error)=>{
    console.log('success 4',error)
})


// console.log('start')
// const promise = new Promise((resolve,reject)=>{
//     console.log(1)
// })

// console.log("end")  

// ===output ====
// start
// 1
// end


// const promise1 = Promise.resolve().then(()=>{
//     console.log("Promise 1");
//     const timer1 = setTimeout(()=>{
//         console.log("timer1");
//     },0)
// })

// const timer2 = setTimeout(()=>{
//     console.log("timer2");
//     const promise2 = Promise.resolve().then(()=>{
//         console.log("prmoise2")
//     })
// },0)
