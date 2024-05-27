// let arr = [10,22,33,44,55,123,,4,,5,6,6,,7,7,8,,99,,9,199]

// [ 0,1,2,3,4]


// console.log(  arr.length-1 );


// console.log( arr[ arr.length-1 ] );

//================================================================================

//De-Structuring


// let arr1 = [101,111,121,131,100,200,300,400]

// let fValue = arr1[0]
// let sValue = arr1[1]

// console.log( fValue, sValue );

//ECMA-Script 2015 ---> ES-6

//Spread Operator ( ... ) --> to clone a independent value 

// let [a,b,c,d, ...e ] = arr1

// let [e1,e2,e3,e4] = e

// console.log( e4 );

// let newObj = {
//     vehicleNo : "TN13",
//     ownerName : "Ambani"
// }

// let { ownerName, vehicleNo, state } = newObj

// console.log( vehicleNo, ownerName, state );

//==================================================

//Call by Value or Pass by Value
// let a = 10; //Memory Address - 1001
// let b = a;  //Memory Address - 1002

// a=20;

// console.log( a,b );

//Call by Reference or Pass by refernce

// let arr = [1,2,3,4] //1003

// let arr1 = arr //1003

// arr[0] = 121;

// console.log( arr, arr1 );

//Spread Operator

// let currArr = [121,234,4,567]

// let spdArr = [...currArr]

// currArr[0] = 420;

// console.log( currArr, spdArr );


// let obj = {id:1, fName:"xyz"}

// let obj1 = obj

// let obj2 = { ...obj }

// obj1.id = 2

// console.log( obj, obj1, obj2 );


//Rest Operator or Rest Paramenter

// function name1(a1,a2,...a) {
//     console.log( a );
// }

// name1( 1,2,3,4,5  )


