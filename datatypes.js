// console.log( 1 ); //Stack --empty
// setTimeout(()=>{
//     console.log( "GM" );
// },5000) //call back Queue
// console.log( true );
// console.log( undefined );

// var name = 'zyx'

// name = true;

// console.log( name );


//Primitive Datatypes - single Value - Predefined DataTypes

// var str = 'javascript' //String
// var str = "javascript"
// var str = `js`

// var num = 10; //Number

// var condition = true // Boolean
// var condition = false 

/*
Trivial Datatypes

var defaultVal = undefined; //undefined

var empty = null; //null

*/

//Statement - keyword name = value

// var a = 10; //Declaration and Initialization
// var a; //Declaration
// a = 100; //Initialization or assigning

// var a = 150; // Re-declarale
// a = "ECMA"; //Re-assign or Re-initialize

// "ECMA"

// console.log( a );  

//Non - Primitve Datatypes - multiple values - Reference - Composite - Complex - User Defined

//Object -- key value pair

// let car = { //Curly Bracket
//     vName : 'ford', //Property/key/variable/field
//     shape : 'rectangle',
//     color : ['red','blue','white','black'],
//     price : 100000,
//     fuelType : 'petrol'
// }
//To access each value- have to use Dot Notation
// console.log( car.vName );
// console.log( car.fuelType );
// console.log( car.price );
// console.log( car.shape );

//Array


//Array Literal - Square Bracket

// let arrOfNum = [ 10,20,30,40,50,"sixty",{ id:{newId:10} }, [11,23,33],1,2,3,4,4,5,5,6,7,7,7,7,7,7,7,7,7,7,7,8,798  ] // heterogeneous-different & homogeneous-same

// console.log( arrOfNum );
// console.log( arrOfNum[7][2] );
// console.log( arrOfNum.length-1 );
// console.log( arrOfNum[ arrOfNum.length-1 ]  );

// console.log( arrOfNum[6].id.newId );

//---------------Concatination

// var fName = "Kesavan......"+{id:1}  //Kesavan10 - string ---> Implicit Conversion or Type Coercion
// var fName = "Kesavan......>>>>>>>>>>>>>"+[1,2]
// var fName = "Kesavan"
// var lName = "Murugesan"

// var fullName = fName+' '+lName
// var fullName = "Kesavan Murugesan"

// console.log( typeof fName );
// console.log( fName );
// console.log( fullName );

// var name = 10
// var name1 = 20;

// console.log( name + name1 );

//Type Conversion

//Implicit Type Conversion - Type Coercion - (automatically type will change)

//String

//string + anything = string
//anything + string = string
// console.log(  "10" + 20  );
// console.log(  "10" + true  );

//Number

// console.log( 10 + true ); // true - 1 , false - 0
// console.log( 10 + false ); 
// console.log( 10 + undefined ); // undefined -> NaN - Not A Number
// console.log( 20 + null ); // null -> 0
// console.log( 30 + {} ); //number + object ==== number -> string, object -> string
// console.log( 30 + [] ); // number + array ==== number -> string, array -> string
// console.log( 30 + [24,2,4,6] ); 

// NaN + anything = Nan
// anything + NaN = Nan
// console.log( NaN + 10 );
// console.log( typeof NaN );

//Boolean

// console.log( true + null ); // 1 + 0
// console.log( true + [10] );
// console.log( true + {} );
// console.log( 3+5+(5+"5") );


//Explicit Type Conversion - Manual

// console.log( 10 + Number( "10" )  );
// console.log( 10 + Number( "abc" )  );
// console.log( 10 + Number( "" )  ); // 10 + 0
// console.log( 10 + Number( true )  );

// let $10 = 25; // undefined

// console.log( $10 );

// console.log( Number( {id:1} ) );
// console.log( Number( {} ) );
// console.log( Number( [$10] ) );


// console.log( Boolean( " " )  );
// console.log( Boolean( "" )  );
// console.log( Boolean( "123" )  );
// console.log( Boolean( 0+1 )  );
// console.log( Boolean( -Infinity )  );
// console.log( Boolean( null ) );
// console.log( Boolean( undefined ) );
// console.log( Boolean( {} ) );
// console.log( Boolean( [1] ) );


// console.log( typeof []  );
// console.log( typeof null  );


//----------------------------------------------------------------------


// undefined vs undeclared variable or not define

// let b; // undefined

// let a = "abc";

// console.log( a.filter() ); // Type Error 
// console.log( c ); //Reference Error - not defined
// // console.( b ) //Syntax Error

//----------------------------------------------------------------------