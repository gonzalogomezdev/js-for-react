import { add, multiply } from "./add.js"
import addModule from "./add.js"
// Functions
/* function hello(){
    console.log('Hello World')
}

hello()

 */

// Programming Functional
/* function hello(){
    return function (){
        return 'hello world'
    }
}

console.log(hello()()) */

// Functions parameters

/* function hello(name){
    return 'Hola ' + name
}

console.log(hello('Ryan')) */

/* function add(x,y){
    return x + y
}

console.log(add(2,3)) */

// Default Parameters
/* function add(x, y=0){
    return x + y;
}

console.log(add(2,4)) */

// Objetos

/* const user = {
    //propertys
    name: 'Ryan',
    address: {
        country: 'argentina',
        city: 'posadas'
    },
    friends: ['richard', 'mark'],
    active: true,
    // methods
    sendMail(){
        return 'sending email...'
    }
}

console.log(user.sendMail()) */

//Shorthand property name

/* const name = 'laptop'
const price = 3000
const newProduct = {
    name,
    price
}

console.log(newProduct) */

// DOM Document Object Model

/* const title = document.createElement('h1')
title.innerText = 'Hola mundo desde js'

const button = document.createElement('button')
button.innerText = 'click'

//Event Handlers
button.addEventListener('click', function (){
    title.innerText = 'Texto actualizado'
    alert('Se realizo el click')
})

document.body.append(title)
document.body.append(button)
 */

//Destructuring

/* const user = {
    name: 'Joe',
    age: 30
} */

/* 
function printInfo({name}){
    return '<h1>Hola ' + name + '</h1>' 
}
 */

/* function printInfo(user){
   
    return '<h1>Hola ' + 
    user['age'] + '</h1>' 
} */

/* function printInfo(user){
    const {name, age } = user
    return '<h1>Hola ' + name + '</h1>' 
}

document.body.innerHTML = printInfo(user) */

// Funciones Anonimas



/* console.log(function (){
    return 'starting...'
}()) */


/* const button = document.createElement('button')
button.innerText = 'Click me'

button.addEventListener('click', function (){
    alert('clicked')
})

document.body.append(button) */


// Arrow Functions

/* const add = (x,y) => {
    return x + y
}

add(2,3) */


/* const button = document.createElement('button')
button.innerText = 'Click me'

button.addEventListener('click', ()=>{
    alert('clicked')
})

document.body.append(button)

//Inline Arrow Functions

const showText = () => 'Hola'
const showObject = () => ({name: 'ruan'})

console.log(showText())
console.log(showObject()) */


// Return

/* const button = document.createElement('button');
button.innerText = 'Click me';

const isAuthorized = false;

button.addEventListener('click', ()=>{
    if (isAuthorized){
        return   alert('Esta autorizado')
    }
    
    alert('No esta autorizado')
    
})

document.body.append(button) */

// String Literals

/* const background = 'red'
const color = 'white'
const isAuthorized = true;

const button = document.createElement('button');
button.innerText = 'Click me'
button.style = `background: ${isAuthorized ? 'blue' : 'yellow'}; color: ${color}`

button.addEventListener('click', ()=>{
    if (isAuthorized){
        return   alert('Esta autorizado')
    }
    
    alert('No esta autorizado')
    
})

document.body.append(button) */

/* 
const names = ['mary', 'joe', 'ryan']
 */
/* for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element)
} */

/* names.forEach(function (name){
    console.log(name)
}) */

/* const newNames = names.map(function (name){
    return `Hola ${name}`
})

console.log(newNames) */

/* const newNames = names.find(function(name){
    if (name === 'joe'){
        return name
    }
})
console.log(newNames) */

/* const newNames = names.filter(function(name){
    if (name !== 'joe'){
        return name
    }
})
console.log(newNames) */

/* const newNames = ['marcos', 'sofia', 'enrique']
 */
/* console.log(names.concat(newNames)) */

// VER en javascript array for mozilla


// Spread Operators
/* 
console.log([...names, ...newNames])

const user = {
    name: 'gonzalo',
    password: '1234'
}

const address = {
    city: 'posadas',
    street: 'brown'
}

const userInfo = {
    ...user,
    ...address
}

console.log(userInfo) */

/* console.log(add(2,3))

console.log(multiply(3,5))

console.log(addModule) */


// Optional chaining

const person ={
    name: 'gonzalo',
    address: {
        country: 'argentina',
        city: 'posadas'
    }
}

console.log(person.location?.city)



