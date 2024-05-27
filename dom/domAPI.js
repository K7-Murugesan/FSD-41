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

// // console.log( queryWithTag );
// let queryAllWithId = document.querySelectorAll( "#p1" )
// console.log( queryWithId );
// console.log( queryAllWithId );
// console.log( queryWithClass );


// let queryAllWithTag = document.querySelectorAll( "p" )
// let queryAllWithClass = document.querySelectorAll( ".p2" )

// console.log( queryAllWithTag );
// console.log( queryAllWithClass );

///////////////////////////////////////////////////////////

// TRAVERSING ELEMENTS ---------

//Parent 


// let input = document.querySelector( "input" )

// console.log( input.parentNode  );
// console.log( input.parentElement  );

//Child

// let form = document.querySelector( "form" )

// console.log( form.childNodes ); //It will call both text node and element node
// console.log( form.children ); // It will call only Element Node
// console.log( form.childElementCount  );
// console.log( form.firstChild );
// console.log( form.firstElementChild );
// console.log( form.lastChild );
// console.log( form.lastElementChild );
// console.log( form.hasChildNodes() );


//Sibling

// let siblingPara = document.querySelector( "#p1" ) 

// console.log( siblingPara.nextSibling );
// console.log( siblingPara.nextElementSibling );
// console.log( siblingPara.previousSibling );
// console.log( siblingPara.previousElementSibling );

//Manipulating Elements

// function newElement(){

//     let ol = document.createElement( "ol" )
    
//     let input = document.querySelector("input")
    
//     let inputValue = input.value
    
//     ol.innerHTML =  `<li>${inputValue}</li>` 
//     // ol.innerText = " <li>Cyber Security</li> "
//     // ol.textContent = " <li>Cyber Security</li> "
    
//     let div = document.querySelector("div")

//     // div.prepend( ol )
//     div.prepend( "Sleep Time" )
//     div.appendChild( ol ) //used to add element node...text node is not valid
//     div.append( "ML",ol )

// }

function newElement(){
    let list = document.createElement( "li" )
    let input = document.querySelector("input")

    list.innerText = input.value

    let orderList = document.querySelector( "ol" )
    
    // orderList.append( list )

    // orderList.insertBefore( list, orderList.children[2] ) //( what, where )

    // orderList.replaceChild( list, orderList.children[2]  )

    // orderList.removeChild( orderList.children[0]  )

    orderList.remove()

}


