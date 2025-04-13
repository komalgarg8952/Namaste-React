


const test ='aaabdfbd';

const getNonRepeatedCharacter = (test)=>{
    if(test ===''){
        return ''
    }
    else{
        const splittedString = test.split("");
        const obj = {}
        for(let i=0;i<splittedString.length;i++){
            if(obj[splittedString[i]]){
                obj[splittedString[i]] = obj[splittedString[i]]+1
            }
            else{
                obj[splittedString[i]] = 1
            }
        }

        for(let key in obj){
            if(obj[key]===1){
                return key
            }
        }

    }

}

console.log(getNonRepeatedCharacter(test))