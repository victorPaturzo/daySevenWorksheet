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

for(i = 0; i <= 100; [i++]){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz")
    } else if(i % 5 === 0){
            console.log("buzz")
    } else if(i % 3 === 0){
        console.log("fizz")
    } else {
        console.log(i)
    }
}

//2. Reverse a string
//a. Write code that takes a string as input and returns the string reversed
//b. i.e. “Hello” will be returned as “olleH”

//3. Capitalize letter
//a. Write code that takes a string as input and capitalize the first letter of 
//each word. Words will be separated by only one space. i.e. “hello 
//world” should be outputted as “Hello World”

//4. Compress a string of characters
//a. For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would 
//compress to "3a5b4c2a3c3b3a3b3a"

//5. Palindrome
//a. A word, phrase, or sequence that reads the same backward as forward 
//i.e. madam
//b. Write code that takes a user input and checks to see if it is a 
//Palindrome and reports the result