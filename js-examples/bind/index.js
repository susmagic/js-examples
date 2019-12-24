// function createCalcFunction(n){
//     return function(){
//         console.log(100 * n)
//     }
// }


// const calc = createCalcFunction(42)

// calc()

// function createIncrementor(n){
//     return function(num){
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10);

// console.log(addOne(10))
// console.log(addOne(41))

// console.log(addTen(10))
// console.log(addTen(41))

// function urlGenearator(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenearator('com')
// console.log(comUrl('github'))

function bind(context, fn){
    return function(...args){
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Михайл', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 27, job: 'SMM'}


bind(person1, logPerson)()
bind(person2, logPerson)()