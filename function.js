// function firstFunction() {
//     console.log("I can make function");
//     console.log("This is the proof");
    
// }
// firstFunction();
// function secondFunction() {
//     console.log("I can make function");
//     console.log("This is the proof");
    
// }
// secondFunction();


// function sum(x,y) { 
//     let result= x+y;
//     return result;
// }

// let total=sum(10,5);
// console.log(total);



// function square(num1) {
   
//     const borgo=num1 * num1;
//     // console.log( borgo);
//     console.log("Square of number" + " "+ num1 +' is: '+ borgo);

// }
// square(2);


// function doubleIt(number) {
//     const doubled=number*2;
//     console.log(number,doubled);
// }
// console.log('I will call the function')
// doubleIt(15)
// doubleIt(20)
// doubleIt(30)
// console.log("...............");

// const num=10;
// doubleIt(num)


 


// function test(num,num2){
//   const number= num-num2;
//   console.log('subtraction between num to num2:', number);
  
// }

// const first=10;
// const second =2;
// test(first,second);



// return
// function fiveTimes(num) {
//     const sum =num*5;
//     return sum;
// }

// fiveTimes(5);
// const total=fiveTimes(5);
// console.log(total);


// function name(firstName, lastName) {
//     const fullName=firstName+' '+lastName;
//     console.log(fullName);
    
// }
// const userName =name('Saharior','Ridoy');
// console.log('full name is:',name)

function avg(input) {
   let total=0;
   let average=0;
   let avgg=0;
   for(const num of input){
     total=total+num;
    average= total/input.length;
     avgg=average;
   }
    return avgg.toFixed(2);
}
let number=[75.25, 65, 80, 35.45, 99.50];
console.log(avg(number));