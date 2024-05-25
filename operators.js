//Arithmetic Operator  - to perform mathematical operation
let a = 10;

// console.log( 10 + 20 ); // add
// console.log( 10 - 20 ); 
// console.log( 10 * 20 ); //Multiplication - asterisk 
// console.log( 25 / 10  ); //Divide --> Quotient
// console.log( 25 % 10 );  //Modulus ---> remainder
// console.log( a ** 4 );  //Exponential --> to find power value

//Assignment Operator -  to perform operation for same variable

// let b = 10;

// // b = b + 40;
// b+=40; //b=50 add and assign
// b-=40; // subtract and assign // b = b - 40 = 50 -40

// console.log( b  );

//Relational Operator

//Increment ( ++  )

//----------------------------------------------------------------
// let num = 50;

// //Post Increment
// num++;  // num = num + 1 ; 50 + 1  // num = 51

// //Pre Increment
// ++num; // num = num + 1 // 51 + 1

// // num = num + 1
// console.log( num );
//--------------------------------------------------------------
/*Post Increment
    1.Substitute
    2.Mathematical Operation
    3.Increse by 1 value - Memory
*/
// let num = 10; //11 -- 12
// let num1 = 20;

/* Example 1
let num2 = num++ + 20;
   // 10++ + 20 --Substitute
   //30 - Mathematical Operation  // num2 = 30
   //10 -->num =  11 
*/

// let num2 = num++ + 20 + num++;
// num2 = 10++ + 20 + 11++

//num=10, num1=20

// let num3 = num++ + num1++ + num++

// num3 = 10++ + 20++ + 11++
// num3 = 41

// console.log( num, num1,  num3 );

// Pre-increment

//Decrement

//Comparision Operator   

// let userAge = 25;
// let childHeight = 130;

// let a1 = 9;
// console.log(  18 > 18  );  //Greater Than
// console.log(  18 >= 18  ); //Greater than or equal 
// console.log( childHeight < 130   ); //Less than - So he can buy half ticket
// console.log( childHeight <= 130  ); //Less than or Equal
// console.log( 10 == '10' ); // Equality 
// console.log(  1 == true );
/*
console.log( 10 == (2+2+4+2) );
console.log( 10 == (++a1) );
*/

// console.log( 10 === Number('10')  ); // Strict Equal or Identical Equal
// console.log( 1 === true  ); // value && datatype

// console.log(  10 != '11'   ); //Not Equal
// console.log( 10 != 'abc'  );
// console.log(  10 !== '10'  ); 


//Logical Operator   

//Logical AND ( && )

//cond1   cond2  - result
// true    true     true   
// true    false    false   
// false   true     false   
// false   false    false   


// let userAge = 30; console.log(  userAge >=18 && userAge<=30   ); // true true 
// let userAge = 35; console.log(  userAge >=18 && userAge<=30   ); // true false 
// let userAge = 15; console.log(  userAge >=18 && userAge<=30   ); //  false true
// let userAge = "Twenty Seven"; console.log(  userAge == "Twenty" && userAge=="Twenty One"   ); //  false false

// let idProof = "Adhaar"
// let idProof1 = "Pan Card"

// console.log( idProof ==  "Pan card" && idProof1=="Voter Id"  );

//Logical OR
//cond1   cond2  - result
// true    true     true   
// true    false    true   
// false   true     true   
// false   false    false 

let newId = "Adhaar"

// console.log(  newId == "Pan" || newId == "VoterId"   );
// console.log(  newId == "Adhaar" || newId == "VoterId"   );
// console.log(  newId == "VoterID" || newId == "Adhaar"   );
// console.log(  newId == "VoterID" || newId == "Adhaar"   );

//Logical NOT

console.log( !( newId == "Pan" || newId == "VoterId") );

// console.log( !(10>=20) ) 
    // !true >= 20 
    // false >=20
    // 0 >=20

// console.log( !10 );

// console.log( "You can Join Course" );


