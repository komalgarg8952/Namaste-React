let counter = 0;
const searchElement = document.getElementById('search');

const getData = (event)=>{
    counter++;
    console.log("counter is",counter,event)
}

const debounce = (callback,delay)=>{
    let timer;
    console.log("dfsdf")
    return  ()=>{
        let context =this
        args = arguments;

        clearTimeout(timer);
         timer = setTimeout(()=>{
            callback.apply(context,...args);
        },delay)
    }
}


const betterFunction = debounce(getData,1000);
// searchElement.addEventListener('input', betterFunction);
// const betterFunction = getData;
   