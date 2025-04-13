
const hero1 = {
    name: 'Batman',
    address: {
      city: 'Gotham'
    }
  };
  const hero2 = {
    name: 'Batman',
    address: {
      city: 'komal'
    }
  };


const shallowEqual = (hero1,hero2)=>{
    let obj1 = Object.keys(hero1);
    let obj2 = Object.keys(hero2);

    if(obj1.length !== obj2.length){
        return false;
    }
    for(let key of obj1){
        if(hero1[key]!==hero2[key]){
            return false;
        }
    }
    return true;
}



console.log("shallow copy",shallowEqual(hero1,hero2))

const deepEqual = (hero1,hero2)=>{
    let keys1 = Object.keys(hero1);
    let keys2 = Object.keys(hero2);

    if(keys1.length !== keys2.length){
        return false;
    }
    for(let key of keys1){
       const obj1 = isObject(hero1[key]);
       const obj2 = isObject(hero2[key])
       if(!(obj1 && obj2) &&  hero1[key]!==hero2[key]){
        return false;
       }
       else if(obj1 && obj2 && !deepEqual(hero1[key],hero2[key])){
        return false;
       }
    }
    return true;
}

function isObject (object){
    return object !=null &&  typeof object === 'object';
}

console.log("deep copy",deepEqual(hero1,hero2))
