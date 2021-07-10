
// comments can make code readable
/*comments can
 make code readable, 
easy to reuse and informative
*/

//Create a variable.js file and declare variables 
//and assign string
//, boolean, undefined and null data types
var MyFirtVariable;
console.log(typeof(MyFirtVariable));


MyFirtVariable="hi";

console.log(typeof(MyFirtVariable));
MyFirtVariable =true;
console.log(typeof(MyFirtVariable));
MyFirtVariable=null;
console.log(typeof(MyFirtVariable));

 var X;
 var X1;
 var X2;
 var X3;

//  Declare variables to store your first name, last name, 
//  marital status, country and age in multiple lines
var firstname ="Meriem";
var LastName="GAOUA";
var  MaritalStatus="01";
 var Contry="Algiers";
 var age ="18";
 console.log(firstname);


//  var  firstname1  ,LastName1,MaritalStatus1,Contry1,age1;

//  I am 25 years old.
//   You are 30 years old.
var  MyAge;
var YourAge;

MyAge=25;
YourAge="30";
console.log("I am"+MyAge+"years old");
console.log("you are"+YourAge+"years old");
//+ " years old"); 





 

  
/*
console.log((4 > 3 )+" my Response "+true);  

console.log((4 >= 3) + " my Response "+true);
console.log(( 4 < 3 )  +" my Response "+ false);
console.log(( 4 <= 3 )+"  my Response "+  false); 
console.log( (4 == 4) +" my Response "+ true); 
console.log( (4 === 4)  +" my Response "+true); 
console.log((4 != 4 )+" my Response "+ false); 
console.log((4 !== 4 ) +" my Response "+ false); 
console.log((4 != '4' )+" my Response "+   false); 
console.log((4 == '4' )+" my Response "+  true); 
console.log((4 === '4') +" my reponse "+ false);
console.log((4 > 3 && 10 < 12) +" my response " +true);*/
 
// console.log((4 > 3 && 10 > 12 )  +" my reponse "+ false);
// console.log((4 > 3 || 10 < 12)  +" my reponse "+ true);
// console.log((4 > 3 || 10 > 12)  +"  my reponse "+ true );
// console.log(!(4 > 3) +" my reponse "+ false);
// console.log(!(4 < 3)  +" my reponse "+ true);
// console.log( !(false)  +" my reponse "+ true );
// console.log(!(4 > 3 && 10 < 12)   +" my reponse "+false );
// console.log(!(4 > 3 && 10 > 12)  +" my reponse "+ true);
// console.log( !(4 === '4')  +" my response "+true);





var b=prompt("enter base");
var h=prompt("enter height");
 var A=parseFloat(b) * parseFloat(h) *0.5;
 console.log("  the area :" +A);


var a1=prompt("enter side a ");
var b1=prompt("enter side  b");
var c1=prompt("enter side  c"); 
 var perimeter = parseFloat(a1)  + parseFloat(b1)  + parseFloat(c1)  ;
 console.log("  the perimeter of your triangle is:" +perimeter);

//perimeter = 2 x (length + width)).

 var a1=prompt("enter length");
 var b1=prompt("enter width");
 
  var perimeter1 = 2*( parseFloat(a1)  + parseFloat(b1) )   ;
  console.log("the area of rectacle :");
  console.log("  the perimeter of your triangle is:" +perimeter1);
 



