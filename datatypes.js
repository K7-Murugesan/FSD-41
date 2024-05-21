// console.log( 1 ); //Stack --empty
// setTimeout(()=>{
//     console.log( "GM" );
// },5000) //call back Queue
// console.log( true );
// console.log( undefined );

// var name = 'zyx'

// name = true;

// console.log( name );


//Primitive Datatypes - single Value

// var str = 'javascript' //String
// var str = "javascript"
// var str = `js`

// var num = 10; //Number

// var condition = true // Boolean
// var condition = false 

// var defaultVal = undefined; //undefined

// var empty = null; //null

//Statement - keyword name = value

// var a = 10; //Declaration and Initialization
// var a; //Declaration
// a = 100; //Initialization or assigning

// var a = 150; // Re-declarale
// a = "ECMA"; //Re-assign or Re-initialize

// "ECMA"

// console.log( a );  

//Non - Primitve Datatypes - multiple values

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

var fName = "Kesavan"+{id:1}  //Kesavan10 - string ---> Implicit Conversion or Type Coercion
var fName = "Kesavan"+[1,2]
var fName = "Kesavan"
var lName = "Murugesan"

var fullName = fName+' '+lName

console.log( typeof fName );
console.log( fName );
console.log( fullName );
