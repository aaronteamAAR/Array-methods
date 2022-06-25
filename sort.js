const months = ['jan', 'march', 'april', 'june', 'july' ]
const num = [354, 6767, 2344, 12, 455,676, 78]



// Sorts the elements in the array in order 
console.log(months.sort())
console.log(num.sort())



// For sorting interger element

console.log(num.sort((a, b) => a - b))