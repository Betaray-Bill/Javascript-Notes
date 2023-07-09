// Hoisting
const sumConst = (a, b) => a + b;
console.log("Function defined before calling")
console.log("SumFUnc : ", sumFunc(1, 2))
console.log("SumConst : ", sumConst(1, 2))


console.log("Function defined after calling")
    // const sumConst gives err but function sumFunc  doesn't

// JS automatically moves all the Function named stuff to the top
// of the folder, so no err like "Cannot access before inintialisation will occur"
function sumFunc(a, b) { //JS moves this to top
    return a + b;
}

// But the arrow Function  sumCost will not be moved up coz
// arrow func with consrt/let are not hoisted
// But var is hoisted
//const sumConst =  (a, b) => a+b;

console.log(var_variabel)
var var_variabel = 10
    // we get undefined coz var is moved to top and the undefined value is assigned to it



// Lexical Scope
// 
function int() {
    var f = "name"

    function sau() {
        console.log(f)
    }
    sau()
}

var nn = int()



// Closure
// Closure gives access top outer

// function from an inner

// function

function init() {
    let n = "asdfg";

    function display() {
        console.log(n);
    }

    display()
}

//init()

// Even when passed as argument we can access it in inner function

function out(name) {
    function one() {
        console.log(name)
    }

    function two() {
        console.log(name)
    }
    one()
    two()
        // Both th func has access to the name variable
}

//out("Name")

// in dynamic condition
function human(n) {
    function sayHI() {
        console.log("He;llo", n)
    }

    function sayBullShit() {
        console.log(":BullShit", n)
    }
    return {
        sayHI,
        sayBullShit
    }
    // sayHI()
    // sayBullShit()
}


function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter) //counter is not present in the inner function scope, so it checks for the lexically bound parent scope
    }

    return inner
}

const f = outer()
console.log(f())
console.log(f())