//Selecting Elements-------------------------------------------------

// let para1 = document.getElementsByTagName("p")

// console.log( para1  );

// let paraId = document.getElementById("p1")

// console.log( paraId );

// let paraClass = document.getElementsByClassName( "p2" )
// console.log( paraClass );

// let input = document.getElementsByName("userName")
// console.log( input );

// let queryWithTag = document.querySelector( "p" )
// let queryWithId = document.querySelector( "#p1" )
// let queryWithClass = document.querySelector( ".p2" )

// console.log( queryWithTag );
// console.log( queryWithId );
// console.log( queryWithClass );


// let queryAllWithTag = document.querySelectorAll( "p" )
// let queryAllWithId = document.querySelectorAll( "#p1" )
// let queryAllWithClass = document.querySelectorAll( ".p2" )

// console.log( queryAllWithTag );
// console.log( queryAllWithId );
// console.log( queryAllWithClass );

///////////////////////////////////////////////////////////

// TRAVERSING ELEMENTS ---------

//Parent 


let input = document.querySelector( "input" )

console.log( input.parentNode  );
console.log( input.parentElement  );

//Child

let form = document.querySelector( "form" )

console.log( form.childNodes ); //It will call both text node and element node
console.log( form.children ); // It will call only Element Node
console.log( form.childElementCount  );
console.log( form.firstChild );
console.log( form.firstElementChild );
console.log( form.lastChild );
console.log( form.lastElementChild );
console.log( form.hasChildNodes() );


//Sibling

let siblingPara = document.querySelector( "#p1" ) 

console.log( siblingPara.nextSibling );
console.log( siblingPara.nextElementSibling );
console.log( siblingPara.previousSibling );
console.log( siblingPara.previousElementSibling );
