const month = ['jan',' march', 'april', 'june', 'july' ]
const nums = [354, 6767, 2344, 12, 455,676, 78]


console.log(month.push('December')) //adds to the month array and increases the length
console.log(month)


// Adds the word to the beginning of the array
console.log(month.unshift('Feb')) 
console.log(month)

// Deletes  from the array
console.log(nums.pop()) //removes the last elemenst in the array
console.log(nums)



console.log(nums.shift()) // removes the first element in the array