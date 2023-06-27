//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    let matches = []
    for (let i = 0; i < string.length; i++){
        if (string.includes(names[i])){
            matches.push(`Matched ${names[i]}`)
        } 
    }
    if (matches.length > 0){       
        console.log(matches.join(", "))
    } else {
        console.log("No Matches")
    }
}

findWords(dog_string, dog_names)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    output = []
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            output.push("even index")
        } else {
            output.push(arr[i])
        }
    }
    console.log(output)
}

replaceEvens(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//------------JAVASCRIPT CODEWARS QUESTIONS-----------------------//
/* Ex 1) In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.*/

function printer_error(string){
    errors = 0
    let aToM = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    for (let i in string){
        if (!aToM.includes(string[i])){
            errors++
        }
    }
    return errors+'/'+string.length
}

console.log(printer_error("aaabbbbhaijjjm"))
console.log(printer_error("aaaxbbbbyyhwawiwjjjwwm"))

/* Ex 2) Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.*/

const stopTroll = (string) => {
    let vowels = ['a','e','i','o','u']
    let result = ""
    for (let i in string){
        if (!vowels.includes(string[i].toLowerCase())){
            result = result+string[i]
        }
    }
    return result
}

console.log(stopTroll("LOL!"))