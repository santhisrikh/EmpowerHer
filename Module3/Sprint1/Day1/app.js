import {add as addition,multiply} from "./utils.js"
import subtraction from "./utils.js"
// var,let const
// var -> Fucntionl scope
// let,const-> block scope {}
// destructuring
// spread and rest opertaors
// modules
// higer order functions
// array methods ->map,foreach,filter,reduce

function testVar(){
    if(true){
        let x = 3.14;
        console.log(x)

    }
    return "santhi"
          
}
// testVar()
// template literals (``)
// s
// a
// n
// t
// h
// i 
// string interpolation
// concatenation
// multi lines
// embedd an expression
// ${a+b}  a=2  b =3
// 

// let name = "santhi"
// let a = 10
// let b =20;
// const welcomeNote = `welcome 
// ${testVar()} 
//  to
//   react
//    session`
// console.log(welcomeNote)
// destructuring
// to unpack the values/elements of an array
// to unpack the properties of objects
let numbers = [1,2,3,4,5]
// let [a,b,...rest] = numbers // array destructring
// console.log(a,b,rest)
// function abc(...args){
//     console.log(args,"args....")
//     return args.map(a=>a*2)
// }

// console.log(abc(1,2,4,5))

// object destructring
let obj = {name:"santhi",age:30,occupation:"teacher"}


// let {name:personName,age=20} = obj;
// console.log(age)
// // default value
// // :,=
let {name,...otherInfo} = obj
console.log(otherInfo)
// spread operator
// expand the elements of an array into individual
let a = [1,2,3,5]
let b = [5,6,7]
let res = [...a,...b] // 
console.log(res)
let d = [1,2,3]
let res2 = [...d,7,8,8] // [1,2,3,7,8,8]
// object
// let personDetails = {name:"santhi",job:"teacher"}
// let address = {name:"sri",contact : 123456,dno:234}
// let totalDetails = {...address,...personDetails}
// console.log(totalDetails) 
// modules ->export and import 
// file => all the mathematical logic
// file ->representation UI

// named export and imports -> with the same name add 
// default 
// console.log(addition(2,3))
// console.log(multiply(5,6))
// console.log(subtraction(10,9))
// higher order functions

// function welcomeUser(welcomeFunction){
//     const message = "Hello React!!"
//     return welcomeFunction(message)
// }
// function greet(message){
//     return message.toUpperCase()
// }
// console.log(welcomeUser(greet))

// closures
// map,filter , reduce
// 
const arr =[1,2,3,4,5]
// const double =  arr.map(number=>number*2)
// console.log(double,"fghj")
// const evenNumbers = arr.filter(num=>num%2===0)
// console.log(evenNumbers)
// const sum = arr.reduce((acc,currentValue)=>acc+currentValue,50)
// console.log(sum)

const users = [{
    name:"santhi",age:30},
    {name:"priya",age:25},
   { name:"keshav",age:10
}]
const usersMessage = users.map(user=>`${user.name} is ${user.age} years old`)
console.log(usersMessage)

const products = [{id:1,name:"Laptop",price:1500,qty:10},{id:2,name:"Phone",price:700,qty:8},{id:3,name:"HeadPhones",price:100,qty:9}]
const total = products.filter(product=>product.price>100).map(product=>product.price*product.qty).reduce((acc,currentValue)=>acc+currentValue)
console.log(total)

// filter out > 100 lap top and phone
// after filter [[{id:1,name:"Laptop",price:1500,qty:10},{id:2,name:"Phone",price:700,qty:8}]
// after map [15000,5600]
// after reduce => 20600