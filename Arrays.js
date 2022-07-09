// const shop = ["bread", "milk", "cheese", "chicken", "meat", "lays", "doritos", "shawarma", "mutton", "beef"]

// console.log(shop[0])
// shop[1] = "Kazhudha paal"

// // Finding a item in an array
// console.log(shop.indexOf("cheese")) // indexOf return the index of the item, if not present then it returns -1

// // ADDING ITEMS

// // push() - to add one or more elements, adds in the end of the array
// // this also returns the length of the new array when method call completes
// const length_of_newArray = shop.push("eggs")
// console.log(shop, length_of_newArray)

// // unshift() - this helps in adding item in starting of the array
// shop.unshift("lemon")
// console.log(shop)


// // REMOVE ITEMS 
// // pop() - returns the element that is removed from the array
// const removed_ele = shop.pop("milk")
// console.log(removed_ele, shop)

// // shift() - removes first element
// shop.shift()
// console.log(shop)

// // delete 
// delete shop[0]

// // splice() - if we know the index of the item , we can remove the element in the array
// const index = shop.splice(1, 3)
// console.log("Splice", index)
// console.log(shop.splice(4, 5, "Meow", "Dog")) //here we are removing the 2 elements by their index and replacing their values with another values whichare being passed as arguments

// // Slice(start, end) - same as splice

// // Difference between SPLICE and SLICE
// // Splice - this returns the removed items as another new array, alters the old array
// // Slice - returns the removed items, doesn't alters the old array

// console.log(shop)

// // Accessing every item
// for (const i of shop) {
//     console.log(i)
// }

// console.log("Last element by at()", shop.at(-1))

// // map() - this behaves as for loop that takes a unique id for each item
// let arr = [1, 2, 3, 4, 5]
// const map_arr = arr.map(e => {
//     return e * 2
// })
// console.log(map_arr)


// // filter - this returns a a new array
// const filter_arr = arr.filter(e => {
//     return e > 3
// })
// console.log(filter_arr)

// // Special function to handle with arrays 
// // split() - splits the data wrt to the parameter that is passed
// const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// const cities = data.split(',');
// console.log(cities)

// // join(',') - joins the items in array by ,
// let arr_join = ['Bilbo', 'Gandalf', 'Nazgul'];
// let str = arr_join.join(';'); // glue the array into a string using ;
// console.log(str);

// // Slice(start, end)
// let array = [1, 2, 3, 4, 5]
// console.log(array.slice(-2))

// // Concat - creates a new array that includes value from other arrays and additional values
// let arr_concat = array.concat([6, 7, 8]);
// console.log(arr_concat)





let arr_new = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 30, 656, 56];
// //forEach(function(item, index, array){})
// let arr_new_forEach = arr_new.forEach((item, index) => {
//     console.log(`${item} - ${index}`)
// })
// arr_new_forEach



// _----------------------------------------------

// Searching a, item in an Array

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
console.log(arr_new.indexOf(2)) //1 - index of 2
console.log(arr_new.includes(656)) //true - as the item is present

// find, findIndex, findlastIndex

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Sam" },
    { id: 5, name: "Martha" }

];

let user_find = users.find(e => (e.id == 2))
console.log(user_find.name);

// findIndex, findlastIndex - only returns the element's index not their values


let user_findIndex = users.findIndex(e => (e.id == 2))
console.log(user_findIndex); // 1 - only the index is returned

// filter() - to find many items under condition
let users_filter = users.filter(e => e.id > 2)
console.log(users_filter);





// Reduce - reduce()

// reduce(accumulator, item, index, array)
// accumulator is the value of the prev state, item is current value, index - indexof current item

let r = [1, 2, 3, 4, 5];
console.log(r.reduce((prev, curr) => prev + curr))

// reduce takes the first element as the initial value