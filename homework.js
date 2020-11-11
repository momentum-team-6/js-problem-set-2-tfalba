// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

function remove(array, itemToRemove) {
    let newArray=[]
    for (let arrayElem of array) {
        if (arrayElem!==itemToRemove) {
            newArray.push(arrayElem)
        }
    }
    return newArray
}

let testArray= ["Joey","Karen","Karen","Mike","Sam"]
let resultArray= remove(testArray,"Karen")

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
    let total=0
    for (let num of numbers) {
        total+=num
    }
    return total
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
    let avg=undefined
    if (numbers.length>0) {
        avg=sum(numbers)/(numbers.length)
        }
    return avg
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
    let minNumber = undefined
    for (let number of numbers) {
        if (minNumber === undefined || number<minNumber) {
            minNumber = number
        }
    }
    return minNumber
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// use input, output, and holder arrays, probably somehow nest functions over holder array

// run sortfunction on array
//split takes inputArray and does two things-- it turns input array into only non-min items
//and holderArray is now array of min
//after executing split on input array push holderArray onto outputArray
//set holderArray back to [] and rerun split on existing inputArray

function split(array, itemToRemove, newArray) {
    for (let arrayElem of array) {
        let index=array.indexOf(arrayElem)
        if (arrayElem===itemToRemove) {
            newArray.push(itemToRemove)
            array.splice(index, 1)
        }
    }
}

function dice(array) {
    if (array.length>0) {
        let holder=[]
        split(array, minimum(array), holder)
        for (let hold of holder) {
            output.push(hold)
        }
    }
    return output
}

function selectionSort(input) {
    output=[]
    while (input.length>0) {
        dice(input)
    }
    return output
}

let inputArray=[3,1,1,3,5,2,9,19,17,4,18,16,2,8]

console.log(selectionSort(inputArray), output)
console.log(selectionSort([5]), output)

//THESE ARE THE FILTERING METHOD WAYS OF HANDLING REMOVE PROBLEM
//TRY REWRITING ABOVE USING THESE INSTEAD OF SPLIT

// function remove(array, itemToRemove) {
//     let newArray = array.filter(function (arrayElem) {
//         return arrayElem !==itemToRemove
//     })
//     return newArray
//     }

// With above you can set something equal to remove(array, itemToRemove)
// and then it will have the value of newArray.

// function keep(array, itemToKeep) {
//     let newArray = array.filter(function (arrayElem) {
//         return arrayElem ===itemToKeep
//     })
//     return newArray
// }

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(words) {
    let textString=""
    for (let word of words) {
        if (words.length>1 && ((words.length-1) !== words.indexOf(word))) {
            textString = textString  + word + ","
        }
        else if (words.length>1) {
            textString = textString + word
        }
        else {
            textString=word
        }
    }
    return textString
}

