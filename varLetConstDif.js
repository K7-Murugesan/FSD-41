
//========================== VAR -----------

// var age; //declaration
// age = 45; // Initialization

// var age = "Sixty" // Redeclare
// age = "Twnty Eight" // Re-assign
// console.log( age )

// function localVariable() {
//     if ( true ) {
//         if (true) {
//             var fnScopeVariable = "Im accessible from anywhere in this function block"
//         }
//     }
//     console.log( fnScopeVariable  );
// }

// localVariable();

// console.log( fnScopeVariable );

// // let -----------

// let id; // declare
// id=10; //initialize

// // let id = 20; // Redclare not possible
// id = "Twenty" //Re-assing or redeclare

// console.log( id );

// function localVariable() {
//     if ( true ) {
//         {
//             let blcScopeVariable = "Im accessible only inside the block-outside the block not accesible"
//             {
//                 console.log( blcScopeVariable );
//             }
//         }
//         console.log( blcScopeVariable  );
//     }
// }

// localVariable();

// console.log( fnScopeVariable );

// //Const - Seperate declare, initialize, redeclare & re-assign is not possible
// const newToken = "AB!@#v"

// console.log( newToken );

// if ( true ) {
//     {
//         const blcScopeVariable = "Im accessible only inside the block-outside the block not accesible"
//         {
//             console.log( blcScopeVariable );
//         }
//     }
//     console.log( blcScopeVariable  );
// }

//Global Variable
// var num = 50;
// let num1 = 100;
// const num2 = 150;

//scope chain - variable accessed from global scope
//Closure - inner fn accessing variable from outer function


function difBtwVariables() {
    //Local Variable
    var num = 200;
    let num1 = 300;
    const num2 = 400;
  
    function nestedFun() {
      //   var num = 10;
      //   let num1 = 20;
      //   const num2 = 30;
      console.log(num + num1 + num2);
    }
    nestedFun();
    console.log(num + num1 + num2);
  }
  
  difBtwVariables();
  
  console.log(num + num1 + num2);