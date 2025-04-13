// Write a function that receives an array of integers and returns the count of unique elements in the array.

const a = [4,4,5,16,7,8,7,9,45]

const getCountOfUniqueInteger = (arr)=>{
    const obj = {};
    let count =0;
    for(let i =0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]]+1
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] === 1){
            console.log(obj,obj[key])
            count = count+Number(key);
        }
    }
    return count;

}

console.log(getCountOfUniqueInteger(a))