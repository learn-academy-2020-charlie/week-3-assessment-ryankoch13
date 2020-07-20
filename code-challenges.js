// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibSeq = () => {
    let fibArr = [1]
    let num = 1
    for ( let i=0 ; i<=10 ; i++ ){
        fibArr.push(num)
        num = fibArr[fibArr.length-2] + fibArr[fibArr.length-1]
    }
    return fibArr
}

console.log(fibSeq())

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// First I'll want to declare my function with an argument of an array

const onlyOdds = (array) => {

// Next I would like to create a filter that will push only values that meet 2 conditions - they are a number and they are an odd number. 

    let onlyNums = array.filter(value => typeof value === "number" && value % 2 != 0)

// Now I'll need to sort my numbers by least to greatest, being careful to define the condition on my sort function since JavaScript can have a hard time with type coersion. 

    return onlyNums.sort((a , b) => a - b)

// And I may as well return it all in that line. 

}

console.log(onlyOdds(fullArr1))
console.log(onlyOdds(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.


// Declare my function with an argument of a string

const middleLetters = (string) => {
// First I want to set up a conditional that will pull a different number of letters depending on if it is a en even number of characters long or odd
    let midLetters = ""
    if (string.length % 2 === 0) {
        
// If it's even, I'll need to set up my slice method to grab the two middle letters
        midLetters = string.slice((string.length / 2 - 1), (string.length / 2 + 1))
    } else {
// And if it's even I only need the middle point, so I'll use left + right / 2
        midLetters = string.charAt((string.length + 1) / 2)
    }
        return midLetters
// Now I'll just need to return our middleLetters string.
}
var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

console.log(middleLetters(middleLetters1))
console.log(middleLetters(middleLetters2))



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// First I'll declare my class name and set up my constructor
class sphere {
    constructor(radius){
// I'll want radius to be a property and a value that's passed upon construction as that is the variable that will be changing
        this.radius = radius
    }
// Next I can set up my math in a method to be called
    area(){
        return 4 * Math.PI * Math.pow(this.radius, 2)
    }
}

sphere1 = new sphere(5)
sphere2 = new sphere(10)
sphere3 = new sphere(15)

console.log(sphere1.area())
console.log(sphere2.area())
console.log(sphere3.area())


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


const cummSum = (array) => {
// Here I will want to declare a variable for use within the function but outside of my map function. That way it will be the same variable throughout the map function
    let currSum = 0
// Now I'll set up a map function that will add to this outside variable whatever our current value is, that way we can keep a running cummulative sum
    return sumArray = array.map(value => {
        currSum = currSum + value
// So each iteration of the map function it's pushing the currSum variable to the array rather than the value
        return currSum
    })
}
var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

console.log(cummSum(numbersToAdd1))
console.log(cummSum(numbersToAdd2))
console.log(cummSum(numbersToAdd3))
