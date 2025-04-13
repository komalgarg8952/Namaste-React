// async function foo() {
//     // const p1 = new Promise((resolve) => setTimeout(() => {console.log("success 1",resolve("1"))}, 1000));    // const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
//     // console.log("p1",p1)
//     // const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
//   }
//   foo().catch(() => {}); 



// async function foo() {
//     const p1 = new Promise((resolve) => setTimeout(() => {resolve("1")}, 2000));
//     // console.log("success 1",a)
//     const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 2500));
//     // const b = await p2;
//     // const a = await p1;
   
   
//     const results = [await p2, await p1]; // Do not do this! Use Promise.all or Promise.allSettled instead.
//   }
//   foo()



function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fast");
        console.log("fast promise is done");
      }, 1000);
    });
  }
  
  async function sequentialStart() {
    console.log("== sequentialStart starts ==");
  
    // 1. Start a timer, log after it's done
    const slow = resolveAfter2Seconds();
    console.log(await slow);
  
    // 2. Start the next timer after waiting for the previous one
    const fast = resolveAfter1Second();
    console.log(await fast);
  
    console.log("== sequentialStart done ==");
  }
  
  async function sequentialWait() {
    console.log("== sequentialWait starts ==");
  
    // 1. Start two timers without waiting for each other
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.timeLog()
    // 2. Wait for the slow timer to complete, and then log the result
    console.log(await slow);
    // 3. Wait for the fast timer to complete, and then log the result
    console.log(await fast);
  
    console.log("== sequentialWait done ==");
  }
  
  async function concurrent1() {
    console.log("== concurrent1 starts ==");
  
    // 1. Start two timers concurrently and wait for both to complete
    const results = await Promise.all([
      resolveAfter2Seconds(),
      resolveAfter1Second(),
    ]);
    // 2. Log the results together
    console.log(results[0]);
    console.log(results[1]);
  
    console.log("== concurrent1 done ==");
  }
  
  async function concurrent2() {
    console.log("== concurrent2 starts ==");
  
    // 1. Start two timers concurrently, log immediately after each one is done
    await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),
      (async () => console.log(await resolveAfter1Second()))(),
    ]);
    console.log("== concurrent2 done ==");
  }
  
//   sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
// sequentialWait()
  // wait above to finish
//   setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"
  
//   // wait again
//   setTimeout(concurrent1, 7000); // same as sequentialWait
  
//   // wait again
//   setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"
  
concurrent2();

