function  fullName()
{
    console.log("meriem");
}


function  fullName(firstName,lastName)
{
   return(firstName+" " +lastName);
}

function  add(a,b)
{
   return(a+b);
}

function perimeter(length,widh)
{
    return (2(length+widh));
}

function volume(length,widh,height) 
{
 return(length*widh*height);
}

console.log( volume(1,2,3));


// Body mass index(BMI) is calculated as follows: 
//bmi = weight in Kg / (height x height) in m2. Write a function 
//   which calculates bmi. BMI is used to broadly define
// different weight groups in adults 20 years old or older.
//   Check if a person is underweight, 
//normal, overweight or obese based the information given below :
//     The same groups apply to both men and women.
//     Underweight: BMI is less than 18.5
//     Normal weight: BMI is 18.5 to 24.9
//     Overweight: BMI is 25 to 29.9
//     Obese: BMI is 30 or more


function BMI(weight ,height)
{
    var bmi = weight / (height * height);
    return bmi;
}
var x=prompt("give your weight");
x=parseFloat(x);
var y=prompt("give your height");
y=parseFloat(y);
var t =BMI(x,y);
 console.log("bms :"+t);


 if (t)
 {
    if(t<18.5)  
    console.log("Underweight"); 
   else
    if (t>= 18.5 && t< 24.9)  console.log("Normal weight");
    else
    if (t>=30) console.log("obèse");

 }
 else 
 {
     console.log("format incorrect");
 }

 


  
