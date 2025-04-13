

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P1 success"),5000)
});

const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P2 success"),3000);
    setTimeout(()=>reject("P2 error"),1000)
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("P3 success"),2000)
});

//promis.all ----fail fast
// Promise.all([p1,p2,p3]).then((data)=>{
//     console.log("data",data)
// }).catch((err)=>{
//     console.error("err",err)
// });

//Promise.allSettled ---- wait for all

// Promise.allSettled([p1,p2,p3]).then((data)=>{
//     console.log("data",data)
// }).catch((err)=>{
//     console.error("err",err)
// });

//Promise.race ---- wait for first settle promise (reject/resolve)
// Promise.race([p1,p2,p3]).then((data)=>{
//     console.log("data",data)
// }).catch((err)=>{
//     console.error("err",err)
// });

//Promise.any -- wait for first promise to be successful / it will give aggregated error
Promise.any([p1,p2,p3]).then((data)=>{
    console.log("data",data)
}).catch((err)=>{
    console.error("err",err)
    console.error("err",err.errors)
});