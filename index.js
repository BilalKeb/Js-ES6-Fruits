let fruits = ['Apple','Orange','Banana']
fruits= [...fruits,"Rasberry"]
console.log(fruits)

// Exercice2
// let fruits = ['Apple','Orange','Banana']
// fruits = [...fruits,"Rasberry"]
// console.log(fruits)


// Exercice3
const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

var monTableauTotal = arr2.concat(arr1);

console.log(monTableauTotal)



// Exercice4


const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }
  const bobby = {
	...user,
	firstName: "bobby"
}

// Exercice5
const numbers = [1, 2, 3, 4, 5, 6]
const filtereNumbers = numbers.filter((number) => {
    return number % 2 === 1
})

console.log(filtereNumbers)


// Exercice6
const mapNumbe = numbers.map((number) => {
    return  number * number 
})
console.log(mapNumbe)