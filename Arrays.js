const shop = ["bread", "milk", "cheese", "chicken", "meat"]

console.log(shop[0])
shop[1] = "Kazhudha paal"

// Finding a item in an array
console.log(shop.indexOf("cheese")) // indexOf return the index of the item, if not present then it returns -1

// ADDING ITEMS

// push() - to add one or more elements, adds in the end of the array
// this also returns the length of the new array when method call completes
const length_of_newArray = shop.push("eggs")
console.log(shop, length_of_newArray)

// unshift() - this helps in adding item in starting of the array
shop.unshift("lemon")
console.log(shop)


// REMOVE ITEMS 
// pop() - returns the element that is removed from the array
const removed_ele = shop.pop("milk")
console.log(removed_ele, shop)

// shift() - removes first element
shop.shift()
console.log(shop)

// splice() - if we know the index of the item , we can remove the element in the array
const index = shop.splice(1, 3)
console.log(index)


console.log(shop)

// Accessing every item
for (const i of shop) {
    console.log(i)
}


// map() - this behaves as for loop that takes a unique id for each item
let arr = [1, 2, 3, 4, 5]
const map_arr = arr.map(e => {
    return e * 2
})
console.log(map_arr)


// filter - this returns a a new array
const filter_arr = arr.filter(e => {
    return e > 3
})
console.log(filter_arr)

// Special function to handle with arrays 
// split() - splits the data wrt to the parameter that is passed
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities = data.split(',');
console.log(cities)

// join(',') - joins the items in array by ,