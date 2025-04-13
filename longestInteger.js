const nums = [10, 9, 2, 5, 3, 7, 101, 18];


const findLongestInteger = ()=>{
    const obj = {};
    let count =0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]<num[i+1]){
            obj[i]=count++;
        }
        else{
            count = 0;
        }
    }
    return count;
}