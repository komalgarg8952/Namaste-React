const object = {
    name:"komal",
    city:"delhi",
    getValue:function (){
        console.log("name is" + this.name + "" + "city is" + this.city)
    }
}

const object2 = {
    name:"rony"
}
//never do this
object2.__proto__ = object;


const arr = ["komal","rony"]
