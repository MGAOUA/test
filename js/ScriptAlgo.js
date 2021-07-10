var age =prompt("Enter your age:");
age =parseFloat(age) ;
var AgeUser =32;
if (age >=18 ) // "18"
{
console.log("You are old enough to drive");
}
else
{
    var reste= 18 -age;
  console.log("you have to wait for " +reste );
}

if  (age)
{
    if (age >AgeUser  )  
    {
    console.log("You are older than me");
    }
    else 
    
    {
       
      console.log("you are younger than me or my be we have the same age"   );
    }
}
else{
    console.log("enter correct value "   );
}
 


//Even numbers are divisible by 2 and
// the remainder is zero. How do you check,
// if a number is even or not ?
if (age%2==0)
{
 console.log("even number");
}
else{
    console.log("is not an even number");
}


if (age >=90 && age <=100)
{
    console.log("your grad is A");
}
else{
        if (age >=70 && age <=89)
        {
        console.log("your grad is B");
        }
             else
                {
             if (age >=60 && age <=69)
                {
            console.log("your grad is C");
             }   
        else 
        {
            
            if (age >=60 && age <=69)
            {
              console.log("your grad is D");
                } 
                else 
                {
                    if (age >=0 && age <=49)
                    {
                        console.log("fffffffffff");
                    }
                }
            }
        }
    }
  
 
 
    // - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer
  
    var month =prompt("the  month  is: ");
    if (month =="September"   ||  month =="October"
     ||  month =="November"    )
     {
        console.log("the season is : Autumn");
     }
     
     else 
     {
        
        if (month =="December"   ||  month =="January"
        ||  month =="February"    )
        {
           console.log("the season is : Winter");
        }
        
        else 
        {
             
           
        if (month =="March"   ||  month =="April"
        ||  month =="February"    )
        {
           console.log("the season is : Spring");
        }
        
        else 
        {
            if (month == "June" || month =="July"
            ||
            month == "August")
            {
                console.log("the season is : Summer");
            }
            else
            {
                console.log("enter correct month name ");

            }
            
  
        }
 
        }
 
     }
         