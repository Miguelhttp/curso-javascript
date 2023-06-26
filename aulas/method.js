// Method Map()s
// const numbers = [1, 2, 3, 4, 5]

// const numberMultipliedByTwo = numbers.map(function (number) {
//   return (number * 2);
// })


// MetHod Filter()
// const ages = [8, 13, 27, 30, 22, 40]

// const evenAges = ages.filter(function (item) {
//   return item % 2 === 0
// })

// MetHod Reduce()
const ages = [8, 13, 27, 30, 22, 40]

const sumOfAges = ages.reduce(function (age, accumalator) {
  return accumalator + age;
}, 0);

console.log(sumOfAges)
