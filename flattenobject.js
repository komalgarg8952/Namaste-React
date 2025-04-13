const a = {
    b:'dsafds',
    c:{
        d:'cxx',
        e:{
           f: 'sdfsd',
           g:{
            h:'dvcv'
           }
        }

    }
}

const flatObject = (obj,newObj = {},parentKey = '')=>{
    for(let [key,value]of Object.entries(obj)){
        const newKey = parentKey?`${parentKey}.${key}`:key;
        if(typeof value === 'object'){
            flatObject(obj[key],newObj,newKey)
        }
        else{
            newObj[newKey] = value  
        }
    }
    return newObj;
}

flatObject(a)