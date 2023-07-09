let suma = document.getElementById("suma")
let btn = document.getElementById("btn")

let arr = [1,2,3,4,5,5,67,8]
console.log(arr)
let a = arr.slice(4, 6)

console.log("a", a)
console.log(arr)
console.log("Heloo");


    function changeColor(){
            const colors = ['red', 'blue', 'green', 'yellow'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            console.log(randomColor)
            suma.style.color=randomColor
    }
    let n=0;
    let t ;
    btn.addEventListener("click", () => {
        if(n==0){
            t=setInterval(changeColor, 1000);
            n=1;
        }else{
            clearInterval(t)
            n=0;
        }
    })

    

const occNum =(e) => {
    var occ = {}
    e.split("").forEach((i) => {
        if(occ.hasOwnProperty(i) === false){
            occ[i] = 1;
        }else{
            occ[i]++;
        }
        // console.log(i)
    })
    return occ
}

// let q = prompt("Enter");
// console.log(q)
console.log(occNum("apple"))