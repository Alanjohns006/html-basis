document.write("hai welcome to intership")

//console.warn("this is a warning")
console.error("this is an error")

//variables
const pi=3.14
console.log(pi)

let a=10
console.log(a)

var b=19
console.log(b)

var b=40
console.log(b)

let isValid=false
let fullName="Antony perumbavoor"
let salary=40000

let num1=2
num1+=3  //num1=num1+3
console.log(num1)

let num2=4
num2-=2 
console.log(num2)

let num3=4
num3*=2 
console.log(num3)

console.log(num1++) //postfix
console.log(++num1) //prefix

let a1=num1++
console.log(a1)

++a1
console.log(a1)

let flag1=true
let flag2=false
 
console.log((flag1!=flag2) || (2==3))
console.log((flag1!=flag2) && (2==3))

if(5>3){
    console.log("5 is greater than 3")
}
else if(5<3){
    console.log("5 is les than 3")
}
else{
    console.log("equal")
}

function greet()
{}
greet()
function add(a,b){
    return a+b
}
let result=add(4,5)
console.log(result)
 
let diff=(num1,num2)=>{
    return num1-num2
}
let output=diff(5,4)
console.log(output)

//arrays

const seasons=['Winter','Summer','Rainy']
console.log(seasons[2])

for (let k = 0; k < seasons.length; k++) {
     element = seasons[k];    
console.log(element)}

seasons.forEach((item)=>console.log(item))

let num=[10,20,30]
let doublenum=num.map(item=>item*2)
console.log(doublenum)

function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }
}

console.log(calculate(5, 3, '+'));