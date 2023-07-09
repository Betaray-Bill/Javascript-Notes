// Arrow Functions
const ageCalc = age =>{
        console.log(`My age is ${age}`)
}


console.log("Higher Function")
//1))
// Passing a func as argument is called Higher Order Function
let Upper = str =>{
        return str.toUpperCase()
}
let Lower = str =>{
        return str.toLowerCase();
}
//Passing a Function as Argument
let transform = (str, fun) => {
        return fun(str);
}
console.log(transform("MeoW MEow PoONa", Lower))

//2) Currying : transforms a func into nested multiple functions, with each function taking only a single parameter
function sum(a, b){
        return a+b
}

function sum_(a, b, c){
        return a+b+c;
}
console.log(sum_(1, 2, 3))

function sum_curry(a){
        return function(b){
                return function(c){
                        return a+b+c;
                }
        }
}
console.log(sum_curry(1)(2)(3))
 
// Map
console.log("Map")
// map() takes array and function as argument and returns a new array
const a = [1,2,3,4,5]
const b = a.map(n => 
        n*2
)
// My notes = Modifies an entire array by returning a new array
//numbers as n = array 
//n*2 function = function , these are taken as argument
console.log(b)


console.log("Filter")
// filter() is used to filter the values of an array, the filter values are returned in new array
// It only gets filtered when it passes the test
const fil = a.filter(n => n%2 == 0)
console.log(fil)



console.log("Reduce")
// Basics
const array = [1,2,3,4]
// reduce() takes in two main parameters
// 1.) (a, b) == a is the accumulator holds the value of previous return, on first call it has the value of initialValue
// b = is the currentValue
// 2.) InitialValue , this gives the value to the Accumulaot during the first call, later Accumulator holds the value of prev call
const s = array.reduce((a,b) => a+b, 10)
// passing initialvaue is optional
// 1.) if passed : the reduce function's currValue starts from index 1 and the accumulators value starts from index 0
// 2.)9 if not passed : the Accumulator holds the InitialValue and CurrValue holds the value in index 0
console.log(s)




// let t1 = 
// { 
//         Amritapuri:707.5,
//         Dinnur: 306.7,
//         Kumbalgodu:356.6,
//         Maharani:815.8,
//         Manayarpalayam:328.4,
//         Neelagiri:339.6,
//         Salavankuppam:53.6,
//         Veerappanchatram:400.5,
//         White:155.7
// };

// let t2 = 
// { 
//         Amritapuri:7,
//         Dinnur: 30,
//         Kumbalgodu:356,
//         Maharani:8,
//         Manayarpalayam:0,
//         Neelagiri:3,
//         Salavankuppam:53,
//         Veerappanchatram:4.5,
//         White:55.7
// };
// let final = {};
// function sum(ob1, ob2) {
// //   let sum = {};

//   Object.keys(ob1).forEach(key => {
//     if (ob2.hasOwnProperty(key)) {
//         final[key] = ob1[key] + ob2[key]
//     }  
//   })
// //   return sum;
// }

// sum(t1, t2);

// console.log(final)