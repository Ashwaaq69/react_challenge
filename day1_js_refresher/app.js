// 1: variables

// let first_name = 'Ashuu'
// first_name = 'Ashwag'
// const pi = 3.4

// console.log(first_name)
// console.log(pi)

// arrays
//empty array

// const arr = Array()
// console.log(arr)

// const numbers = [0, 11,54,9.2, 33]
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] 
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] 
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)


//Array can have items of different data types

// const arr = [
//     'miki',
//     123,
//     true,
//     {name: 'Miki', age: 30 },
//     {skills: ['html', 'css', 'js', 'python']}

// ]

// console.log(arr)

//Creating an array using split

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript)

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) 
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)

//Accessing array items using index

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon
// // Last index can be calculated as follows

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// console.log(lastFruit) // lemon



// const shoppingCart = [
//     'Milk',
//     'Mango',
//     'Tomato',
//     'Potato',
//     'Avocado',
//     'Meat',
//     'Eggs',
//     'Sugar',
//   ] // List of food products
  
//   console.log(shoppingCart) // -> all shoppingCart in array
//   console.log(shoppingCart[0]) //  -> Milk
//   console.log(shoppingCart[7]) //  -> Sugar
  
//   let lastIndex = shoppingCart.length - 1
//   console.log(shoppingCart[lastIndex]) //  -> Sugar


//Modifying array element


// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10 // changing 1 at index 0 to 10
// numbers[1] = 20 // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// countries[0] = 'Afghanistan' // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// console.log(countries)



//Methods to manipulate array push(), pop(), shift(), unshift()

// conditionals ifelse, ternary, switch


// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

// // Switch More Examples
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }


// Examples to use conditions in the cases

// let num = prompt('Enter number')
// switch (true) {
//   case num > 0:
//     console.log('Number is positive')
//     break
//   case num == 0:
//     console.log('Numbers is zero')
//     break
//   case num < 0:
//     console.log('Number is negative')
//     break
//   default:
//     console.log('Entered value was not a number')
// }


// loops for
// while
// do while
// for of
// forEach
// for in

// let total = 0
// for(i = 0; i<101, i++){
//     if(i % 2 == 0)
//         total += i
// }
// console.log(total)

// const nums = [1, 2, 3, 4, 5]
// for (let i = 0; i < 6; i++) {
//   console.log(nums[i])
// }


// let count = prompt('Enter a positive number: ')
// while (count > 0) {
//   console.log(count)
//   count--
// }


// let count = 0
// do {
//   console.log(count)
//   count++
// } while (count < 11)

//for of

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach((number, i) => {
//   console.log(number, i)
// })

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// countries.forEach((country, i, arr) => {
//   console.log(i, country.toUpperCase())
// })

// for in 

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
//   }
  
//   for (const key in user) {
//     console.log(key, user[key])
//   }




// scope
//  Window
// Global
// Local

// Variable can be declared globally or locally or window scope.

// Window Scope

// a = 'JavaScript' // is a window scope this found anywhere
// b = 10 // this is a window scope variable
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible



// object


// const rectangle = {
//     length: 20,
//     width: 20,
//   }
//   console.log(rectangle) // {length: 20, width: 20}
  
//   const person = {
//     firstName: 'ashuu',
//     lastName: 'mohaz',
//     age: 20,
//     country: 'somalia',
//     city: 'mogadisho',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js',
//     ],
//     isMarried: true,
//   }
//   console.log(person)


// const person = {
//     firstName: 'Ashuu',
//     lastName: 'mohaz',
//     age: 20,
//     country: 'somalia',
//     city: 'mogadisho',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js',
//     ],
//     getFullName: function () {
//       return `${this.firstName}${this.lastName}`
//     },
//     'phone number': '+3584545454545',
//   }
  
//   // accessing values using .
//   console.log(person.firstName)
//   console.log(person.lastName)
//   console.log(person.age)
//   console.log(person.location)
  
//   // value can be accessed using square bracket and key name
//   console.log(person['firstName'])
//   console.log(person['lastName'])
//   console.log(person['age'])
//   console.log(person['age'])
//   console.log(person['location'])
  
//   // for instance to access the phone number we only use the square bracket method
//   console.log(person['phone number'])



//Object Methods


// const person = {
//     firstName: 'ashuu',
//     age: 20,
//     country: 'dibai',
//     city: 'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'student',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki',
//     },
//     getPersonInfo: function () {
//       return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     },
//   }
  
//   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
//   //hasOwnProperty
  
//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson)


// functions

// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function


// functionName(parm1) // during calling or invoking one argument needed

// function areaOfCircle(r) {
//   let area = Math.PI * r * r
//   return area
// }

// console.log(areaOfCircle(10)) // should be called with one argument

// function square(number) {
//   return number * number
// }

// console.log(square(10))



// function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     console.log(sum)
//   }


// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }


//Anonymous Function without name

// const anonymusFun = function(){
//     console.log('This is an anonymous function')
// }


// 9. Higher Order Function

//Higher order functions are functions which take other function as a parameter or return a function as a value.


// const callback = (n) =>{
//     return n**2
// }

// const square = (n, callback) => {
//     return callback(n) * n
// }

// console.log(square(callback, 3))


// Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))


//10. Destructuring and Spreading


// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable. Destructuring allows us to write clean and readable code.

// 1arrat and object

// const numbers = [1, 2, 3]
// const countries = ['Finland', 'Sweden', 'Norway']

// for (const number of numbers) {
//     console.log(number)
//   }
  
//   for (const country of countries) {
//     console.log(country)
//   }


//11. Functional Programming
// In this article we will cover all JS functional programming methods:

// forEach
// map
// filter
// reduce
// find
// findIndex
// some
// every

// syntax in a normal or a function declaration

function callback(item, index, arr) {}
array.forEach(callback)

// or syntax in an arrow function
const callback = (item, i, arr) => {}
array.forEach(callback)




// syntax in a normal or a function declaration

// function callback(item, i) {
//     return // code goes here
//   }
  
//   const modifiedArray = array.map(callback)
  
//   // or syntax in an arrow function
  
//   const callback = (item, i) => {
//     return // code goes here
//   }
//   const modifiedArray = array.map(callback)



//   const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const countriesWithLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesWithLand) // ["Finland", "Iceland"]


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const sum = numbers.reduce((acc, cur) => acc + cur)
// console.log(sum) // 55


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const firstEvenNum = numbers.find((n) => n % 2 === 0)
// const firstOddNum = numbers.find((n) => n % 2 !== 0)
// console.log(firstEvenNum) // 0
// console.log(firstOddNum) // 1



// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const someAreEvens = numbers.some((n) => n % 2 === 0)
// const someAreOdds = numbers.some((n) => n % 2 !== 0)
// console.log(someAreEvens) // true
// console.log(someAreOdds) // true


//13 Document Object Model(DOM)
