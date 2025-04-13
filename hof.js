//Higher order function
const radius = [2,3,4,5];

const area = function (raidus){
    return Math.PI*raidus*raidus;
}

const circumfrence = function(radius){
    return 2*Math.PI*radius;
}

Array.prototype.calculateArea = function(logicFunction){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logicFunction(this[i]))
    }
    return output;
}
console.log(radius.map(area))

console.log(radius.calculateArea(area))
console.log(radius.calculateArea(circumfrence))