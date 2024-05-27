// abc1();
// var fName = "Deepak"

// fName = "Kesavan"

// console.log( fName )
// console.log( fName )

// // Named Function or Normal Function 

// function userDetails(fName){
//     console.log( "Here you can see user details "+ fName );
// }
// userDetails("Kesavan")
// userDetails("Abhisek")

//Ananomous Function

// let sumOfVal =  function(){
//     console.log( "Ananomous Funcion" );
// }

// sumOfVal()

//Arrow Function
//Fat Arrow or Lamda Expression

//Variable Function or Function Expression

// let multiOfVal = (a,b) => {
//     console.log( a*b );
// }

// multiOfVal()


//Self-invoke function

// IIFE - Immediately Invoked Function Expression

// console.log( "Im gonna block IIFE" )

// (function multiply(a,b){
//     console.log( "Self-invked"+(a*b) );
// })(10,30)

// multiply(20,40);


// function abc() {
//     return 12
// }

// console.log( abc );

//Currying

// function addition(num1) {
//     return function(num2){
//         console.log( num1+num2  );
//         return( num1*num2 )
//     }
// }

// let returnedAnan = addition(100)

// /* returnedAnan = function(num2){
//             console.log( num1+num2  );
//          return( num1*num2 )
//     }
// */
// let finalVal = returnedAnan(200);
// // finalVal = 20000; // return => num1*num2 => 100*200

// console.log( finalVal );

//Hoisting - moving all the variable and function declaration to the top of the scope before execution
// console.log( num );
// //Due to temporal dead Zone - throwing refernce error for let and const variabl

// let num = 10;
// console.log( num );


//Higher Order Funcion - function which accepts another function as an argument
//Call BAck Function - function which is sent as an argument to another function

function  abc1( callBackFun ) {
    console.log( "IM hod" );
    callBackFun(11,22)
}

function bcd1(a,b){
    console.log( "IM call back function"+(a+b) );
}

abc1( bcd1 ) // hoc(call-back)

//Hoisitng - 

// function  abc1(){
//     console.log("1234");
// }


