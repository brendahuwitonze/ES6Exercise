
// Set Up Sets and Maps: You're working with a list of product IDs that might
//  contain duplicates. Use a Set to remove all duplicates and return the unique 
//  product IDs.

const ProduId =['34','54','56','47','47']
let newIds =[...new Set( ProduId)]
console.log(newIds)