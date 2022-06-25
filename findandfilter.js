// indexof()
// Returns the first index of occurance of an array Element, or -1 if it is not found


// lastindexof()
// Returns the index of the last occurrence of a specified in the array 


// includes()

// Checks if an array contains a specified element or not 




const week = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Wed' ]


console.log(week.indexOf('Mon')) 
// Returns the index

console.log(week.lastIndexOf('Wed'))

console.log(week.includes('Wed'))




// find()
// Returns the value of the first array element that satisfies the provided test function 


// findIndex()
// Returns the index of the first array element that satisfies the provided text function or else returns -1


// filter()
// Returns a new array with all elements that pass the test defined by the given function 


const prices = [100, 200, 300, 400, 500, 600, 700, 800]

console.log(prices.find((price) => price > 300))

console.log(prices.findIndex((price) => price > 400))

console.log(prices.filter((price) => price <= 700))