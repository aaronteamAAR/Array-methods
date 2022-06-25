// splice()

// This method can be used to perform CRUD operations 
// Returns a deleted Element 


// slice()
// Slices out a piece of an array into a new array
// slice() method creates a new array



const mon = ['jan', 'march', 'april', 'june', 'july' ]



// Update from index 0 to 2 
console.log(mon.splice(0, 2, 'May', 'August'))
console.log(mon)

console.log(mon.slice(1, 3))


