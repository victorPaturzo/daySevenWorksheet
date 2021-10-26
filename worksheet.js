//Problems to solve using JavaScript

//1. Fizz Buzz
//a. Write a program that prints every number from 0 to 100 to the console

//for(i = 0; i <= 100; [i++])
//console.log(i)

//b. If a number is divisible by 3, print ‘fizz’ instead of the number

//for(i = 0; i <= 100; [i++]){
//    if(i % 3 === 0){
//        console.log("fizz")
//    } else {console.log(i)}
//}

//c. If a number is divisible by 5, print ‘buzz’ instead of the number

//for(i = 0; i <= 100; [i++]){
//   if(i % 5 === 0){
//        console.log("buzz")
//    } else {console.log(i)}
//}

//d. If a number is divisible by 3 and 5, print ‘fizzbuzz’ instead of the 
//number

//for(i = 0; i <= 100; [i++]){
//    if(i % 5 == 0 && i % 3 == 0){
//        console.log("fizzbuzz")
//    } else if(i % 5 === 0){
//            console.log("buzz")
//    } else if(i % 3 === 0){
//        console.log("fizz")
//    } else {
//        console.log(i)
//    }
//}

//2. Reverse a string

//First I have to declare a variable for a string which, in this case, will be "Metamorphosis"
//let string = "Metamorphosis"

//Now I need to isolate individual characters in a string.  This can be done using indexes.
//console.log(string[0])

//Now that I can isolate characters in a string, I want to rearrange them in reverse order.  
//This will need to be done in a "for" loop since I need the rearrangement to involve incremental movements.
//for(i = string.length; i >= 0; [i--]){
//    console.log(string[i])
//}

//while this works, this logs the individual characters in reverse order.  I will now format the solution 
//to log the whole word in reverse.  In order to do this I need to add together all the characters and 
//create a variable to capture them. 
//let reverseString = ""
//for(i = string.length - 1; i >= 0; [i--]){
//    reverseString += string[i];
//}
//console.log(reverseString)

//3. Capitalize letter
//a. Write code that takes a string as input and capitalize the first letter of 
//each word. Words will be separated by only one space. i.e. “hello 
//world” should be outputted as “Hello World”

//To start, I will create a string of multiple words.
string = "try to capitalize the first letter of each word within this string"

//Next I will isolate and capitalize a single letter from a single word.  I will research how to capitalize a letter.
//console.log(string[0].toUpperCase())

//This allows me to capitalize the first letter of the first word, but in this form the solution will not cleanly 
//capitalize the first letter of each word.  To do this, I will try to instead capitalize every letter that follows a " ".
let finishedProduct = ""
for(i = 0; i <= string.length - 1; [i++]){
    if (string[0] === string[i] || string[i] === " "){
    console.log(string[i].toUpperCase())}
}

console.log(finishedProduct)
//4. Compress a string of characters
//a. For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would 
//compress to "3a5b4c2a3c3b3a3b3a"

//5. Palindrome
//a. A word, phrase, or sequence that reads the same backward as forward 
//i.e. madam
//b. Write code that takes a user input and checks to see if it is a 
//Palindrome and reports the result