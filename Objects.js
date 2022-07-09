// One of the important datatype in javascript 
// Object has a key and value that is related to the key in javascript

// creating a object
let user_constructor = new Object(); //Object Constructor
let user_literal = {}; //Object literal

// adding keys and values 
user = {
    name: "Meow",
    age: "12",
    isAdmin: true
}
console.log(user.age); //calling a key from a object using dot

delete user.isAdmin //deletion of a key
console.log(user)
    // Multi word keys cannot be added, instead they can be added within double quotes ""

for (key in user) {
    console.log(key)
}




// OBJECT REFERENCE - object scan be stored and copied by reference meanwhile, other datatype s are primitive that they are only copied by reference
let message = "soonapana";
let phrase = message; //here we are assigning message's value to the variable phrase, so soonapana is stored in phrase

//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// The object is stored somewhere in memory, while the user variable  has a “reference” to it.
// We may think of an object variable, such as user, like a sheet of paper with the address of the object on it.
// When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object.
// Now here’s why it’s important.
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let admin = user
admin.name = "Sonamutha"
console.log(admin.name)



console.log("__________________");

// This 
console.log("THIS__________________-");
//A function in Object is called as Method.
user.isSay = function() {
    return console.log("Vanakam da")
}
user.isSay()


// this is basically used to access the data that is stored in the object 
// eg: we need the name of the user so we use this.name to pin point the name in the Object
let data = {
    name: "Surya",
    age: "18",
    sayHi: function() {
        console.log(`Hi ${this.name}`)
    }
}

data.sayHi()


// This is NOT BOUND , this can be used in any function even if it's not a method
function this_da() {
    console.log(this)
}
// value of this is evaluated during run time

// Arrow function doesn't have THIS