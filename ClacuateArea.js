// Arrow Function Magic: We need a function to
//  calculate the area of a rectangle. Write a concise 
//  arrow function calculateArea(width, height) that returns 
//  the product of width and height. (Bonus: Can you create an 
//     arrow function to check if a 
// number is even or odd?)



// Area
let CalculateArea = (height,width)=>width* height
console.log(CalculateArea(2,4))

// Even and odd
let oddAndEven = (n)=>n%2===0?'Even':"Odd"

console.log(oddAndEven(3))