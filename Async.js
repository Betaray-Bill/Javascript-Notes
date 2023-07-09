// Sync
// this is execeuted line by line
let pizza;
function orderPizza(){
    console.log("Order Pizza");
    pizza = "pizza";
    console.log("Order delivered")
}
orderPizza()
console.log(`Eat ${pizza}`)

// Sync with time delat due to heavy task
let pizza2;
function orderPizza2(){
    console.log("Order Pizza");
    setTimeout(() => {
        pizza2 = "pizza2";
        console.log(`${pizza2} was ordered`)
    }, 2000)
    console.log("Order delivered")
}
orderPizza2()
console.log(`Eat ${pizza2}`) //here pizza2 is undefined 
// coz Timeout is given, so it takes some time
// console log of pizz2 in setTImeout is executed after 2s
// but Eat pizza2 is still undefined , this section of depenede on a variable that is inside an async function(setTimeout)
// Here where the async thing comes, like callbacks()