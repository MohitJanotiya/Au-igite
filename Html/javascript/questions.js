//write a program to check whether a number is positive negative or zero?
//check number is even or odd?
//check whether number is divisible by 3 and 5?
//rite. a program to find the largest of three number?
// WAP to find sum or n natural numbers

// WAP whether number is palindrome or not?
//WAP to calculate factorial of a number?
//wap to check prime or not ?
// wap to check year is leap or not
//wap to check date is valid or not?



// let num = prompt("enter the number")
// if(num < 0)
//     console.log("negative")
// if(num > 0)
//     console.log("positive")
// if(num == 0)
//     console.log("zero")


// let num1 = Number(prompt("enter number"));

// if (num1 % 3 == 0) {
//     console.log("Divisible by 3");
// } else if (num1 % 5 == 0) {
//     console.log("Divisible by 5");
// } else {
//     console.log("Not divisible by 3 or 5");
// }

// if (num1 % 2 === 0) {
//     console.log("even");

// } else {
//     console.log("odd");
// }


// let a = Number(prompt('enter 1st number'))
// let b = Number(prompt('enter 2nd number'))
// let c = Number(prompt('enter 3rd number'))

// if (a>b && a>c ){
//     console.log(a," is greater")
// }
// else if (b>a && b>c )
// {
//     console.log(b," is greater")
// }
// else if (c>b && c>ca)
// {
//     console.log(c," is greater")
// }
// else{
//     console.log("invalid")
// }



// let n = Number(prompt('Range'))
// let sum = 0
// for (i = 0 ; i < n+1 ; i ++ ){
    //     sum = sum + i
    // }
    // console.log(sum)
    
// let n = Number(prompt('Range'))
// let rev = Number(String(n).split('').reverse().join(''));

// if (n == rev){
    //     console.log("True")
    
    // }
    
    // else{
        //     console.log("False")
        // }
        
        
// let n = Number(prompt('Number'))
// let fact = 1
// for ( i =1 ; i < n+1 ; i ++ ){
    //     fact = fact * i
    // }
    // console.log(fact)
    
    
// let n = Number(prompt('Number'))
// let root = n ** 0.5
// let isPrime = true

// if( n<=1){
    //     console.log("Not Prime ")
    // }
    
    // else {
        //     for (i = 2 ; i <=root; i++)
        //         if ( n % i == 0){
    //             console.log("not Prime")
    
    //         }
    //         else{
        //             console.log("Prime")
        //         }
        
        // }
        
let n = Number(prompt('year'))
if(n % 4 == 0 && n % 100 != 0 && n % 400 == 0 )
{
    console.log("this is a leap year")

}

else{
    console.log("Not a leap year")
}
