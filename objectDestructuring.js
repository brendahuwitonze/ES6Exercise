// Destructuring Challenge: You're 
// building a user profile system. Create a function 
// extractProfile(user) that takes an object user with 
// properties name, age, city, and occupation (optional). 
// Using destructuring, return a new object containing only 
// the name and city properties


function products({name,city}){
    return` ${name} lives in  ${city}`
}
const user={
    name:'Alex',
    city:'Kigali',
    age:'32',
    occcuption: 'student'
}
console.log(products(user))

